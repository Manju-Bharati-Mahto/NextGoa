import Image from "next/image";
import Link from "next/link";
import HideFooter from "@/components/layout/HideFooter";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-[#FFD523] flex flex-col pt-[10vh] overflow-hidden font-[family-name:var(--font-poppins)] relative">
      <HideFooter />
      <div className="flex flex-col items-start text-left z-10 px-8 md:px-16 lg:px-24 xl:px-32 mt-[100px] relative w-full">
        <h1 
          className="text-[#ED383F] font-black text-[120px] md:text-[160px] lg:text-[200px] leading-none tracking-tight"
          style={{
            WebkitTextStroke: "4px #1A1A1A",
            textShadow: "8px 8px 0px #1A1A1A"
          }}
        >
          404
        </h1>
        <h2 className="text-[#1A1A1A] font-black text-4xl md:text-[56px] lg:text-[64px] mt-2 md:mt-4 tracking-tight">
          NOT HERE
        </h2>
        <p className="text-[#1A1A1A] font-semibold text-lg md:text-2xl lg:text-3xl mt-4 md:mt-6">
          But Hey, There Must Be a Beach Nearby.
        </p>
      </div>

      {/* Footer background behind the PNG */}
      <div className="absolute bottom-0 left-0 right-0 h-[35vh] sm:h-[45vh] lg:h-[50vh] z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[18vw] sm:top-[10vw] bottom-0 left-0 right-0 bg-[#0caadd]" />
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-top bg-[length:300%_auto] sm:bg-[length:100%_auto]" 
          style={{ backgroundImage: "url('/footer.svg')" }}
        />
      </div>

      <div className="absolute right-0 bottom-0 w-[96%] md:w-[94%] lg:w-[90%] xl:w-[85%] max-w-[1800px] z-0 pointer-events-none">
        <Image
          src="/404-illustration.png"
          alt="Man relaxing on a beach"
          width={2278}
          height={1328}
          className="w-full h-auto object-contain object-right-bottom"
          priority
        />
      </div>
    </main>
  );
}
