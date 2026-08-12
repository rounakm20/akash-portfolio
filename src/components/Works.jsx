import { useState } from "react";
import { CLIENTS, WORK_STATS, NICHES, EDITS } from "../data/content";
import { YT, PlayTri } from "./icons";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ClientAvatar({ photo, name }) {
  const [errored, setErrored] = useState(false);
  if (photo && !errored) {
    return (
      <img
        className="avp-avatar-img"
        src={photo}
        alt={name}
        onError={() => setErrored(true)}
      />
    );
  }
  return <div className="avp-avatar-fallback">{initials(name)}</div>;
}

function ClientCard({ client }) {
  return (
    <div className="avp-card avp-client-card">
      <div className="avp-card-top">
        <span>TAPE_{client.tape}</span>
        <span>YOUTUBE</span>
      </div>

      <div className="avp-client-row">
        <ClientAvatar photo={client.photo} name={client.name} />
        <div>
          <div className="avp-card-title avp-client-title">{client.name}</div>
          <span className="avp-card-cat">{client.handle}</span>
        </div>
      </div>

      <div className="avp-card-meta" style={{ marginTop: 18 }}>
        <a
          className="avp-client-link"
          href={client.url}
          target="_blank"
          rel="noreferrer"
        >
          <span className="avp-card-play"><YT /></span>
          View channel
        </a>

        {client.video && (
          <a
            className="avp-client-link"
            href={client.video}
            target="_blank"
            rel="noreferrer"
          >
            <span className="avp-card-play"><PlayTri size={13} /></span>
            Watch sample
          </a>
        )}
      </div>
      <span className="avp-card-bar" />
    </div>
  );
}

/* ============================= EDITS MARQUEE ============================= */

function EditCard({ edit, onOpen }) {
  const [errored, setErrored] = useState(false);
  const hasVideo = Boolean(edit.url) && !errored;

  return (
    <div
      onClick={() => onOpen(edit)}
      className="group relative flex-none w-[160px] sm:w-[180px] aspect-[9/16] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer"
    >
      {hasVideo ? (
        <video
          src={edit.url}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          onError={() => setErrored(true)}
          className="w-full h-full object-cover pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-center px-3 text-white/35 text-[11px] tracking-wide">
          {edit.title || "NO PREVIEW"}
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/85 via-black/10 to-transparent">
        <div className="text-white text-[13px] font-semibold leading-snug">
          {edit.title}
        </div>
        {edit.client && (
          <div className="text-white/60 text-[10px] tracking-wide uppercase mt-1">
            {edit.client}
          </div>
        )}
      </div>

      <span className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/55 flex items-center justify-center opacity-0 -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
        <PlayTri size={13} />
      </span>
    </div>
  );
}

function EditsMarquee({ edits, onOpen }) {
  // duplicate the list so the scroll loop is seamless
  const doubled = [...edits, ...edits];
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
      }}
    >
      <div className="avp-marquee-track flex gap-4 w-max">
        {doubled.map((edit, i) => (
          <EditCard edit={edit} onOpen={onOpen} key={`${edit.id}-${i}`} />
        ))}
      </div>
    </div>
  );
}

function EditModal({ edit, onClose }) {
  if (!edit) return null;
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[420px] max-h-[88vh] bg-black rounded-xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white text-lg flex items-center justify-center cursor-pointer"
        >
          ×
        </button>
        <video
          src={edit.url}
          controls
          autoPlay
          playsInline
          className="w-full max-h-[74vh] block bg-black"
        />
        <div className="p-4">
          <div className="text-white text-[15px] font-semibold">{edit.title}</div>
          {edit.client && (
            <div className="text-white/55 text-xs tracking-wide uppercase mt-1">
              {edit.client}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================= MAIN SECTION ============================= */

export default function Works({ setRef }) {
  const safeEdits = Array.isArray(EDITS) ? EDITS : [];
  const [openEdit, setOpenEdit] = useState(null);

  return (
    <section className="avp-section" ref={setRef} data-section="works">
      <div className="avp-inner">
        <div className="avp-eyebrow">00:01:02:08 — MY WORKS</div>
        <h2 className="avp-about-title" style={{ marginBottom: 40 }}>
          My recent clients.
        </h2>

        <div className="avp-works-grid">
          {CLIENTS.map((c) => (
            <ClientCard client={c} key={c.tape} />
          ))}
        </div>

        <div className="avp-stat-grid avp-stat-grid-4" style={{ marginTop: 50 }}>
          {WORK_STATS.map((s) => (
            <div className="avp-stat" key={s.k}>
              <div className="avp-stat-k">{s.k}</div>
              <div className="avp-stat-v">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="avp-skill-row" style={{ marginTop: 26 }}>
          <span className="avp-f-social-label" style={{ width: "100%", marginBottom: 6 }}>
            Niches I edit for
          </span>
          {NICHES.map((n) => (
            <span className="avp-skill-chip" key={n}>
              {n}
            </span>
          ))}
        </div>
      </div>

      {safeEdits.length > 0 && (
        <div className="mt-16">
          <div className="avp-inner">
            <div className="avp-eyebrow">00:02:14:19 — RECENT EDITS</div>
            <h2 className="avp-about-title" style={{ marginBottom: 40 }}>
              Videos I've cut lately.
            </h2>
          </div>

          <EditsMarquee edits={safeEdits} onOpen={setOpenEdit} />
        </div>
      )}

      <EditModal edit={openEdit} onClose={() => setOpenEdit(null)} />
    </section>
  );
}