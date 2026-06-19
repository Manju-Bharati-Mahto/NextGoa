import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFD523] flex flex-col items-center justify-between pt-32 pb-0 overflow-hidden font-[family-name:var(--font-poppins)] relative">
      <div className="flex flex-col items-center text-center z-10 px-4">
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

      <div className="w-full max-w-[1440px] mt-8 relative flex-grow flex items-end justify-center">
        <Image
          src="/404-illustration.png"
          alt="Man relaxing on a beach"
          width={2278}
          height={1328}
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>
    </main>
  );
}
