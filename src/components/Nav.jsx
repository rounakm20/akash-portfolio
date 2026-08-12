import { SECTIONS } from "../data/content";

export default function Nav({ active, progressPct, runningTC, onNavigate, setRef }) {
  return (
    <div className="avp-nav">
      <div className="avp-nav-inner">
        <a className="avp-logo" onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
          AKASH<span>.</span>VERMA
        </a>
        <div className="avp-track-wrap">
          <div className="avp-track">
            <div className="avp-track-line" />
            <div className="avp-track-fill" style={{ width: `${progressPct}%` }} />
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                className={`avp-seg ${active === s.id ? "on" : ""}`}
                onClick={() => onNavigate(s.id)}
                aria-label={s.label}
              >
                <span className="avp-seg-dot" />
                <span className="avp-seg-label">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
        <span className="avp-nav-tc">{runningTC}</span>
      </div>
    </div>
  );
}
