"use client";

import { useEffect } from "react";

const TOTAL_FRAMES = 15;
const ANIMATION_SPEED_MS = 100;

export function AnimatedFavicon() {
  useEffect(() => {
    let currentFrame = 1;
    let interval: NodeJS.Timeout | null = null;

    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    const imgCache = new Map<number, HTMLImageElement>();
    // Preload images
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameString = i.toString().padStart(3, "0");
      img.src = `/favicon/frame-${frameString}.png`;
      imgCache.set(i, img);
    }

    const setFavicon = (url: string) => {
      const links = document.querySelectorAll("link[rel~='icon']");
      if (links.length > 0) {
        links.forEach(l => {
          (l as HTMLLinkElement).href = url;
        });
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = url;
        document.head.appendChild(newLink);
      }
    };

    let originalHref = "/icon.svg";
    const initialLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (initialLink) {
      originalHref = initialLink.href;
    } else {
      setFavicon(originalHref);
    }

    const workerCode = `
      let interval;
      self.onmessage = function(e) {
        if (e.data.command === 'start') {
          interval = setInterval(() => self.postMessage('tick'), e.data.speed);
        } else if (e.data.command === 'stop') {
          clearInterval(interval);
        }
      };
    `;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(blob));

    worker.onmessage = () => {
      const img = imgCache.get(currentFrame);
      if (img && img.complete && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.restore();

        setFavicon(canvas.toDataURL("image/png"));
      }

      currentFrame = (currentFrame % TOTAL_FRAMES) + 1;
    };

    const startAnimation = () => {
      worker.postMessage({ command: 'start', speed: ANIMATION_SPEED_MS });
    };

    const stopAnimation = () => {
      worker.postMessage({ command: 'stop' });
      setFavicon(originalHref);
    };

    const specialTitles = [
      "Manifesting Your Comeback RN",
      "Knew You'd Be Back."
    ];
    let originalTitle = document.title;
    let titleTimeout: NodeJS.Timeout | null = null;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (titleTimeout) clearTimeout(titleTimeout);
        if (!specialTitles.includes(document.title)) {
          originalTitle = document.title;
        }
        document.title = "Manifesting Your Comeback RN";
        startAnimation();
      } else {
        document.title = "Knew You'd Be Back.";
        if (titleTimeout) clearTimeout(titleTimeout);
        titleTimeout = setTimeout(() => {
          document.title = originalTitle;
        }, 2000);
        stopAnimation();
      }
    };

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      worker.terminate();
      setFavicon(originalHref);
      if (titleTimeout) clearTimeout(titleTimeout);
      if (specialTitles.includes(document.title)) {
        document.title = originalTitle;
      }
    };
  }, []);

  return null;
}
