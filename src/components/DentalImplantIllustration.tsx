import React from "react";

/**
 * DentalImplantIllustration
 * ---------------------------------------------------------
 * Standalone recreation of the RIGHT-HALF hero illustration
 * (dentist holding a mirror up to a giant tooth, an implant
 * screw seated in the gum, a wall calendar, and a potted
 * plant), rebuilt as clean SVG so every color is a named,
 * tunable token instead of a baked-in hex value.
 *
 * Usage:
 *   <DentalImplantIllustration />
 *   <DentalImplantIllustration className="w-full h-auto" />
 *
 * To retheme, either edit the COLORS object below, or pass
 * a `colors` prop with any subset of keys to override them.
 *
 * FIX (hair): the hair was previously drawn as a free-floating
 * path + a separate bun circle positioned with hand-picked
 * coordinates that didn't line up with the head circle, so the
 * hair visibly "floated" above/beside the head at some sizes.
 * The hair is now built as a true annular band computed from
 * the SAME center/radius as the head circle (330, 510, r=46),
 * so its inner edge sits exactly flush against the scalp with
 * no gap, and the bun is positioned to overlap that band by a
 * safe margin instead of floating separately.
 * --------------------------------------------------------- */

export interface DentalImplantIllustrationColors {
  panelBg: string; // light mint card background behind the scene
  blob: string; // soft teal backdrop shape behind the tooth
  floorLine: string; // ground line the character stands on

  hair: string; // navy hair
  skin: string; // skin tone
  scrubDark: string; // scrub sleeve / shadow
  scrubLight: string; // scrub body highlight
  shoe: string; // shoe / shadow under feet

  mirrorHandle: string; // mirror-tool handle
  mirrorHead: string; // mirror-tool reflective head

  toothWhite: string; // main tooth body
  toothShade: string; // tooth core shadow
  sparkle: string; // sparkle accents around the tooth

  gumOuter: string; // gum mound base
  gumInner: string; // gum mound highlight
  implantMetal: string; // implant screw body
  implantMetalDark: string; // implant screw shading

  brushHandle: string; // toothbrush handle
  brushBristle: string; // toothbrush bristles
  toothpaste: string; // toothpaste swirl

  calendarBody: string; // calendar page
  calendarHeader: string; // calendar hanger strip
  calendarRing: string; // spiral rings
  calendarDayA: string; // marked-day accent 1 (orange)
  calendarDayB: string; // marked-day accent 2 (lavender)

  potBody: string; // plant pot
  leafDark: string; // back leaf
  leafLight: string; // front leaf
}

const COLORS: DentalImplantIllustrationColors = {
  panelBg: "transparent",
  blob: "#CDEDE8",
  floorLine: "#1E2749",

  hair: "#232B4D",
  skin: "#FBC9A6",
  scrubDark: "#2E9C90",
  scrubLight: "#57C9BC",
  shoe: "#232B4D",

  mirrorHandle: "#3A3F63",
  mirrorHead: "#8FD9CF",

  toothWhite: "#FFFFFF",
  toothShade: "#E7F1F0",
  sparkle: "#F5A623",

  gumOuter: "#F58B72",
  gumInner: "#F7A78F",
  implantMetal: "#9A9AC2",
  implantMetalDark: "#6E6E9C",

  brushHandle: "#3A3F63",
  brushBristle: "#EDEBF7",
  toothpaste: "#5FD3D8",

  calendarBody: "#FFFFFF",
  calendarHeader: "#3A3F63",
  calendarRing: "#5FD3D8",
  calendarDayA: "#F5A623",
  calendarDayB: "#C9C7E8",

  potBody: "#232B4D",
  leafDark: "#1E8F7D",
  leafLight: "#35B39B",
};

interface Props {
  className?: string;
  colors?: Partial<DentalImplantIllustrationColors>;
}

export const DentalImplantIllustration: React.FC<Props> = ({ className, colors }) => {
  const c: DentalImplantIllustrationColors = { ...COLORS, ...colors };

  return (
    <svg
      viewBox="0 0 1300 1150"
      className={className}
      role="img"
      aria-label="Illustration of a dentist examining a giant tooth beside a dental implant embedded in the gum, with a wall calendar and potted plant nearby"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ---------- Panel background ---------- */}
      <rect x="0" y="0" width="1300" height="1150" fill={c.panelBg} />

      {/* soft backdrop blob behind the tooth/implant */}
      <path
        d="M120 700
           C 120 430, 340 230, 650 230
           C 960 230, 1180 430, 1180 700
           L 1180 760 L 120 760 Z"
        fill={c.blob}
        opacity="0.7"
      />

      {/* ---------- Floor line ---------- */}
      <line x1="60" y1="965" x2="1240" y2="965" stroke={c.floorLine} strokeWidth="4" />

      {/* ================= CHARACTER ================= */}
      <g>
        {/* shadow under feet */}
        <ellipse cx="330" cy="972" rx="70" ry="10" fill={c.floorLine} opacity="0.12" />

        {/* legs */}
        <rect x="285" y="800" width="34" height="150" rx="14" fill={c.scrubDark} />
        <rect x="335" y="800" width="34" height="150" rx="14" fill={c.scrubDark} />

        {/* shoes */}
        <path d="M275 946 h50 a14 14 0 0 1 14 14 v6 h-78 a10 10 0 0 1 14-20 Z" fill={c.shoe} />
        <path d="M330 946 h50 a14 14 0 0 1 14 14 v6 h-78 a10 10 0 0 1 14-20 Z" fill={c.shoe} />

        {/* torso (scrub top) */}
        <path
          d="M270 650
             C 270 600, 300 570, 330 570
             C 360 570, 390 600, 390 650
             L 400 810
             C 400 830, 380 840, 330 840
             C 280 840, 260 830, 260 810 Z"
          fill={c.scrubLight}
        />
        {/* torso shading */}
        <path d="M330 570 C 360 570, 390 600, 390 650 L 400 810 C 400 826, 388 836, 355 839 L 340 650 Z" fill={c.scrubDark} opacity="0.35" />

        {/* far arm (down) */}
        <path d="M275 610 C 250 630, 240 680, 250 730 C 253 745, 270 748, 276 736 C 268 690, 275 645, 292 615 Z" fill={c.scrubLight} />

        {/* near arm (raised, holding mirror) */}
        <path
          d="M368 605
             C 400 600, 430 615, 455 645
             C 470 663, 478 683, 480 700
             L 460 712
             C 452 692, 438 672, 418 655
             C 400 640, 380 632, 362 630 Z"
          fill={c.scrubLight}
        />
        <path d="M368 605 C 400 600, 430 615, 455 645 L 440 655 C 420 630, 396 618, 372 616 Z" fill={c.scrubDark} opacity="0.3" />

        {/* hand */}
        <circle cx="470" cy="700" r="17" fill={c.skin} />

        {/* neck */}
        <rect x="310" y="545" width="30" height="30" rx="8" fill={c.skin} />

        {/* head */}
        <circle cx="330" cy="510" r="46" fill={c.skin} />

        {/*
          Hair, rebuilt as a band that shares the head's exact
          center (330, 510) and radius (46). The outer edge sits
          at radius 68 (a proper hair "thickness" beyond the
          scalp, not a thin sliver) and sweeps from the front
          hairline (195°) over the crown and down to the nape
          (70°, i.e. 430°). The inner edge retraces the SAME arc
          at radius 46, i.e. flush against the head circle, so
          there is never a gap between hair and scalp regardless
          of how the artwork is scaled.
        */}
        <path
          d="M264.3 492.4
             A 68 68 0 1 1 353.3 573.9
             L 345.7 553.2
             A 46 46 0 1 0 285.6 498.1
             Z"
          fill={c.hair}
        />

        {/*
          Bun: centered so it overlaps the head/hair band by a
          comfortable margin (distance from head center is 58,
          well under the 46 + 17 = 63 sum of radii needed to
          guarantee a solid overlap) instead of floating above it.
        */}
        <circle cx="340" cy="453" r="17" fill={c.hair} />

        {/* face hint (simple, non-identifying) */}
        <circle cx="316" cy="512" r="3.4" fill={c.hair} />
        <path d="M300 528 q 10 8 20 0" stroke={c.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* ================= MIRROR TOOL ================= */}
      <g>
        <rect
          x="470"
          y="690"
          width="230"
          height="18"
          rx="9"
          fill={c.mirrorHandle}
          transform="rotate(-32 470 690)"
        />
        <ellipse cx="705" cy="600" rx="34" ry="26" fill={c.mirrorHead} transform="rotate(-32 705 600)" />
        <ellipse cx="705" cy="600" rx="34" ry="26" fill="none" stroke={c.mirrorHandle} strokeWidth="6" transform="rotate(-32 705 600)" />
      </g>

      {/* ================= GIANT TOOTH ================= */}
      <g>
        {/* sparkles */}
        <g fill={c.sparkle}>
          <path d="M792 430 l8 22 22 8 -22 8 -8 22 -8 -22 -22 -8 22 -8 Z" />
          <path d="M960 380 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6 Z" />
          <path d="M900 340 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5 Z" />
        </g>

        <path
          d="M700 470
             C 700 410, 750 380, 830 380
             C 910 380, 960 410, 960 470
             C 960 540, 935 610, 900 660
             C 885 682, 865 690, 850 668
             C 840 652, 828 652, 818 668
             C 803 690, 783 682, 768 660
             C 733 610, 700 540, 700 470 Z"
          fill={c.toothWhite}
        />
        <path
          d="M830 380 C 910 380, 960 410, 960 470 C 960 540, 935 610, 900 660 C 890 675, 876 686, 862 678 C 878 630, 900 560, 900 480 C 900 430, 875 398, 830 384 Z"
          fill={c.toothShade}
          opacity="0.55"
        />
      </g>

      {/* ================= IMPLANT + GUM ================= */}
      <g>
        {/* gum mounds */}
        <path d="M655 730 h140 v235 c0 20 -18 30 -70 30 c-40 0 -70 -14 -70 -34 Z" fill={c.gumOuter} />
        <path d="M905 730 h140 v235 c0 20 -18 30 -70 30 c-40 0 -70 -14 -70 -34 Z" fill={c.gumOuter} />
        <ellipse cx="700" cy="742" rx="42" ry="14" fill={c.gumInner} opacity="0.7" />
        <ellipse cx="950" cy="742" rx="42" ry="14" fill={c.gumInner} opacity="0.7" />

        {/* implant channel between the mounds */}
        <path
          d="M795 730 h110 v210 a55 55 0 0 1 -110 0 Z"
          fill={c.panelBg}
        />

        {/* implant screw */}
        <g>
          <rect x="805" y="700" width="90" height="30" rx="6" fill={c.implantMetalDark} />
          <rect x="815" y="730" width="70" height="180" fill={c.implantMetal} />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="805" y={745 + i * 34} width="90" height="14" rx="6" fill={c.implantMetalDark} />
          ))}
          <path
            d="M815 890 v20 a35 35 0 0 0 70 0 v-20 Z"
            fill={c.implantMetal}
          />
        </g>
      </g>

      {/* ================= TOOTHBRUSH ================= */}
      <g>
        <rect x="750" y="1005" width="420" height="26" rx="13" fill={c.brushHandle} />
        <path
          d="M760 940 h140 c14 0 26 12 26 26 v10 c0 14 -12 26 -26 26 h-140 Z"
          fill={c.brushBristle}
        />
        <path
          d="M775 935 c20 -14 60 -18 90 -6 c22 8 40 4 55 -10 c-4 18 -22 28 -46 30 c-32 2 -70 -2 -99 -14 Z"
          fill={c.toothpaste}
        />
      </g>

      {/* ================= CALENDAR ================= */}
      <g transform="translate(985,470)">
        <rect x="0" y="18" width="220" height="200" rx="10" fill={c.calendarBody} />
        <rect x="0" y="18" width="220" height="34" rx="10" fill={c.calendarHeader} />
        <rect x="0" y="40" width="220" height="12" fill={c.calendarHeader} />
        {[...Array(7)].map((_, i) => (
          <rect key={i} x={16 + i * 28} y="0" width="8" height="34" rx="4" fill={c.calendarRing} />
        ))}
        {[...Array(4)].map((_, r) =>
          [...Array(6)].map((_, col) => {
            const idx = r * 6 + col;
            const marked = [3, 9, 14, 20].includes(idx);
            return (
              <rect
                key={`${r}-${col}`}
                x={16 + col * 34}
                y={70 + r * 34}
                width="22"
                height="22"
                rx="5"
                fill={marked ? (idx % 2 === 0 ? c.calendarDayA : c.calendarDayB) : c.calendarDayB}
                opacity={marked ? 1 : 0.35}
              />
            );
          })
        )}
      </g>

      {/* ================= POTTED PLANT ================= */}
      <g transform="translate(1080,760)">
        <path d="M20 60 h140 l-14 130 c-2 16 -16 28 -32 28 h-48 c-16 0 -30 -12 -32 -28 Z" fill={c.potBody} />
        <path d="M0 220 h180" stroke={c.potBody} strokeWidth="8" strokeLinecap="round" />
        <path d="M20 220 l-10 -35" stroke={c.potBody} strokeWidth="8" strokeLinecap="round" />
        <path d="M160 220 l10 -35" stroke={c.potBody} strokeWidth="8" strokeLinecap="round" />

        <path
          d="M90 60 C 40 10, 30 -70, 70 -140 C 100 -70, 100 -10, 90 60 Z"
          fill={c.leafDark}
        />
        <path
          d="M90 60 C 140 20, 160 -50, 130 -110 C 100 -60, 88 -10, 90 60 Z"
          fill={c.leafLight}
        />
      </g>
    </svg>
  );
};