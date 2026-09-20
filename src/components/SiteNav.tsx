import { useEffect, useState } from "react";

const LINKS = [
  { label: "Dental Implants", href: "#implants" },
  { label: "Treatments", href: "#treatments" },
  { label: "Technology", href: "#technology" },
  { label: "Patient Journey", href: "#journey" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const primary = tone === "dark" ? "text-charcoal" : "text-white";
  const secondary = tone === "dark" ? "text-charcoal-muted" : "text-white/55";
  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="group block leading-none"
      aria-label="Dental Auxosys — home"
    >
      <span className={`block text-lg font-semibold tracking-[0.16em] ${primary}`}>DENTAL</span>
      <span className={`eyebrow mt-1 block ${secondary}`}>AUXOSYS</span>
    </a>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-ivory/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[92rem] items-center justify-between px-6 py-4 sm:px-10">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="eyebrow text-charcoal-muted transition-colors duration-200 hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="eyebrow hidden bg-charcoal px-5 py-3 text-white transition-colors duration-300 hover:bg-clinical-dark sm:inline-block"
          >
            Book a consultation
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="eyebrow border border-input px-4 py-3 text-charcoal transition-colors duration-200 hover:bg-clinical-pale lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-ivory/95 px-6 py-6 backdrop-blur-xl lg:hidden"
        >
          <ul className="space-y-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }
                    setOpen(false);
                  }}
                  className="block text-base text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="eyebrow mt-2 inline-block bg-charcoal px-5 py-3 text-white"
              >
                Book a consultation
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
