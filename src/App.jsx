import { useState, useEffect, useRef, useCallback } from "react";
import { SECTIONS } from "./data/content";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";

import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("home");
  const [tick, setTick] = useState(0);
  const refs = useRef({});

  // simulated running timecode in hero / nav
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000 / 12);
    return () => clearInterval(id);
  }, []);

  const scrollTo = useCallback((id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.dataset.section);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const activeIdx = SECTIONS.findIndex((s) => s.id === active);
  const progressPct = ((activeIdx + 1) / SECTIONS.length) * 100;

  const frameOf = (t) => String(t % 12).padStart(2, "0");
  const secOf = (t) => String(Math.floor(t / 12) % 60).padStart(2, "0");
  const minOf = (t) => String(Math.floor(t / 720) % 60).padStart(2, "0");
  const runningTC = `00:${minOf(tick)}:${secOf(tick)}:${frameOf(tick)}`;

  return (
    <div className="avp-page">
      <div className="avp-grain" />
      <div className="avp-root">
        <Nav
          active={active}
          progressPct={progressPct}
          runningTC={runningTC}
          onNavigate={scrollTo}
        />

        <Hero
          setRef={(el) => (refs.current.home = el)}
          onWatchReel={() => scrollTo("works")}
          runningTC={runningTC}
        />

        <div className="perf" />

        <About setRef={(el) => (refs.current.about = el)} />

        <div className="perf" />

        <Works setRef={(el) => (refs.current.works = el)} />

        <div className="perf" />

        <Footer setRef={(el) => (refs.current.contact = el)} onNavigate={scrollTo} />
      </div>
    </div>
  );
}
