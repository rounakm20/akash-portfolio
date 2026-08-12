import { CHERRY_L, EMAIL, SOCIALS } from "../data/content";
import { IG, LI, YT, VM } from "./icons";

export default function Footer({ setRef, onNavigate }) {
  return (
    <footer className="avp-footer" ref={setRef} data-section="contact">
      <div className="avp-inner">
        <div className="avp-eyebrow" style={{ marginBottom: 26 }}>
          00:02:41:20 — CONTACT
        </div>
        <div className="avp-f-row1">
          <div className="avp-f-headline">
            <span className="avp-fill">LET'S</span>
            <span className="avp-outline">CUT</span>
            <span className="avp-fill">
              SOMETHING<span style={{ color: CHERRY_L }}>.</span>
            </span>
          </div>
          <div className="avp-social-col">
            <span className="avp-f-social-label">Follow the reel</span>
            <div className="avp-social-row">
              <a className="avp-sbtn" href={SOCIALS.instagram} aria-label="Instagram">
                <IG />
              </a>
              <a className="avp-sbtn" href={SOCIALS.linkedin} aria-label="LinkedIn">
                <LI />
              </a>
              <a className="avp-sbtn" href={SOCIALS.youtube} aria-label="YouTube">
                <YT />
              </a>
             
            </div>
          </div>
        </div>

        <div className="avp-f-row2">
          <a className="avp-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <nav className="avp-fnav">
            <a onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
              Home
            </a>
            <a onClick={() => onNavigate("about")} style={{ cursor: "pointer" }}>
              About
            </a>
            <a onClick={() => onNavigate("works")} style={{ cursor: "pointer" }}>
              Works
            </a>
          </nav>
        </div>

        <div className="avp-credit">
          <p>
            Cut with <span style={{ color: CHERRY_L, fontSize: 12 }}>♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
