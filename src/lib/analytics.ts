declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const pushToDataLayer = (
  event: string,
  payload: Record<string, any> = {}
) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const data = {
    event,
    ...payload,
  };

  window.dataLayer.push(data);

  // Temporary: see events in browser console
//  console.log("======================DataLayer Event==============:", data);
};