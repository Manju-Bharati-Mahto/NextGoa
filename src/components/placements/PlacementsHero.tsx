import Image from "next/image";

export function PlacementsHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F0F8FF]">
      <Image 
        src="/placements/hero3.png" 
        alt="60 LPA Placed at Microsoft - Monthly Stipend of 1,25,000" 
        fill
        priority
        className="object-cover object-top" 
      />
    </section>
  );
}
