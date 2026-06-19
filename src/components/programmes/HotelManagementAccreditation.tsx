import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function HotelManagementAccreditation() {
  const hotelLogos = [
    "/partners/hotel/image 246@2x.png",
    "/partners/hotel/image 247@2x.png",
    "/partners/hotel/image 248@2x.png",
    "/partners/hotel/image 250@2x.png",
    "/partners/hotel/image 251@2x.png",
    "/partners/hotel/image 252@2x.png", 
    "/partners/hotel/image 253@2x.png",
    "/partners/hotel/oberoi.png",
  ];

  return (
    <section className="w-full bg-[#FAFAFA] pb-12 pt-5 sm:pb-16">
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
                <div key={idx} className={`relative h-[80px] sm:h-[120px] min-w-[180px] sm:min-w-[240px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity ${logo.includes('oberoi') ? 'scale-[1.3]' : ''}`}>
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
