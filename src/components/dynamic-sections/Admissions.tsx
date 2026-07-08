import Image from "next/image";
import { Eyebrow } from "./Decor";
import { ExamDatesTicket } from "./ExamDatesTicket";

interface AdmissionsProps {
  data: {
    eyebrow?: string;
    heading?: string;

    leftTitle?: string;
    leftDescription?: string;

    registeredText?: string;
    registeredImage?: string;

    entrance_label?: string;

    footer?: string;

    examTicket?: {
      examLabel?: string;
      examDate?: string;
      applicableLabel?: string;
      programs?: string[];
      buttonText?: string;
      buttonLink?: string;
    };

    dateCards?: {
      badge: string;
      title: string;
      description: string;
      color: "brand" | "ocean";
    }[];

    acceptedTests?: string[];
  };
}

export function Admissions({
  data,
}: AdmissionsProps) {

  const dateCards =
    data?.dateCards || [];

  const acceptedTests =
    data?.acceptedTests || [];
   return (
    <section
      id="admissions"
      className="bg-brand-white py-0"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 sm:py-8">

        <div className="flex justify-center mb-6">
          <img
            src="/1.svg"
            alt="Admissions illustration"
            className="h-[97px] w-auto"
          />
        </div>

        <Eyebrow className="mt-3 text-ink">
          <span className="inline-flex items-center gap-2">
            <span className="hidden sm:block h-2 w-2 animate-pulse rounded-full bg-brand" />
            {data.eyebrow}
          </span>
        </Eyebrow>

        <h2 className="mt-2 text-center section-heading text-brand">
          {data.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Left */}

          <div className="flex flex-col justify-center text-left">

            <h3
              className="font-poppins font-semibold text-[32px] leading-tight tracking-tight text-ink"
              dangerouslySetInnerHTML={{
                __html: data.leftTitle || "",
              }}
            />

            <p
              className="mt-4 max-w-md section-body text-ink/70"
              dangerouslySetInnerHTML={{
                __html: data.leftDescription || "",
              }}
            />

            <div className="mt-6 flex items-center gap-3">

              {data.registeredImage && (

                <Image
                  src={data.registeredImage}
                  alt="Registered Students"
                  width={1200}
                  height={1200}
                  className="h-8 w-auto object-contain"
                />

              )}

              <p className="section-body text-ink/70">
                {data.registeredText}
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="flex items-center justify-center py-6 sm:py-0 w-full">

            <div className="w-full scale-[1.25] sm:scale-100 origin-center">

              <ExamDatesTicket
  data={data?.examTicket}
/>

            </div>

          </div>

        </div>
                {/* Date Cards */}

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 text-left">

          {dateCards.map((card, index) => (

            <div
              key={index}
              className={`rounded-[24px] p-8 text-white shadow-sm ${
                card.color === "ocean"
                  ? "bg-ocean"
                  : "bg-brand"
              }`}
            >

              <div>

                <span className="inline-block rounded-full bg-[#FEDB2F] text-[#1F1F1F] px-4 py-1.5 font-poppins text-[13px] font-bold uppercase tracking-wider">

                  {card.badge}

                </span>

              </div>

              <p className="mt-4 font-sans font-medium text-[26px] sm:text-[32px] leading-tight">

                {card.title}

              </p>

              <div className="w-full h-px bg-white/20 my-4" />

              <p
                className="section-body text-white/90"
                dangerouslySetInnerHTML={{
                  __html: card.description,
                }}
              />

            </div>

          ))}

        </div>
        
                {/* Accepted Tests */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">

          <span className="mr-1 font-[family-name:var(--font-poppins)] font-normal text-[15px] sm:text-[17px] text-ink/60">
{data.entrance_label}
           

          </span>

          {acceptedTests.map((test, index) => (

            <span
              key={index}
              className="rounded-full bg-zinc-100 px-3 py-1.5 font-[family-name:var(--font-poppins)] font-normal text-xs text-ink/80 ring-1 ring-zinc-200/50"
            >

              {test}

            </span>

          ))}

        </div>

        
      </div>

    </section>

  );

}