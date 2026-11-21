/** Full-bleed mad toyshop workshop scene — wood benches, lamps, labeled drawers. */
export function HeroWorkshop() {
  return (
    <svg
      className="hero-scene"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="workshopWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f140c" />
          <stop offset="40%" stopColor="#3d2918" />
          <stop offset="100%" stopColor="#2a1a10" />
        </linearGradient>
        <linearGradient id="lampGlow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f0c96a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="benchTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5e3c" />
          <stop offset="100%" stopColor="#5c3d24" />
        </linearGradient>
        <pattern id="sawdust" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="2" r="0.6" fill="#d9c49a" opacity="0.35" />
          <circle cx="4" cy="5" r="0.5" fill="#c4a35a" opacity="0.25" />
        </pattern>
        <linearGradient id="readability" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a120a" stopOpacity="0" />
          <stop offset="100%" stopColor="#1a120a" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#workshopWall)" />

      {/* Back wall shelves */}
      <rect x="0" y="120" width="1440" height="18" fill="#6b4423" />
      <rect x="0" y="250" width="1440" height="14" fill="#5c3d24" />

      {/* Labeled drawers wall */}
      {[0, 1, 2, 3, 4, 5].map((col) =>
        [0, 1, 2].map((row) => {
          const x = 80 + col * 110;
          const y = 300 + row * 70;
          return (
            <g key={`${col}-${row}`}>
              <rect
                x={x}
                y={y}
                width="96"
                height="58"
                rx="3"
                fill="#3d2918"
                stroke="#c4a35a"
                strokeWidth="1.5"
              />
              <rect
                x={x + 18}
                y={y + 20}
                width="60"
                height="16"
                rx="1"
                fill="#e8d5a3"
                opacity="0.85"
              />
              <circle cx={x + 48} cy={y + 48} r="4" fill="#c4a35a" />
            </g>
          );
        }),
      )}

      {/* Hanging workshop lamps */}
      <g className="lamp-swing">
        <line x1="320" y1="0" x2="320" y2="90" stroke="#1a120a" strokeWidth="4" />
        <path d="M280 90 L360 90 L345 130 L295 130 Z" fill="#6b3e2a" />
        <ellipse cx="320" cy="130" rx="28" ry="8" fill="#f0c96a" opacity="0.9" />
        <ellipse cx="320" cy="220" rx="120" ry="90" fill="url(#lampGlow)" />
      </g>
      <g>
        <line x1="980" y1="0" x2="980" y2="70" stroke="#1a120a" strokeWidth="4" />
        <path d="M940 70 L1020 70 L1005 110 L955 110 Z" fill="#6b3e2a" />
        <ellipse cx="980" cy="110" rx="28" ry="8" fill="#f0c96a" opacity="0.85" />
        <ellipse cx="980" cy="200" rx="140" ry="100" fill="url(#lampGlow)" />
      </g>

      {/* Workbench */}
      <rect x="180" y="620" width="1080" height="36" fill="url(#benchTop)" />
      <rect x="180" y="656" width="1080" height="14" fill="#3d2918" />
      <rect x="220" y="670" width="40" height="160" fill="#2a1a10" />
      <rect x="1180" y="670" width="40" height="160" fill="#2a1a10" />
      <rect x="180" y="620" width="1080" height="36" fill="url(#sawdust)" />

      {/* Tools on bench */}
      <rect x="260" y="590" width="120" height="28" rx="4" fill="#c4a35a" opacity="0.8" />
      <rect x="420" y="575" width="16" height="45" fill="#1a120a" />
      <rect x="410" y="568" width="36" height="12" rx="2" fill="#6b3e2a" />
      <ellipse cx="560" cy="605" rx="50" ry="18" fill="#b5522a" />
      <rect x="700" y="585" width="90" height="32" rx="3" fill="#3e6b4f" />
      <circle cx="860" cy="600" r="22" fill="#c4a35a" />
      <rect x="920" y="580" width="70" height="40" rx="4" fill="#5c6b7a" />
      <path
        d="M1050 610 L1120 560 L1140 575 L1070 630 Z"
        fill="#8b5e3c"
        stroke="#c4a35a"
        strokeWidth="2"
      />

      {/* Gift crates — Santa stockroom energy */}
      <g transform="translate(1080 480)">
        <rect width="140" height="110" fill="#6b4423" stroke="#c4a35a" strokeWidth="2" />
        <rect y="45" width="140" height="12" fill="#b5522a" />
        <rect x="64" width="12" height="110" fill="#b5522a" />
        <rect x="20" y="18" width="70" height="14" fill="#e8d5a3" opacity="0.8" />
      </g>
      <g transform="translate(1200 530)">
        <rect width="100" height="80" fill="#5c3d24" stroke="#c4a35a" strokeWidth="2" />
        <rect y="34" width="100" height="10" fill="#c4a35a" />
      </g>

      {/* Soft vignette toward bottom for type readability */}
      <rect
        x="0"
        y="520"
        width="1440"
        height="380"
        fill="url(#workshopWall)"
        opacity="0.55"
      />
      <rect x="0" y="480" width="1440" height="420" fill="url(#readability)" />
    </svg>
  );
}
