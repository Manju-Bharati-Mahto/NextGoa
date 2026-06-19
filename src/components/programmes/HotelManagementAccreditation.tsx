import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function HotelManagementAccreditation() {
  const hotelLogos = [
    "/partners/hotel/image 246@2x.png",
    "/partners/hotel/image 247@2x.png",
    "/partners/hotel/image 248@2x.png",
    "/partners/hotel/image 249@2x.png",
    "/partners/hotel/image 250@2x.png",
    "/partners/hotel/image 251@2x.png",
    "/partners/hotel/image 252@2x.png", 
    "/partners/hotel/image 253@2x.png",
  ];

  return (
    <section className="w-full bg-[#FAFAFA] pb-12 pt-5 sm:pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* Accreditation Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 mb-12 sm:mb-16">
          <h2 className="text-[#E73649] text-center md:text-left max-w-[400px] section-heading">
            Recognition &<br/>Accreditation
          </h2>
          
          <div className="flex flex-col items-center">
            <div className="w-[300px] sm:w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
            
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]">
              <Image 
                src="/accreditation/a1.png" 
                alt="Hotel Management Accreditation Logo" 
                fill
                className="object-contain"
              />
            </div>
            
            <div className="w-[300px] sm:w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-8"></div>
          </div>
        </div>
      </div>

      {/* Internships Marquee Section */}
      <div className="text-center w-full">
        <p className="text-ink/80 text-[14px] sm:text-[16px] font-medium mb-2 uppercase tracking-widest">
          Partner Hotels
        </p>
        <h3 className="text-[#E73649] mb-12 section-heading">
          Internships across India's best.
        </h3>
        
        <div className="w-full border-t border-b border-black/10 py-10 sm:py-16">
          <Marquee 
            gradient={true} 
            gradientColor="#FAFAFA" 
            gradientWidth={100}
            speed={40}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-16 sm:gap-24 px-8 sm:px-12">
              {hotelLogos.map((logo, idx) => (
                <div key={idx} className="relative h-[80px] sm:h-[120px] min-w-[180px] sm:min-w-[240px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                  <Image 
                    src={logo} 
                    alt={`Hotel Partner ${idx + 1}`} 
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
