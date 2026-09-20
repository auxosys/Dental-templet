import { Wordmark } from "./SiteNav";

const NAV = [
  { label: "Dental Implants", href: "#implants" },
  { label: "Treatments", href: "#treatments" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const DETAILS = [
  { label: "Phone", value: "[PHONE NUMBER]" },
  { label: "Email", value: "[EMAIL ADDRESS]" },
  { label: "Clinic address", value: "[CLINIC ADDRESS]" },
  { label: "Opening hours", value: "[OPENING HOURS]" },
  { label: "Social", value: "[SOCIAL LINKS]" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-charcoal px-6 pt-20 pb-8 sm:px-10 sm:pb-10">
      <div className="mx-auto max-w-[92rem]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-14">
          <div className="col-span-2 lg:col-span-1">
            <img src="/dk_mark_white_green.svg" alt="Dental Kraft Mark" className="mb-6 h-12 w-auto" />
            <Wordmark tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Modern Dental Care
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="eyebrow mt-8 inline-block border border-white/25 px-5 py-3 text-white transition-colors duration-300 hover:bg-clinical-dark"
            >
              Book a consultation
            </a>
          </div>

          <nav aria-label="Footer" className="col-span-1">
            <p className="eyebrow text-clinical-pale">Navigate</p>
            <ul className="mt-6 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-1">
            <p className="eyebrow text-clinical-pale">Contact</p>
            <dl className="mt-6 space-y-4">
              {DETAILS.map((detail) => (
                <div key={detail.label}>
                  <dt className="eyebrow text-white/40">{detail.label}</dt>
                  <dd className="mt-1 text-sm text-white/75">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-white/35">Dental Kraft</p>
          <p className="eyebrow text-white/35">Advanced implant dentistry</p>
        </div>
      </div>
    </footer>
  );
}
