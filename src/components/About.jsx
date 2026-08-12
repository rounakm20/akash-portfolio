import { useState } from "react";
import { ABOUT_BODY, STATS, SKILLS } from "../data/content";

/* video already lives in src/assets — drop the file there */
import ABOUT_VIDEO from "../assets/clients/about.mp4";

/* ---------- palette (matches Hero.jsx) ---------- */
const COTTON = "#EDEBDD";
const CHERRY = "#810100";
const WARM_IVORY = "#EFE0CD";
const MAROON = "#630000";
const NOIR = "#1B1717";

function AboutReel() {
  const [failed, setFailed] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!failed ? (
        <video
          src={ABOUT_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `radial-gradient(120% 100% at 15% 100%, ${MAROON} 0%, ${NOIR} 55%)`,
            color: COTTON,
            fontSize: "0.85rem",
            opacity: 0.6,
          }}
        >
          video unavailable
        </div>
      )}

      {/* small corner tag — warm ivory chip, doesn't sit over the footage */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 14,
          padding: "0.3rem 0.6rem",
          background: "rgba(239,224,205,0.9)",
          borderRadius: "4px",
          fontSize: "0.66rem",
          letterSpacing: "0.1em",
          color: CHERRY,
          fontWeight: 600,
        }}
      >
        CAM_A · TAKE 03
      </div>

      {/* caption-style accent — a genuine sample of the reel's own on-screen typography */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          padding: "0.5rem 0.85rem",
          borderRadius: "8px",
          background: "rgba(239,224,205,0.9)",
          transform: "rotate(-2deg)",
        }}
      >
        <span
          style={{
            fontFamily: "'Comic Sans MS', 'Segoe Print', cursive",
            fontSize: "0.95rem",
            color: CHERRY,
          }}
        >
          "Did you hear that?"
        </span>
      </div>
    </div>
  );
}

export default function About({ setRef }) {
  return (
    <section
      ref={setRef}
      data-section="about"
      style={{
        backgroundColor: NOIR,
        color: COTTON,
        padding: "clamp(3rem, 6vw, 5rem) 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.78rem",
            letterSpacing: "0.14em",
            color: CHERRY,
            fontWeight: 600,
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ width: 6, height: 6, backgroundColor: CHERRY, display: "inline-block" }} />
          00:00:14:12 — ABOUT
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "center",
          }}
        >
          {/* left: the reel, front and center, full brightness */}
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 5",
              borderRadius: "10px",
              overflow: "hidden",
              border: `1px solid ${CHERRY}`,
            }}
          >
            <AboutReel />
          </div>

          {/* right: copy, stats, skills */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                marginBottom: "1.25rem",
                color: COTTON,
              }}
            >
              Six years in the timeline, still chasing the perfect cut.
            </h2>

            {ABOUT_BODY.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  color: COTTON,
                  opacity: 0.7,
                  marginBottom: "1rem",
                }}
              >
                {p}
              </p>
            ))}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: "1.25rem",
                margin: "2rem 0",
                paddingTop: "1.5rem",
                borderTop: `1px solid ${CHERRY}`,
              }}
            >
              {STATS.map((s) => (
                <div key={s.k}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 900, color: CHERRY }}>{s.v}</div>
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: COTTON, opacity: 0.5, marginTop: "0.2rem" }}>
                    {s.k}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {SKILLS.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "999px",
                    background: WARM_IVORY,
                    fontSize: "0.78rem",
                    color: CHERRY,
                    fontWeight: 600,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}