import Image from "next/image";

export default function PharmacyAccreditation() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-[#E73649] mb-12 section-heading">
          Recognition & Accreditation
        </h2>
        
        <div className="w-full flex flex-col items-center justify-center">
          {/* Top Fading Line */}
          <div className="w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-10 sm:mb-16"></div>
          
          <div className="relative w-full max-w-[900px] h-[120px] sm:h-[180px]">
            <Image 
              src="/AICTE.png" 
              alt="Recognition and Accreditation Logos" 
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom Fading Line */}
          <div className="w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10 sm:mt-16"></div>
        </div>

      </div>
    </section>
  );
}
