import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 212;
const framePath = (i: number) => `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;

const STORY = [
  {
    from: 0,
    to: 0.15,
    label: "Dental Auxosys — The Foundation",
    lines: ["Precision begins beneath", "the surface."],
  },
  {
    from: 0.15,
    to: 0.3,
    label: "01 / Precision by design",
    lines: ["Every component.", "Every connection.", "Considered."],
  },
  {
    from: 0.3,
    to: 0.45,
    label: "02 / The crown",
    lines: ["Designed for a", "natural-looking finish."],
  },
  {
    from: 0.45,
    to: 0.6,
    label: "03 / The connection",
    lines: ["Precision-engineered", "interfaces."],
  },
  {
    from: 0.6,
    to: 0.75,
    label: "04 / Engineered in layers",
    lines: ["Every component", "has a purpose."],
  },
  {
    from: 0.75,
    to: 0.9,
    label: "05 / Precision engineering",
    lines: ["Designed to work together", "as one complete system."],
  },
  {
    from: 0.9,
    to: 1.001,
    label: "06 / One complete system",
    lines: ["Precision from", "foundation to crown."],
  },
];

const FIRST_CHAPTER = STORY[0]!;

/** bright ivory / pale green stage — no charcoal behind the animation */
function stageBackground(p: number) {
  if (p < 0.5) return "linear-gradient(170deg, #F7F7F4 0%, #EEF5F1 100%)";
  if (p < 0.8) return "linear-gradient(170deg, #EEF5F1 0%, #E4EEE7 100%)";
  return "linear-gradient(170deg, #F2F5F1 0%, #F7F7F4 100%)";
}

function stageSolid(p: number) {
  if (p < 0.5) return "#F4F6F2";
  if (p < 0.8) return "#EAF1EB";
  return "#F5F6F2";
}



export function ImplantSequence() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const images: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT);
    let disposed = false;
    let target = 0;
    let current = 0;
    let raf = 0;
    let lastDrawn = -1;
    let lastStage = "";

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        if (images[i]) return resolve();
        const img = new Image();
        img.decoding = "async";
        img.src = framePath(i);
        const done = () => {
          images[i] = img;
          resolve();
        };
        if (typeof img.decode === "function") {
          img
            .decode()
            .then(done)
            .catch(() => {
              img.onload = done;
              img.onerror = () => resolve();
            });
        } else {
          img.onload = done;
          img.onerror = () => resolve();
        }
      });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      lastDrawn = -1;
    };

    const draw = (index: number) => {
      const img = nearestLoaded(index);
      if (!img) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const stage = stageSolid(progressRef.current);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.fillStyle = stage;
      ctx.fillRect(0, 0, cw, ch);

      // Contain-style rendering: the implant is never cropped or distorted,
      // and the supplied studio frame is drawn exactly as provided.
      const scale = Math.min(cw / iw, ch / ih);
      const w = iw * scale;
      const h = ih * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) / 2;
      
      // Apply a slight blur to hide heavy JPEG compression artifacts (macroblocking)
      // because the source images are heavily compressed (~10KB for 720p).
      ctx.filter = "blur(1.5px)";
      ctx.drawImage(img, x, y, w, h);
      ctx.filter = "none"; // reset filter for the gradient overlays

      // Feather the photographic environment into the ivory stage so there is
      // no visible rectangle, side rail or hard boundary anywhere.
      const fadeX = Math.min(w * 0.3, cw * 0.28);
      const left = ctx.createLinearGradient(x, 0, x + fadeX, 0);
      left.addColorStop(0, stage);
      left.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = left;
      ctx.fillRect(x - 1, y, fadeX + 1, h);

      const right = ctx.createLinearGradient(x + w, 0, x + w - fadeX, 0);
      right.addColorStop(0, stage);
      right.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = right;
      ctx.fillRect(x + w - fadeX, y, fadeX + 1, h);

      const fadeY = h * 0.22;
      const bottom = ctx.createLinearGradient(0, y + h, 0, y + h - fadeY);
      bottom.addColorStop(0, stage);
      bottom.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = bottom;
      ctx.fillRect(x, y + h - fadeY, w, fadeY + 1);

      const top = ctx.createLinearGradient(0, y, 0, y + fadeY * 0.7);
      top.addColorStop(0, stage);
      top.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = top;
      ctx.fillRect(x, y - 1, w, fadeY * 0.7 + 1);
    };


    const nearestLoaded = (index: number) => {
      if (images[index]) return images[index];
      for (let d = 1; d < FRAME_COUNT; d++) {
        if (images[index - d]) return images[index - d];
        if (images[index + d]) return images[index + d];
      }
      return undefined;
    };

    const computeProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      return Math.min(1, Math.max(0, -rect.top / scrollable));
    };

    const onScroll = () => {
      const p = computeProgress();
      target = p * (FRAME_COUNT - 1);
      progressRef.current = p;
      setProgress(p);
    };

    const tick = () => {
      if (disposed) return;
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.05) current = target;
      const index = Math.round(current);
      const stage = stageSolid(progressRef.current);
      if (index !== lastDrawn || stage !== lastStage) {
        draw(index);
        lastDrawn = index;
        lastStage = stage;
      }
      raf = requestAnimationFrame(tick);
    };

    resize();

    (async () => {
      // priority: first frames so something appears immediately
      await load(0);
      if (disposed) return;
      draw(0);
      setReady(true);
      for (let i = 1; i < 40 && !disposed; i++) await load(i);
      // then progressive fill, coarse pass first for fast scrubbing
      for (let step = 8; step >= 1 && !disposed; step = Math.floor(step / 2)) {
        for (let i = 40; i < FRAME_COUNT && !disposed; i += step) await load(i);
        if (step === 1) break;
      }
    })();

    onScroll();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  const active: (typeof STORY)[number] =
    STORY.find((s) => progress >= s.from && progress < s.to) ?? FIRST_CHAPTER;
  const span = active.to - active.from;
  const local = Math.min(1, Math.max(0, (progress - active.from) / span));
  const textOpacity = Math.min(1, Math.min(local / 0.18, (1 - local) / 0.18));
  const dark = false;

  if (reduced) {
    return (
      <section id="technology" className="bg-charcoal px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow text-clinical-pale">Dental Auxosys — Advanced implant dentistry</p>
          <h2 className="display mt-6 text-4xl text-white sm:text-5xl">
            Precision from
            <br />
            foundation to crown.
          </h2>
          <img
            src={framePath(FRAME_COUNT - 1)}
            alt="Dental implant system, fully assembled: crown, abutment screw and implant body"
            className="mt-12 w-full"
            loading="lazy"
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="technology"
      aria-label="Dental implant system, scroll-controlled sequence"
      className="relative"
      style={{ height: "460vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 transition-[background-image] duration-700"
          style={{ backgroundImage: stageBackground(progress) }}
        />
        <div className="atmosphere pointer-events-none absolute inset-0 opacity-40" />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{
            opacity: ready ? 1 : 0,
            transition: "opacity 600ms ease",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 py-24 sm:px-10 lg:px-16">
          <div
            className="max-w-md"
            style={{
              opacity: textOpacity,
              transform: `translateY(${(1 - textOpacity) * 12}px)`,
              transition: "opacity 200ms linear",
            }}
          >
            <p
              className={`eyebrow ${dark ? "text-clinical-pale" : "text-clinical"}`}
            >
              {active.label}
            </p>
            <h2
              className={`display mt-5 text-3xl sm:text-4xl lg:text-5xl ${
                dark ? "text-white" : "text-charcoal"
              }`}
            >
              {active.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <div className="flex items-end justify-between gap-6">
            <p
              className={`eyebrow ${dark ? "text-white/45" : "text-charcoal-muted"}`}
            >
              Dental Auxosys
            </p>
            <div className="w-32 sm:w-48">
              <div
                className={`h-px w-full ${dark ? "bg-white/20" : "bg-charcoal/15"}`}
              >
                <div
                  className={`h-px ${dark ? "bg-clinical-pale" : "bg-clinical"}`}
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <p
                className={`eyebrow mt-3 text-right ${
                  dark ? "text-white/45" : "text-charcoal-muted"
                }`}
              >
                {String(Math.round(progress * 100)).padStart(2, "0")}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
