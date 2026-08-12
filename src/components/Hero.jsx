import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { PlayTri } from "./icons";

/* image already lives in src/assets/clients — this is the only line you need */
import HERO_IMAGE_URL from "../assets/clients/akash.png";

/* ---------- palette ---------- */
const COTTON = "#EDEBDD";
const CHERRY = "#810100";
const MAROON = "#630000";
const NOIR = "#1B1717";

/* ---------- PixelTransition (merged in from React Bits) ---------- */

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = MAROON,
  animationStepDuration = 0.3,
  once = false,
}) {
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const grid = pixelGridRef.current;
    if (!grid) return;
    grid.innerHTML = "";
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.style.position = "absolute";
        pixel.style.display = "none";
        pixel.style.backgroundColor = pixelColor;
        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        grid.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate) => {
    setIsActive(activate);
    const grid = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!grid || !activeEl) return;
    const pixels = grid.children;
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) delayedCallRef.current.kill();
    gsap.set(pixels, { display: "none" });

    const stagger = animationStepDuration / pixels.length;
    gsap.to(pixels, { display: "block", duration: 0, stagger: { each: stagger, from: "random" } });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? "block" : "none";
      activeEl.style.pointerEvents = activate ? "none" : "";
    });

    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: { each: stagger, from: "random" },
    });
  };

  const isTouch = () =>
    "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;

  const handleEnter = () => !isActive && animatePixels(true);
  const handleLeave = () => isActive && !once && animatePixels(false);
  const handleClick = () => (isActive ? !once && animatePixels(false) : animatePixels(true));

  return (
    <div
      style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}
      onMouseEnter={!isTouch() ? handleEnter : undefined}
      onMouseLeave={!isTouch() ? handleLeave : undefined}
      onClick={isTouch() ? handleClick : undefined}
      onFocus={!isTouch() ? handleEnter : undefined}
      onBlur={!isTouch() ? handleLeave : undefined}
      tabIndex={0}
    >
      <div
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        aria-hidden={isActive}
      >
        {firstContent}
      </div>
      <div
        ref={activeRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, display: "none" }}
        aria-hidden={!isActive}
      >
        {secondContent}
      </div>
      <div
        ref={pixelGridRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 3 }}
      />
    </div>
  );
}

/* ---------- Hero photo: composed, not just a mark floating in black ---------- */

function HeroPhoto() {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(HERO_IMAGE_URL) && !errored;

  const photo = showImage ? (
    <img
      src={HERO_IMAGE_URL}
      alt="Akash Verma"
      onError={() => setErrored(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: `radial-gradient(120% 100% at 15% 100%, ${MAROON} 0%, ${NOIR} 55%)`,
      }}
    >
      {/* corner frame marks — replaces a flat empty box with a viewfinder feel */}
      {[
        { top: 18, left: 18, borderTop: `1px solid ${CHERRY}`, borderLeft: `1px solid ${CHERRY}` },
        { top: 18, right: 18, borderTop: `1px solid ${CHERRY}`, borderRight: `1px solid ${CHERRY}` },
      ].map((pos, i) => (
        <span key={i} style={{ position: "absolute", width: 22, height: 22, ...pos }} />
      ))}

      <span
        style={{
          position: "absolute",
          top: 18,
          left: 34,
          fontSize: "0.68rem",
          letterSpacing: "0.1em",
          color: COTTON,
          opacity: 0.55,
        }}
      >
        CAM_B · TAKE 01
      </span>

      <span
        style={{
          position: "absolute",
          bottom: 28,
          left: 28,
          fontSize: "5rem",
          lineHeight: 1,
          fontWeight: 900,
          color: COTTON,
          letterSpacing: "-0.02em",
        }}
      >
        AV
      </span>
    </div>
  );

  const reveal = (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "0.3rem",
        padding: "1.75rem",
        background: `linear-gradient(155deg, ${MAROON} 0%, ${NOIR} 100%)`,
      }}
    >
      <span style={{ fontSize: "0.68rem", letterSpacing: "0.1em", color: COTTON, opacity: 0.6 }}>
        CAM_B · TAKE 01
      </span>
      <span style={{ fontWeight: 900, fontSize: "clamp(1.2rem, 2vw, 1.7rem)", color: COTTON }}>
        AKASH VERMA
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", fontWeight: 600, color: COTTON, opacity: 0.85 }}>
        <span style={{ width: 6, height: 6, backgroundColor: CHERRY, display: "inline-block" }} />
        EDITOR &amp; COLORIST
      </span>
    </div>
  );

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <PixelTransition firstContent={photo} secondContent={reveal} gridSize={10} pixelColor={MAROON} animationStepDuration={0.35} />
    </div>
  );
}

/* ---------- Hero section ---------- */

export default function Hero({ setRef, onWatchReel, runningTC }) {
  return (
    <section
      ref={setRef}
      data-section="home"
      className="avp-hero-section"
      style={{
        height: "100dvh",
        maxHeight: "100dvh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: NOIR,
        color: COTTON,
      }}
    >
      {/*
        Mobile-only overrides. Desktop rules are untouched (no @media wrapper
        applies below 768px only), so on screens > 768px this block does
        nothing and PC layout stays exactly as before.

        On mobile: the section stops being a hard 100dvh box (that height,
        combined with a big heading + full-height photo, was what caused
        content to get clipped/overlap), the grid stacks text-then-photo,
        the photo gets a sane fixed height instead of min(70dvh,560px), and
        the heading/body/button sizes come down a notch.
      */}
      <style>{`
        @media (max-width: 768px) {
          .avp-hero-section {
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
            padding: 6.5rem 0 3rem !important;
          }
          .avp-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
          .avp-hero-photo-wrap {
            order: -1;
            width: 100% !important;
            height: 62vw !important;
            max-height: 320px !important;
            min-height: 220px !important;
          }
          .avp-hero-heading {
            font-size: clamp(2.1rem, 11vw, 2.8rem) !important;
          }
          .avp-hero-body {
            font-size: 0.92rem !important;
          }
          .avp-hero-cta-row {
            gap: 1rem !important;
          }
          .avp-hero-cta-btn {
            padding: 0.6rem 1.15rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>

      <div
        className="avp-hero-grid"
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem)",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
          maxHeight: "100%",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.78rem",
              letterSpacing: "0.14em",
              color: CHERRY,
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: 6, height: 6, backgroundColor: CHERRY, display: "inline-block" }} />
            VIDEO EDITOR &amp; COLORIST — BASED IN INDIA
          </div>

          <h1
            className="avp-hero-heading"
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 4.4rem)",
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "block", color: COTTON }}>CUTTING</span>
            <span
              style={{
                display: "block",
                color: "transparent",
                WebkitTextStroke: `1.5px ${COTTON}`,
              }}
            >
              STORIES
            </span>
            <span style={{ display: "block", color: COTTON }}>
              INTO SHAPE<span style={{ color: CHERRY }}>.</span>
            </span>
          </h1>

          <p
            className="avp-hero-body"
            style={{
              marginTop: "1.5rem",
              maxWidth: "34rem",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: COTTON,
              opacity: 0.65,
            }}
          >
            I'm Akash Verma — I edit and grade footage into content people actually stop
            scrolling for. Shorts, reels, brand campaigns and full-length YouTube videos, cut
            for rhythm and built for the screen they'll be watched on.
          </p>

          <div
            className="avp-hero-cta-row"
            style={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <button
              className="avp-hero-cta-btn"
              onClick={onWatchReel}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.7rem 1.4rem",
                borderRadius: "999px",
                border: `1px solid ${MAROON}`,
                background: "transparent",
                color: COTTON,
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  backgroundColor: CHERRY,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlayTri size={12} />
              </span>
              Watch the showreel
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                color: COTTON,
                opacity: 0.55,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: CHERRY,
                  display: "inline-block",
                }}
              />
              REC {runningTC}
            </div>
          </div>
        </div>

        <div className="avp-hero-photo-wrap" style={{ width: "100%", height: "min(70dvh, 560px)" }}>
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
}