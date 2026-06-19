import Image from "next/image";
import Link from "next/link";
import HideFooter from "@/components/layout/HideFooter";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-[#FFD523] flex flex-col items-center pt-[15vh] overflow-hidden font-[family-name:var(--font-poppins)] relative">
      <HideFooter />
      <div className="flex flex-col items-center text-center z-10 px-4 relative">
        <h1 
          className="text-[#ED383F] font-black text-9xl md:text-[200px] leading-none tracking-tight"
          style={{
            WebkitTextStroke: "4px #1A1A1A",
            textShadow: "8px 8px 0px #1A1A1A"
          }}
        >
          404
        </h1>
        <h2 className="text-[#1A1A1A] font-black text-5xl md:text-[64px] mt-4 tracking-tight">
          NOT HERE
        </h2>
        <p className="text-[#1A1A1A] font-semibold text-xl md:text-3xl mt-6">
          But Hey, There Must Be a Beach Nearby.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full z-0 pointer-events-none">
        <Image
          src="/404-illustration.png"
          alt="Man relaxing on a beach"
          width={2278}
          height={1328}
          className="w-full h-auto"
          priority
        />
      </div>
    </main>
  );
}
