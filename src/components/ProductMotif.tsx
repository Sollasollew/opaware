import type { Product } from '../data/catalog';

/** Workshop-bench product illustration — wood/brass/leather energy, not pastel retail. */
export function ProductMotif({
  motif,
  hue,
  title,
}: {
  motif: Product['motif'];
  hue: string;
  title: string;
}) {
  const uid = `${motif}-${hue.replace('#', '')}`;
  return (
    <svg
      className="product-motif"
      viewBox="0 0 240 180"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={`bench-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D2918" />
          <stop offset="55%" stopColor="#5C3D24" />
          <stop offset="100%" stopColor="#2A1A10" />
        </linearGradient>
        <linearGradient id={`lamp-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0C96A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F0C96A" stopOpacity="0" />
        </linearGradient>
        <pattern
          id={`grain-${uid}`}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 8 L8 0"
            stroke="#1A120A"
            strokeWidth="0.4"
            opacity="0.25"
          />
        </pattern>
      </defs>
      <rect width="240" height="180" fill={`url(#bench-${uid})`} />
      <rect width="240" height="180" fill={`url(#grain-${uid})`} />
      <ellipse cx="120" cy="40" rx="90" ry="50" fill={`url(#lamp-${uid})`} />
      <rect x="0" y="150" width="240" height="30" fill="#1F140C" opacity="0.55" />
      {/* brass label plate */}
      <rect x="12" y="12" width="54" height="16" rx="2" fill="#C4A35A" />
      <rect x="14" y="14" width="50" height="12" rx="1" fill="#E8D5A3" opacity="0.35" />
      {renderMotif(motif, hue)}
    </svg>
  );
}

function renderMotif(motif: Product['motif'], hue: string) {
  const brass = '#C4A35A';
  const leather = '#6B3E2A';
  const wood = '#8B5E3C';
  switch (motif) {
    case 'drum':
      return (
        <g transform="translate(55 38)">
          <ellipse cx="65" cy="100" rx="58" ry="12" fill="#0D0906" opacity="0.35" />
          <rect x="20" y="38" width="90" height="55" rx="6" fill={hue} />
          <ellipse cx="65" cy="38" rx="45" ry="14" fill="#E8D5A3" />
          <ellipse cx="65" cy="93" rx="45" ry="11" fill={leather} />
          <line x1="8" y1="22" x2="38" y2="52" stroke={brass} strokeWidth="5" />
          <circle cx="8" cy="20" r="7" fill={brass} />
        </g>
      );
    case 'whistle':
      return (
        <g transform="translate(38 55)">
          <rect x="24" y="36" width="120" height="26" rx="10" fill={hue} />
          <circle cx="34" cy="49" r="20" fill={brass} />
          <circle cx="34" cy="49" r="7" fill="#1A120A" />
          <rect x="124" y="40" width="36" height="16" rx="3" fill={leather} />
        </g>
      );
    case 'slime':
      return (
        <g transform="translate(50 35)">
          <rect x="15" y="95" width="120" height="18" rx="2" fill={wood} />
          <path
            d="M30 30 C10 55 20 110 70 118 C130 128 150 70 120 40 C100 20 55 10 30 30Z"
            fill={hue}
            opacity="0.92"
          />
          <circle cx="70" cy="70" r="7" fill="#F0C96A" opacity="0.5" />
        </g>
      );
    case 'rocket':
      return (
        <g transform="translate(70 18)">
          <path d="M50 10 L78 108 L50 94 L22 108 Z" fill={hue} />
          <circle cx="50" cy="52" r="11" fill={brass} />
          <path d="M22 108 L36 138 L50 112" fill="#B5522A" />
          <path d="M78 108 L64 138 L50 112" fill={leather} />
        </g>
      );
    case 'paint':
      return (
        <g transform="translate(42 28)">
          <rect x="78" y="22" width="48" height="88" rx="6" fill={hue} />
          <rect x="86" y="12" width="32" height="16" rx="3" fill="#1A120A" />
          <rect x="86" y="12" width="32" height="5" fill={brass} />
          <circle cx="40" cy="112" r="26" fill={brass} opacity="0.85" />
          <circle cx="26" cy="96" r="13" fill="#B5522A" />
          <circle cx="54" cy="92" r="11" fill="#3E6B4F" />
        </g>
      );
    case 'kite':
      return (
        <g transform="translate(38 12)">
          <path d="M80 10 L138 78 L80 148 L22 78 Z" fill={hue} />
          <path d="M80 10 L80 148" stroke={brass} strokeWidth="3" />
          <path d="M22 78 L138 78" stroke={brass} strokeWidth="3" />
          <path
            d="M80 148 Q98 168 90 188 Q72 208 86 228"
            fill="none"
            stroke={leather}
            strokeWidth="3"
          />
        </g>
      );
    case 'book':
      return (
        <g transform="translate(48 32)">
          <rect x="18" y="22" width="56" height="92" rx="3" fill="#3E4A56" />
          <rect x="74" y="22" width="56" height="92" rx="3" fill={hue} />
          <rect x="28" y="42" width="34" height="5" fill={brass} opacity="0.7" />
          <rect x="28" y="56" width="26" height="5" fill={brass} opacity="0.4" />
          <circle cx="120" cy="28" r="14" fill="#F0C96A" opacity="0.85" />
        </g>
      );
    case 'beaker':
      return (
        <g transform="translate(68 22)">
          <path
            d="M36 12 L36 42 L16 128 L84 128 L64 42 L64 12 Z"
            fill="#E8D5A3"
            stroke={brass}
            strokeWidth="5"
          />
          <path d="M22 98 L78 98 L76 122 L24 122 Z" fill={hue} opacity="0.9" />
          <rect x="28" y="8" width="44" height="8" rx="1" fill="#1A120A" />
        </g>
      );
    case 'magnet':
      return (
        <g transform="translate(55 38)">
          <path
            d="M40 18 H72 A42 42 0 0 1 72 102 H40 V80 H72 A20 20 0 0 0 72 40 H40 Z"
            fill={hue}
          />
          <rect x="40" y="18" width="32" height="18" fill="#B5522A" />
          <rect x="40" y="84" width="32" height="18" fill="#1A120A" />
        </g>
      );
    case 'tent':
      return (
        <g transform="translate(42 32)">
          <path d="M78 12 L145 122 H10 Z" fill={hue} />
          <path d="M78 12 L78 122" stroke={brass} strokeWidth="3" />
          <path d="M55 122 L78 68 L101 122" fill="#E8D5A3" opacity="0.3" />
          <rect x="18" y="128" width="120" height="8" fill={wood} />
        </g>
      );
    case 'puzzle':
      return (
        <g transform="translate(42 32)">
          <rect x="18" y="18" width="56" height="56" rx="4" fill={hue} />
          <rect x="78" y="18" width="56" height="56" rx="4" fill={brass} />
          <rect x="18" y="78" width="56" height="56" rx="4" fill={wood} />
          <rect x="78" y="78" width="56" height="56" rx="4" fill={leather} />
          <circle cx="76" cy="76" r="10" fill="#E8D5A3" />
        </g>
      );
    case 'mixer':
      return (
        <g transform="translate(58 22)">
          <rect x="48" y="8" width="36" height="48" rx="6" fill="#1A120A" />
          <rect x="52" y="12" width="28" height="8" fill={brass} />
          <circle cx="66" cy="98" r="44" fill={hue} />
          <circle cx="66" cy="98" r="26" fill="#E8D5A3" />
          <path
            d="M50 88 Q66 112 82 88"
            fill="none"
            stroke={leather}
            strokeWidth="5"
          />
        </g>
      );
    default:
      return null;
  }
}
