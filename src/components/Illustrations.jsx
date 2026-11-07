// Flat illustrations drawn in the UniSupply palette. Colours come from the
// --il-* tokens in styles.css, so they follow light and dark mode.

const Svg = ({ w = 320, h = 200, label, children }) => (
  <svg viewBox={`0 0 ${w} ${h}`} className="art" role="img" aria-label={label} preserveAspectRatio="xMidYMid meet">
    {children}
  </svg>
);

const Ground = ({ cx = 160, cy = 180, rx = 128 }) => <ellipse cx={cx} cy={cy} rx={rx} ry="10" className="il-shadow" />;

/* ─── Categories ──────────────────────────────────────────────────── */

export function Pantry() {
  return (
    <Svg label="Coffee jar, tea box and a steaming mug">
      <circle cx="160" cy="104" r="88" className="il-ground" />
      <Ground />
      {/* coffee jar */}
      <rect x="66" y="80" width="64" height="98" rx="14" className="il-sand" />
      <rect x="70" y="68" width="56" height="16" rx="5" className="il-amber" />
      <rect x="76" y="108" width="44" height="36" rx="5" className="il-white" />
      <rect x="84" y="118" width="28" height="5" rx="2.5" className="il-pri" />
      <rect x="88" y="128" width="20" height="5" rx="2.5" className="il-mint" />
      {/* tea box */}
      <rect x="140" y="100" width="60" height="78" rx="7" className="il-coral" />
      <rect x="148" y="116" width="44" height="34" rx="4" className="il-white" />
      <ellipse cx="170" cy="133" rx="11" ry="6.5" className="il-pri2" transform="rotate(-30 170 133)" />
      <rect x="148" y="158" width="44" height="5" rx="2.5" className="il-white" opacity=".6" />
      {/* mug */}
      <circle cx="252" cy="152" r="12" fill="none" className="il-stroke-pri" strokeWidth="7" />
      <rect x="206" y="130" width="46" height="48" rx="9" className="il-pri" />
      <rect x="214" y="142" width="30" height="5" rx="2.5" className="il-pri2" />
      <path d="M220 120c-6-8 6-12 0-21M236 120c-6-8 6-12 0-21" fill="none" className="il-stroke-mint" strokeWidth="4" strokeLinecap="round" />
    </Svg>
  );
}

export function Stationery() {
  return (
    <Svg label="Paper ream, sticky note and a cup of pens">
      <circle cx="160" cy="104" r="88" className="il-ground" />
      <Ground />
      {/* sticky note */}
      <g transform="rotate(-9 104 92)">
        <rect x="80" y="66" width="50" height="50" rx="4" className="il-amber" />
        <path d="M118 116l12-12v8a4 4 0 0 1-4 4z" className="il-sand" />
        <rect x="88" y="78" width="30" height="4" rx="2" className="il-sand" />
        <rect x="88" y="88" width="22" height="4" rx="2" className="il-sand" />
      </g>
      {/* paper ream */}
      <rect x="52" y="124" width="120" height="54" rx="5" className="il-white" />
      <rect x="52" y="140" width="120" height="18" className="il-blue" />
      <rect x="64" y="146" width="40" height="6" rx="3" className="il-white" />
      <path d="M58 130h108M58 170h108" className="il-stroke-sage" strokeWidth="2" />
      {/* pens */}
      <rect x="198" y="62" width="9" height="60" rx="3" className="il-amber" />
      <path d="M198 62l4.5-10 4.5 10z" className="il-ink" />
      <rect x="213" y="48" width="9" height="72" rx="3" className="il-coral" />
      <rect x="213" y="48" width="9" height="8" rx="2" className="il-ink" />
      <rect x="228" y="68" width="9" height="54" rx="3" className="il-blue" />
      <rect x="241" y="58" width="9" height="62" rx="3" className="il-pri2" />
      {/* cup */}
      <rect x="188" y="106" width="70" height="72" rx="10" className="il-pri" />
      <rect x="198" y="128" width="50" height="6" rx="3" className="il-pri2" />
    </Svg>
  );
}

export function Housekeeping() {
  return (
    <Svg label="Spray bottle, tissue box and a mop">
      <circle cx="160" cy="104" r="88" className="il-ground" />
      <Ground />
      {/* mop */}
      <rect x="246" y="34" width="7" height="132" rx="3.5" className="il-amber" />
      <rect x="226" y="160" width="48" height="18" rx="7" className="il-sand" />
      <path d="M232 178v-6M242 178v-6M252 178v-6M262 178v-6" className="il-stroke-amber" strokeWidth="3" strokeLinecap="round" />
      {/* spray bottle */}
      <rect x="92" y="74" width="26" height="22" rx="4" className="il-white" />
      <rect x="84" y="58" width="50" height="18" rx="5" className="il-pri" />
      <rect x="132" y="61" width="18" height="9" rx="3" className="il-pri" />
      <path d="M100 76l-12 22" className="il-stroke-pri" strokeWidth="6" strokeLinecap="round" />
      <rect x="76" y="94" width="58" height="84" rx="14" className="il-blue" />
      <rect x="86" y="116" width="38" height="34" rx="5" className="il-white" />
      <path d="M105 122c6 8 9 12 9 16a9 9 0 0 1-18 0c0-4 3-8 9-16z" className="il-pri2" />
      <circle cx="162" cy="64" r="5" fill="none" className="il-stroke-sage" strokeWidth="2.5" />
      <circle cx="176" cy="50" r="3.5" fill="none" className="il-stroke-sage" strokeWidth="2.5" />
      {/* tissue box */}
      <rect x="144" y="126" width="78" height="52" rx="7" className="il-mint" />
      <rect x="164" y="122" width="38" height="10" rx="5" className="il-pri2" />
      <path d="M170 126c2-20 24-22 26 0z" className="il-white" />
      <path d="M156 152h54" className="il-stroke-pri2" strokeWidth="4" strokeLinecap="round" />
    </Svg>
  );
}

export function Gifting() {
  return (
    <Svg label="Wrapped gift boxes and a greeting card">
      <circle cx="160" cy="104" r="88" className="il-ground" />
      <Ground />
      {/* card */}
      <g transform="rotate(-7 66 150)">
        <rect x="42" y="124" width="48" height="54" rx="5" className="il-white" />
        <path d="M66 162c-10-7-14-11-14-16a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 5-4 9-14 16z" className="il-coral" />
      </g>
      {/* big gift */}
      <rect x="96" y="100" width="104" height="78" rx="6" className="il-coral" />
      <rect x="88" y="86" width="120" height="24" rx="5" className="il-coral" />
      <rect x="88" y="104" width="120" height="6" className="il-ink" opacity=".12" />
      <rect x="140" y="86" width="16" height="92" className="il-amber" />
      <ellipse cx="132" cy="78" rx="17" ry="10" className="il-amber" transform="rotate(-24 132 78)" />
      <ellipse cx="164" cy="78" rx="17" ry="10" className="il-amber" transform="rotate(24 164 78)" />
      <circle cx="148" cy="84" r="7" className="il-sand" />
      {/* small gift */}
      <rect x="216" y="128" width="56" height="50" rx="5" className="il-pri" />
      <rect x="212" y="118" width="64" height="16" rx="4" className="il-pri2" />
      <rect x="240" y="118" width="9" height="60" className="il-sand" />
    </Svg>
  );
}

/* ─── Sectors ─────────────────────────────────────────────────────── */

const Windows = ({ x, y, cols, rows, w = 10, h = 12, gx = 8, gy = 10, cls = 'il-mint' }) =>
  Array.from({ length: cols * rows }, (_, i) => (
    <rect key={i} x={x + (i % cols) * (w + gx)} y={y + Math.floor(i / cols) * (h + gy)} width={w} height={h} rx="2" className={cls} />
  ));

export function Office() {
  return (
    <Svg label="Office towers in a tech park">
      <rect x="0" y="0" width="320" height="200" className="il-ground" />
      <circle cx="262" cy="46" r="18" className="il-sand" />
      <rect x="70" y="40" width="78" height="150" rx="4" className="il-pri" />
      <Windows x={82} y={54} cols={3} rows={5} />
      <rect x="156" y="78" width="88" height="112" rx="4" className="il-pri2" />
      <Windows x={168} y={92} cols={4} rows={4} w={9} gx={9} cls="il-white" />
      <rect x="98" y="166" width="22" height="24" rx="2" className="il-sand" />
      <circle cx="40" cy="150" r="22" className="il-mint" />
      <rect x="37" y="160" width="6" height="30" className="il-amber" />
      <circle cx="276" cy="160" r="16" className="il-mint" />
      <rect x="273" y="168" width="6" height="22" className="il-amber" />
      <rect x="0" y="188" width="320" height="12" className="il-sage" />
    </Svg>
  );
}

export function Coworking() {
  return (
    <Svg label="Shared desk with a laptop, plant and coffee">
      <rect x="0" y="0" width="320" height="200" className="il-ground" />
      <rect x="196" y="28" width="86" height="58" rx="5" className="il-white" />
      <path d="M208 70l18-18 14 12 14-20 18 26z" className="il-mint" />
      {/* lamp */}
      <path d="M72 138V82l26-20" fill="none" className="il-stroke-pri" strokeWidth="5" strokeLinecap="round" />
      <path d="M88 52h28l-6 18H94z" className="il-amber" />
      <rect x="60" y="134" width="26" height="8" rx="3" className="il-pri" />
      {/* laptop */}
      <rect x="118" y="88" width="88" height="54" rx="5" className="il-blue" />
      <rect x="126" y="96" width="72" height="38" rx="2" className="il-white" />
      <rect x="134" y="104" width="34" height="5" rx="2.5" className="il-pri2" />
      <rect x="134" y="114" width="52" height="5" rx="2.5" className="il-sage" />
      <rect x="106" y="140" width="112" height="6" rx="3" className="il-ink" opacity=".5" />
      {/* plant + mug */}
      <path d="M244 116c-14-18-4-34 6-36 2 14-2 26-6 36zM248 116c6-22 22-26 30-22-6 12-16 20-30 22z" className="il-pri2" />
      <rect x="234" y="114" width="28" height="30" rx="5" className="il-coral" />
      <rect x="40" y="122" width="20" height="22" rx="4" className="il-pri" />
      {/* desk */}
      <rect x="20" y="144" width="280" height="12" rx="4" className="il-sand" />
      <rect x="40" y="156" width="8" height="44" className="il-amber" />
      <rect x="272" y="156" width="8" height="44" className="il-amber" />
    </Svg>
  );
}

export function Cafe() {
  return (
    <Svg label="Café counter with a coffee machine and cups">
      <rect x="0" y="0" width="320" height="200" className="il-ground" />
      {/* awning */}
      {Array.from({ length: 8 }, (_, i) => (
        <path key={i} d={`M${i * 40} 0h40v34a20 20 0 0 1-40 0z`} className={i % 2 ? 'il-white' : 'il-pri'} />
      ))}
      {/* machine */}
      <rect x="66" y="74" width="92" height="82" rx="8" className="il-pri" />
      <rect x="76" y="84" width="72" height="18" rx="4" className="il-pri2" />
      <circle cx="90" cy="93" r="4" className="il-amber" />
      <rect x="98" y="102" width="28" height="18" rx="3" className="il-ink" opacity=".5" />
      <rect x="104" y="132" width="18" height="22" rx="4" className="il-white" />
      {/* cups */}
      <rect x="180" y="124" width="26" height="32" rx="5" className="il-white" />
      <rect x="180" y="132" width="26" height="8" className="il-amber" />
      <rect x="214" y="116" width="30" height="40" rx="6" className="il-coral" />
      <rect x="252" y="128" width="24" height="28" rx="5" className="il-sand" />
      <path d="M190 116c-5-7 5-10 0-17M228 106c-5-7 5-10 0-17" fill="none" className="il-stroke-sage" strokeWidth="3.5" strokeLinecap="round" />
      {/* counter */}
      <rect x="20" y="156" width="280" height="44" rx="4" className="il-sand" />
      <rect x="20" y="156" width="280" height="8" className="il-amber" />
    </Svg>
  );
}

export function Campus() {
  return (
    <Svg label="School building with a flag and graduation cap">
      <rect x="0" y="0" width="320" height="200" className="il-ground" />
      <rect x="188" y="14" width="3" height="44" className="il-ink" opacity=".5" />
      <path d="M191 16h26l-6 8 6 8h-26z" className="il-coral" />
      <path d="M80 82l110-30 110 30z" className="il-pri" transform="translate(-30 0)" />
      <rect x="60" y="80" width="200" height="104" rx="3" className="il-white" />
      <rect x="60" y="80" width="200" height="12" className="il-pri2" />
      {[78, 112, 186, 220].map((x) => (
        <rect key={x} x={x} y="100" width="20" height="84" rx="3" className="il-mint" />
      ))}
      <rect x="144" y="124" width="32" height="60" rx="16" className="il-pri" />
      {/* cap */}
      <path d="M232 132l40-16 40 16-40 16z" className="il-ink" transform="translate(-22 0)" />
      <path d="M262 142v14c10 6 26 6 36 0v-14" className="il-ink" transform="translate(-22 0)" opacity=".8" />
      <rect x="0" y="184" width="320" height="16" className="il-sage" />
      <circle cx="30" cy="160" r="18" className="il-mint" />
      <rect x="27" y="168" width="6" height="18" className="il-amber" />
    </Svg>
  );
}

/* ─── Hero: a stocked supply shelf ────────────────────────────────── */

export function HeroShelf() {
  return (
    <Svg w={520} h={440} label="A stocked office supply shelf with pantry, stationery, cleaning and gift items">
      <rect x="0" y="0" width="520" height="440" rx="32" className="il-ground" />
      <circle cx="420" cy="86" r="54" className="il-mint" opacity=".7" />
      {/* shelf frame */}
      <rect x="60" y="60" width="12" height="350" rx="4" className="il-pri" />
      <rect x="448" y="60" width="12" height="350" rx="4" className="il-pri" />
      {[160, 270, 380].map((y) => (
        <rect key={y} x="54" y={y} width="412" height="14" rx="5" className="il-pri" />
      ))}

      {/* top shelf — pantry */}
      <rect x="92" y="84" width="58" height="76" rx="12" className="il-sand" />
      <rect x="96" y="72" width="50" height="14" rx="5" className="il-amber" />
      <rect x="102" y="106" width="38" height="28" rx="4" className="il-white" />
      <rect x="109" y="115" width="24" height="4" rx="2" className="il-pri" />
      <rect x="164" y="98" width="56" height="62" rx="6" className="il-coral" />
      <rect x="171" y="112" width="42" height="26" rx="3" className="il-white" />
      <ellipse cx="192" cy="125" rx="9" ry="5.5" className="il-pri2" transform="rotate(-30 192 125)" />
      <rect x="234" y="76" width="30" height="84" rx="10" className="il-blue" opacity=".85" />
      <rect x="240" y="66" width="18" height="12" rx="3" className="il-pri" />
      <rect x="276" y="76" width="30" height="84" rx="10" className="il-blue" opacity=".85" />
      <rect x="282" y="66" width="18" height="12" rx="3" className="il-pri" />
      <circle cx="372" cy="146" r="10" fill="none" className="il-stroke-pri" strokeWidth="6" />
      <rect x="322" y="116" width="48" height="44" rx="9" className="il-pri2" />
      <path d="M338 106c-5-7 5-10 0-17M354 106c-5-7 5-10 0-17" fill="none" className="il-stroke-sage" strokeWidth="3.5" strokeLinecap="round" />
      <rect x="394" y="118" width="44" height="42" rx="5" className="il-amber" />
      <rect x="394" y="130" width="44" height="6" className="il-sand" />

      {/* middle shelf — stationery */}
      <rect x="88" y="222" width="118" height="48" rx="4" className="il-white" />
      <rect x="88" y="236" width="118" height="16" className="il-blue" />
      <rect x="92" y="196" width="110" height="28" rx="4" className="il-white" />
      <rect x="92" y="204" width="110" height="10" className="il-pri2" />
      <rect x="230" y="200" width="22" height="70" rx="3" className="il-coral" />
      <rect x="254" y="190" width="22" height="80" rx="3" className="il-pri" />
      <rect x="278" y="206" width="22" height="64" rx="3" className="il-amber" />
      <rect x="302" y="196" width="22" height="74" rx="3" className="il-blue" />
      <rect x="348" y="222" width="52" height="48" rx="8" className="il-pri" />
      <rect x="356" y="190" width="7" height="40" rx="3" className="il-amber" />
      <rect x="368" y="182" width="7" height="48" rx="3" className="il-coral" />
      <rect x="380" y="194" width="7" height="36" rx="3" className="il-white" />
      <g transform="rotate(-8 424 240)"><rect x="408" y="222" width="34" height="34" rx="3" className="il-amber" /></g>

      {/* bottom shelf — housekeeping + gifting */}
      <rect x="94" y="322" width="44" height="58" rx="10" className="il-blue" />
      <rect x="100" y="300" width="34" height="14" rx="4" className="il-pri" />
      <rect x="106" y="312" width="16" height="12" className="il-white" />
      <rect x="150" y="334" width="70" height="46" rx="6" className="il-mint" />
      <path d="M170 334c2-18 22-20 26 0z" className="il-white" />
      <rect x="232" y="318" width="40" height="62" rx="10" className="il-pri2" />
      <rect x="240" y="306" width="24" height="14" rx="4" className="il-sand" />
      <rect x="292" y="320" width="84" height="60" rx="5" className="il-coral" />
      <rect x="286" y="308" width="96" height="18" rx="4" className="il-coral" />
      <rect x="326" y="308" width="14" height="72" className="il-amber" />
      <ellipse cx="320" cy="302" rx="13" ry="8" className="il-amber" transform="rotate(-24 320 302)" />
      <ellipse cx="346" cy="302" rx="13" ry="8" className="il-amber" transform="rotate(24 346 302)" />
      <rect x="388" y="336" width="48" height="44" rx="5" className="il-pri" />
      <rect x="408" y="336" width="8" height="44" className="il-sand" />
    </Svg>
  );
}

/* ─── CTA: delivery van ───────────────────────────────────────────── */

export function Van() {
  return (
    <Svg w={300} h={170} label="UniSupply delivery van">
      <ellipse cx="150" cy="156" rx="132" ry="9" fill="#000" opacity=".15" />
      <path d="M20 46a10 10 0 0 1 10-10h150v108H20z" className="il-white" />
      <path d="M180 60h56a14 14 0 0 1 12 7l26 40a14 14 0 0 1 2 8v29H180z" className="il-white" />
      <path d="M194 72h40l20 32h-60z" className="il-blue" opacity=".7" />
      <rect x="20" y="96" width="256" height="12" className="il-pri2" />
      <rect x="40" y="58" width="24" height="24" rx="7" className="il-pri" />
      <text x="52" y="76" textAnchor="middle" className="il-text">U</text>
      <rect x="72" y="62" width="78" height="7" rx="3.5" className="il-pri" />
      <rect x="72" y="74" width="54" height="5" rx="2.5" className="il-sage" />
      <rect x="262" y="118" width="16" height="10" rx="3" className="il-amber" />
      {[70, 226].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="144" r="18" className="il-ink" />
          <circle cx={cx} cy="144" r="8" className="il-sage" />
        </g>
      ))}
    </Svg>
  );
}

export const ART = {
  Pantry, Stationery, Housekeeping, Gifting,
  Office, Coworking, Cafe, Campus,
  HeroShelf, Van,
};
