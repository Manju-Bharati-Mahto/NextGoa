interface AccreditationsProps {
  data: {
    heading?: string;
    title?: string;
    image?: string;
  };
}
export function Accreditations({ data, }: AccreditationsProps) {
  const image = data?.image || "/RANK.svg";
  return (
    <section id="accreditations-recognitions" className="bg-brand-white px-6 scroll-mt-24 md:scroll-mt-32 py-10 sm:py-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-ink section-subheading">
            {data?.heading}
        </h2>
        <h3
          className="mt-2 section-heading text-brand"
          dangerouslySetInnerHTML={{
            __html: data?.title || "",
          }}
        />


        {/* Top faded divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        {/* Rankings SVG */}
        <div className="py-10 sm:py-12 flex justify-center items-center overflow-hidden">
          <img
            src={image}
            alt="Accreditations and Rankings"
            className="h-auto w-full max-w-6xl origin-center px-4 sm:scale-100"
          />
         
        </div>

        {/* Bottom faded divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      </div>
    </section>
  );
}
