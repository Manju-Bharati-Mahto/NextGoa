import Image from "next/image";

type FinalCtaAction = {
  label: string;
  href: string;
  variant?: "primary" | "dark";
  icon?: "phone";
  triggerEnquiry?: boolean;
};

type FinalCtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  actions?: FinalCtaAction[];
  background?: "gradient" | "plain";
};

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 3h3l1 4-2 1a8.5 8.5 0 0 0 4 4l1-2 4 1v3a1 1 0 0 1-1 1A11 11 0 0 1 3 4a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

/**
 * Closing call-to-action. A dark, photo-backed card on a cream wash, then a
 * cyan wave that hands off into the (cyan) footer. Reuses the campus render with
 * a dark overlay so the white copy stays legible.
 */
export function FinalCta({
  eyebrow = "Admissions Open 2026",
  title = "Ready to begin?",
  description = "Admissions are open for the 2026 academic year. Explore programmes, check eligibility, and take the first step toward a life worth talking about.",
  actions = [],
  background = "gradient",
}: FinalCtaProps) {
  return (
    <section
      className="bg-brand-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:pb-17 sm:pt-5 pt-5 pb-15">
        <div className="relative isolate overflow-hidden rounded-[20px] shadow-xl">
          <Image
            src="/hero-campus.webp"
            alt=""
            fill
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="-z-10 object-cover object-bottom"
          />
          <div className="absolute inset-0 -z-10 bg-black/75" />

          <div className="px-6 py-20 text-center sm:py-28">
            <span className="inline-block rounded-full bg-sunshine px-5 py-2 text-sm font-bold text-ink">
              {eyebrow}
            </span>
            <h2 className="mt-6 text-center text-white section-heading">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-white section-body">
              {description}
            </p>

            {actions.length > 0 ? (
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
                {actions.map((action) => {
                  const isPrimary = action.variant === "primary";
                  const isButton = action.triggerEnquiry || action.href === "#";
                  
                  const commonProps = {
                    key: action.label,
                    "data-enquiry-trigger": action.triggerEnquiry ? "true" : undefined,
                    className: `inline-flex min-h-12 w-full max-w-[280px] sm:w-auto sm:max-w-none items-center justify-center gap-2 rounded-full px-6 font-sans text-[16px] font-bold transition ${
                      isPrimary
                        ? "bg-brand text-white hover:bg-brand-dark"
                        : "border border-white/30 bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md hover:bg-white/30"
                    }`
                  };

                  return isButton ? (
                    <button
                      {...commonProps}
                      type="button"
                    >
                      {action.icon === "phone" ? <PhoneIcon /> : null}
                      {action.label}
                    </button>
                  ) : (
                    <a
                      {...commonProps}
                      href={action.href}
                    >
                      {action.icon === "phone" ? <PhoneIcon /> : null}
                      {action.label}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
