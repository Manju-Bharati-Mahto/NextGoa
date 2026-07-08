import React from "react";

interface BannerProps {
  data: {
    eyebrow?: string;
    heading?: string;
    subHeading?: string;
    description?: string;
    backgroundImage?: string;
  };
}

export function Banner({ data }: BannerProps) {
  return (
    <section
      id="hero"
      className="relative flex h-[110vh] flex-col items-center justify-start pt-24 2xl:pt-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${data?.backgroundImage || "/about-bg23-trimmed.png"})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 pt-4 lg:pt-8 2xl:pt-16 text-center">
        {data?.eyebrow && (
          <span className="inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-bold text-ink shadow-sm uppercase tracking-wider mb-6">
            {data.eyebrow}
          </span>
        )}
        <h1
          className="font-poppins mx-auto w-full max-w-none text-[38px] sm:text-[56px] font-bold leading-[1.1] tracking-tight text-ink"
          dangerouslySetInnerHTML={{
            __html: data?.heading || "",
          }}
        />
        {data?.subHeading && (
          <p className="mx-auto mt-4 max-w-2xl text-[24px] sm:text-[32px] font-medium font-sans text-ink">
            {data.subHeading}
          </p>
        )}
        {data?.description && (
          <p
            className="mx-auto mt-6 max-w-3xl text-[18px] font-poppins font-normal text-ink"
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          />
        )}
      </div>

      <div className="flex-1" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-white to-transparent pointer-events-none" />
    </section>
  );
}
