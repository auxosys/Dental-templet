import { createFileRoute } from "@tanstack/react-router";

import { ImplantSequence } from "@/components/ImplantSequence";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { DentalImplantIllustration } from "@/components/DentalImplantIllustration";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dental Auxosys — Advanced Implant Dentistry" },
      {
        name: "description",
        content:
          "Dental Auxosys brings advanced dental technology and thoughtful clinical care together for a calm, modern dental experience.",
      },
      { property: "og:title", content: "Dental Auxosys — Advanced Implant Dentistry" },
      {
        property: "og:description",
        content:
          "Precision for your smile. Advanced dental care, designed around you, at Dental Auxosys.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TREATMENTS = [
  {
    id: "01",
    title: "Dental Implants",
    copy: "Planned placement supported by advanced imaging and precision components.",
  },
  {
    id: "02",
    title: "Implant Restoration",
    copy: "Crowns and connections designed for everyday function and a natural finish.",
  },
  {
    id: "03",
    title: "Cosmetic Dentistry",
    copy: "Considered, conservative work focused on proportion and tone.",
  },
  {
    id: "04",
    title: "Preventive Dentistry",
    copy: "Routine care and monitoring to help keep treatment simple over time.",
  },
  {
    id: "05",
    title: "Restorative Dentistry",
    copy: "Repair and rebuild work aimed at long-term comfort and stability.",
  },
  {
    id: "06",
    title: "Oral Surgery",
    copy: "Comprehensive surgical care for complex extractions and advanced dental procedures.",
  },
];

const PRECISION = [
  { title: "Stability", copy: "Designed around a precise foundation." },
  { title: "Function", copy: "Engineered for everyday performance." },
  { title: "Aesthetics", copy: "Designed to support a natural-looking result." },
];

const JOURNEY = [
  { step: "01", title: "Consultation", copy: "We listen first, then examine and discuss options." },
  { step: "02", title: "Planning", copy: "Imaging and planning before any treatment begins." },
  { step: "03", title: "Implant Placement", copy: "A controlled, carefully staged procedure." },
  { step: "04", title: "Restoration", copy: "The crown is fitted and refined for comfort." },
  { step: "05", title: "Follow-up", copy: "Reviews and maintenance guidance over time." },
];

const TRUST = [
  { title: "Precision", copy: "Thoughtful planning and controlled treatment." },
  { title: "Comfort", copy: "A calm and considered patient experience." },
  {
    title: "Confidence",
    copy: "Care focused on helping patients feel informed and supported.",
  },
];

function Index() {
  return (
    <div id="top" className="bg-ivory">
      <SiteNav />

      <main>
        {/* HERO — section A: ivory */}
        <section className="relative overflow-hidden bg-ivory px-6 pt-24 pb-14 sm:px-10 lg:pt-36 lg:pb-28">
          
          {/* Decorative bubbles */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-charcoal opacity-[0.03]" />
          <div className="pointer-events-none absolute -top-16 -right-16 h-[300px] w-[300px] rounded-full bg-charcoal opacity-[0.03]" />
          <div className="pointer-events-none absolute top-[20%] left-[30%] h-[200px] w-[200px] rounded-full bg-clinical opacity-[0.06]" />
          <div className="pointer-events-none absolute top-[60%] left-[10%] h-[300px] w-[300px] rounded-full bg-charcoal opacity-[0.03]" />
          <div className="pointer-events-none absolute top-[40%] right-[10%] h-[150px] w-[150px] rounded-full bg-clinical opacity-[0.05]" />
          <div className="pointer-events-none absolute bottom-[-10%] right-[30%] h-[400px] w-[400px] rounded-full bg-charcoal opacity-[0.04]" />
          <div className="pointer-events-none absolute bottom-[5%] right-[5%] h-[180px] w-[180px] rounded-full bg-clinical opacity-[0.05]" />
          {/* additional smaller bubbles for depth */}
          <div className="pointer-events-none absolute top-[55%] right-[45%] h-[90px] w-[90px] rounded-full bg-clinical opacity-[0.06]" />
          <div className="pointer-events-none absolute top-[15%] left-[45%] h-[80px] w-[80px] rounded-full bg-charcoal opacity-[0.04]" />

          <div className="relative mx-auto grid max-w-[92rem] lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="mx-auto max-w-xl text-center lg:text-left lg:mx-0 lg:max-w-3xl">
              <Reveal>
                <p className="eyebrow text-clinical text-[0.65rem] sm:text-xs tracking-[0.12em]">
                  Dental Auxosys — Advanced implant dentistry
                </p>
                <h1 className="display mt-4 text-[2.6rem] leading-[1.1] text-charcoal sm:text-5xl lg:text-[5.25rem] lg:leading-[1.05]">
                  Precision for
                  <br />
                  your smile.
                </h1>
              </Reveal>

              {/* Mobile-only illustration — shown between h1 and subtext */}
              <Reveal delay={80}>
                <DentalImplantIllustration className="lg:hidden mx-auto mt-6 w-52 h-auto" />
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-5 max-w-xs text-base leading-snug text-charcoal-soft mx-auto lg:mx-0 lg:max-w-md lg:text-xl">
                  Advanced dental care,
                  <br />
                  designed around you.
                </p>
                <div className="mt-8 flex flex-col gap-3 justify-center sm:flex-row lg:justify-start">
                  <a
                    href="#contact"
                    className="eyebrow bg-charcoal px-6 py-4 text-white transition-colors duration-300 hover:bg-clinical-dark text-center"
                  >
                    Book a consultation
                  </a>
                  <a
                    href="#implants"
                    className="eyebrow border border-charcoal px-6 py-4 text-charcoal transition-colors duration-300 hover:bg-clinical-pale text-center"
                  >
                    Explore dental implants
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Desktop-only right column */}
            <Reveal delay={120} className="hidden lg:flex flex-col justify-start">
              <DentalImplantIllustration className="w-full max-w-md mx-auto xl:ml-auto mb-4" />
              <div className="h-px w-full bg-border" />
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal-muted lg:text-base">
                At Dental Auxosys, advanced technology and thoughtful clinical care come
                together for a calm, modern dental experience.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CLINIC INTRODUCTION — section B: white */}
        <section id="about" className="bg-pure px-6 py-14 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-[92rem] grid gap-10 lg:gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left: label + image (desktop only) */}
            <Reveal>
              <p className="eyebrow text-clinical lg:-mt-4">Dental Auxosys</p>
              <img 
                src="/wavy-veneers.jpg" 
                alt="Dental Veneers Illustration" 
                className="hidden lg:block lg:-mt-16 w-full lg:max-w-md object-contain"
              />
            </Reveal>
            {/* Right: heading + copy + CTA */}
            <Reveal delay={100}>
              <h2 className="display text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[clamp(2rem,4.4vw,3.5rem)]">
                Modern dentistry.
                <br />
                Thoughtful care.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal-muted lg:mt-8 lg:text-lg">
                Dental Auxosys brings together advanced dental technology, precision
                engineering, and a thoughtfully designed environment. Our focus is on
                delivering calm, transparent, and highly effective clinical care.
              </p>
              <a
                href="#contact"
                className="eyebrow mt-7 inline-block border border-charcoal/20 px-5 py-3 text-charcoal transition-colors duration-300 hover:bg-clinical hover:text-white hover:border-clinical"
              >
                Meet Dental Auxosys
              </a>
            </Reveal>
          </div>
        </section>

        {/* IMPLANTS INTRO — section C: very pale green */}
        <section
          id="implants"
          className="px-6 py-16 sm:px-10 lg:py-24"
          style={{ backgroundColor: "#EEF5F1" }}
        >
          <div className="mx-auto max-w-[92rem]">
            <Reveal>
              <p className="eyebrow text-clinical">Dental implants</p>
              <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                A complete system,
                <br />
                built layer by layer.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal-muted">
                Scroll to move through the implant system — from the foundation beneath
                the surface to the finished crown.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SCROLL-CONTROLLED IMPLANT SEQUENCE */}
        <ImplantSequence />

        {/* FINAL CTA after assembly — ivory */}
        <section className="relative overflow-hidden bg-ivory px-6 py-20 sm:px-10 lg:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(90% 70% at 50% 0%, #EEF5F1 0%, rgba(247,247,244,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[92rem] text-center">
            <Reveal>
              <h2 className="display mx-auto max-w-3xl text-[clamp(2.25rem,5vw,4.25rem)] text-charcoal">
                Built around
                <br />
                your smile.
              </h2>
              <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-charcoal-muted">
                Precision technology. Thoughtful design. A restoration made to feel
                natural.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="#contact"
                  className="eyebrow bg-charcoal px-6 py-4 text-white transition-colors duration-300 hover:bg-clinical-dark"
                >
                  Book a consultation
                </a>
                <a
                  href="#precision"
                  className="eyebrow border border-charcoal px-6 py-4 text-charcoal transition-colors duration-300 hover:bg-clinical-pale"
                >
                  Explore implant technology
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TREATMENTS — white */}
        <section id="treatments" className="bg-pure px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-[92rem]">
            <Reveal>
              <p className="eyebrow text-clinical">Treatments</p>
              <h2 className="display mt-7 max-w-2xl text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Care designed around you.
              </h2>
            </Reveal>
            <ul className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {TREATMENTS.map((treatment, i) => (
                <Reveal
                  as="li"
                  key={treatment.id}
                  delay={i * 70}
                  className="group bg-pure p-10 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
                >
                  <p className="eyebrow text-charcoal-muted">{treatment.id}</p>
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-charcoal">
                    {treatment.title}
                  </h3>
                  <div className="mt-5 h-px w-8 bg-clinical transition-all duration-300 group-hover:w-16" />
                  <p className="mt-5 text-sm leading-relaxed text-charcoal-muted">
                    {treatment.copy}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY PRECISION MATTERS — ivory */}
        <section id="precision" className="bg-ivory px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-[92rem]">
            <Reveal>
              <p className="eyebrow text-clinical">Why precision matters</p>
            </Reveal>
            <div className="mt-14 grid gap-14 lg:grid-cols-3">
              {PRECISION.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="h-px w-full bg-border" />
                  <h3 className="eyebrow mt-8 text-charcoal">{item.title}</h3>
                  <p className="mt-5 max-w-xs text-lg leading-snug text-charcoal-soft">
                    {item.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY — dark charcoal */}
        <section
          className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28"
          style={{ backgroundColor: "#171A18" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(70% 60% at 80% 20%, rgba(41,72,61,0.75) 0%, rgba(23,26,24,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[92rem]">
            <Reveal>
              <p className="eyebrow text-clinical-pale">Technology</p>
              <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4.6vw,3.75rem)] text-white">
                Precision you can see.
                <br />
                Engineering you can trust.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                {[
                  ["Digital planning", "Treatment mapped before it begins."],
                  ["Guided placement", "Controlled, measured technique."],
                  ["Precision components", "Interfaces designed to fit as one system."],
                ].map(([title, copy]) => (
                  <div key={title} className="p-10" style={{ backgroundColor: "#171A18" }}>
                    <div className="h-px w-8 bg-clinical" />
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/55">{copy}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PATIENT JOURNEY — very pale green */}
        <section
          id="journey"
          className="px-6 py-16 sm:px-10 lg:py-24"
          style={{ backgroundColor: "#EEF5F1" }}
        >
          <div className="mx-auto max-w-[92rem]">
            <Reveal>
              <p className="eyebrow text-clinical relative z-10 lg:-mt-4">Dental Auxosys</p>
              <h2 className="display mt-4 text-3xl text-charcoal sm:text-4xl lg:text-5xl">
                Advanced dental care,
                <br />
                designed around you.
              </h2>
            </Reveal>
            <ol className="mt-16 border-t border-charcoal/15">
              {JOURNEY.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.step}
                  delay={i * 60}
                  className="grid gap-4 border-b border-charcoal/15 py-8 sm:grid-cols-[6rem_14rem_1fr] sm:items-baseline"
                >
                  <span className="eyebrow text-clinical">{item.step}</span>
                  <h3 className="text-xl font-medium tracking-tight text-charcoal">
                    {item.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-charcoal-muted">
                    {item.copy}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* TRUST — subtle blue-green */}
        <section
          className="px-6 py-16 sm:px-10 lg:py-24"
          style={{ backgroundColor: "#DCECEF" }}
        >
          <div className="mx-auto max-w-[92rem]">
            <Reveal>
              <h2 className="display max-w-2xl text-[clamp(2rem,4.4vw,3.5rem)] text-charcoal">
                Technology matters.
                <br />
                So does care.
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-3">
              {TRUST.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 80}
                  className="bg-pure p-10"
                >
                  <h3 className="eyebrow text-charcoal">{item.title}</h3>
                  <p className="mt-6 text-base leading-relaxed text-charcoal-muted">
                    {item.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
