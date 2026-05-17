export default function LogoMark({ compact = false, light = false }) {
  const textColor = light ? "#ffffff" : "#10221f";
  const mutedColor = light ? "rgba(255,255,255,0.72)" : "#56706a";

  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 120 120"
        className={compact ? "h-12 w-12 shrink-0" : "h-20 w-20 shrink-0"}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="voltedge-orange" x1="16" x2="103" y1="22" y2="98">
            <stop offset="0" stopColor="#ffb21f" />
            <stop offset="0.42" stopColor="#ff6a00" />
            <stop offset="1" stopColor="#ff4a00" />
          </linearGradient>
          <filter id="voltedge-shadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="4" dy="5" stdDeviation="2.2" floodColor="#10221f" floodOpacity="0.35" />
          </filter>
        </defs>

        <path
          d="M31 85a43 43 0 0 1 48-66"
          fill="none"
          stroke="url(#voltedge-orange)"
          strokeLinecap="butt"
          strokeWidth="15"
          filter="url(#voltedge-shadow)"
        />
        <path
          d="M90 36a43 43 0 0 1-31 64"
          fill="none"
          stroke="url(#voltedge-orange)"
          strokeLinecap="butt"
          strokeWidth="15"
          filter="url(#voltedge-shadow)"
        />
        <path
          d="M80 17 28 68h29l-18 38 54-55H65Z"
          fill="url(#voltedge-orange)"
          stroke="#17211f"
          strokeLinejoin="round"
          strokeWidth="5"
          filter="url(#voltedge-shadow)"
        />
        <path
          d="m75 35-17 31 22-15"
          fill="none"
          stroke="#ffb21f"
          strokeLinecap="square"
          strokeWidth="4"
          opacity="0.88"
        />
      </svg>

      {!compact && (
        <div className="leading-none">
          <div
            className="text-2xl font-black tracking-[0.05em]"
            style={{ color: textColor }}
          >
            VOLTEDGE
          </div>
          <div className="mt-1 flex items-center">
            <span className="h-0.5 w-6 bg-[#ff9d16]" />
            <span className="bg-[#ff9d16] px-2 py-1 text-sm font-black tracking-[0.06em] text-[#10221f]">
              SYSTEM
            </span>
            <span className="h-0.5 w-6 bg-[#ff9d16]" />
          </div>
          <div
            className="mt-2 text-[0.62rem] font-black uppercase tracking-[0.08em]"
            style={{ color: mutedColor }}
          >
            Where energy meets intelligence
          </div>
        </div>
      )}
    </div>
  );
}
