import Image from "next/image";

export default function PhysiotherapyNetwork() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          
          <h3 className="text-ink mb-2 section-subheading">
            Hospital & Industry Network
          </h3>
          <h2 className="text-[#E73649] mb-4 section-heading">
            Where you'll train and serve.
          </h2>
          <p className="text-ink/70 mb-12 sm:mb-16 max-w-2xl mx-auto section-body">
            Indicative network from the wider Parul University clinical and industry partnerships.
          </p>
          
          <div className="w-full flex flex-col items-center justify-center">
            {/* Top Fading Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-10 sm:mb-14"></div>
            
            <div className="relative w-full max-w-[1000px] h-[100px] sm:h-[140px]">
              <Image 
                src="/comp2.png" 
                alt="Hospital and Industry Network Partners" 
                fill
                className="object-contain"
              />
            </div>

            {/* Bottom Fading Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10 sm:mt-14"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
