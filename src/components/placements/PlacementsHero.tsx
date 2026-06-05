import Image from "next/image";

export function PlacementsHero() {
  return (
    <section className="relative w-full aspect-[788/1200] md:aspect-auto min-h-0 md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F0F8FF] mt-8 md:mt-0">
      {/* Desktop Hero Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image 
          src="/placements/hero3.png" 
          alt="60 LPA Placed at Microsoft - Monthly Stipend of 1,25,000" 
          fill
          priority
          className="object-cover object-top" 
        />
      </div>
      {/* Mobile Hero Background */}
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image 
          src="/fees/place hero.png" 
          alt="60 LPA Placed at Microsoft - Monthly Stipend of 1,25,000" 
          fill
          priority
          className="object-cover object-top" 
        />
      </div>
    </section>
  );
}
