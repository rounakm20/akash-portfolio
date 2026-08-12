/* ============================= DESIGN TOKENS ============================= */
export const COTTON   = "#EDEBDD";
export const CHERRY   = "#810100";
export const CHERRY_L = "#a81a17";
export const MAROON   = "#630000";
export const NOIR     = "#1B1717";
export const BLACK    = "#0a0908";
export const MUTED    = "#8f8879";
export const MUTED_2  = "#5c564c";
export const BORDER   = "rgba(237,235,221,0.12)";

/* ============================= NAV / TIMELINE ============================= */
export const SECTIONS = [
  { id: "home", label: "Home", tc: "00:00:00:00" },
  { id: "about", label: "About", tc: "00:00:14:12" },
  { id: "works", label: "Works", tc: "00:01:02:08" },
  { id: "contact", label: "Contact", tc: "00:02:41:20" },
];

/* ============================= HERO ============================= */
// Drop your photo at src/assets/hero/<file>.jpg and point HERO_IMAGE to it,
// e.g. "/src/assets/hero/akash.jpg". Leave it as null and the hero shows a
// clean placeholder frame instead — nothing breaks either way.
export const HERO_IMAGE = null;

/* ============================= ABOUT ============================= */
export const ABOUT_BODY = [
  "I started out editing wedding videos on a laptop that overheated every twenty minutes, and I haven't stopped cutting since. Today I work with independent creators, small businesses and personal brands who care about pacing as much as the picture.",
  "My process starts with the story, not the software — structure, sound and colour all serve the feeling I'm trying to get across the cut. I'm equally at home tightening a 30-second reel and shaping a long-form YouTube video.",
];

export const STATS = [
  { k: "Experience", v: "6 Yrs" },
  { k: "Turnaround", v: "24–48 Hrs" },
  { k: "Output", v: "4K / DCI" },
  { k: "Suite", v: "Premiere · Resolve" },
];

// Sound Design and VFX Compositing removed per request — swapped for
// skills that better match the current short-form / creator-led workload.
export const SKILLS = [
  "Narrative Editing",
  "Colour Grading",
  "Motion Graphics",
  "Retention Hooks",
  "Trend-Based Reels",
  "Captions & Subtitles",
];

/* ============================= WORKS / CLIENTS =============================
   Drop a client's photo or logo at src/assets/clients/<file>.jpg and point
   `photo` to it (e.g. `photo: "/src/assets/clients/shivam.jpg"`). Leave it
   as `null` and the card will automatically show a lettered avatar instead,
   so nothing breaks if a photo isn't ready yet.

   `video` is optional — add a link to a sample edit / proof of work and a
   "Watch sample" button appears on the card. Leave it out to hide the button.
============================================================================ */
export const EDITS = [
  {
    id: "e1",
    title: "horror short yt video",
    client: "Shivam Singh",
    
    url: "/src/assets/clients/shivam.mp4",
  },
  {
    id: "e2",
    title: "Product Launch Reel",
    client: "Nova Skincare",
    
    url: "/src/assets/clients/muskaan.mp4",
  },
  {
    id: "e3",
    title: "Short yt video",
    client: "Avinash Kumar",
   
    url: "/src/assets/clients/avinash.mp4",
  },
  {
    id: "e4",
    title: "Real Estate Promo",
    client: "realestate",
   
    url: "/src/assets/clients/realestate.mp4",
  },
  
];

export const CLIENTS = [
  {
    name: "Avinash Kumar",
    handle: "@astheticavi",
    url: "https://www.youtube.com/@astheticavi",
    tape: "C001",
    photo: "/src/assets/clients/avi.png", 
    video: "/src/assets/clients/avinash.mp4",
  },
  {
    name: "Shivam Singh",
    handle: "@shivamison1",
    url: "https://www.youtube.com/@shivamison1",
    tape: "C002",
    photo: "/src/assets/clients/shivam.jpeg", 
    video: "/src/assets/clients/shivam.mp4", // e.g. "https://www.youtube.com/watch?v=xxxxxxxx"
  },
];

export const WORK_STATS = [
  { k: "Currently Working With", v: "10+ Clients" },
  { k: "Footage Edited Till Date", v: "30+ Hrs" },
  { k: "YT Shorts Edited", v: "300+" },
  { k: "Insta Reels Edited", v: "500+" },
];

export const NICHES = ["Business", "Real Estate", "YouTubers", "Stock Market", "& Many More"];

/* ============================= CONTACT ============================= */
export const EMAIL = "av6841887@gmail.com";
export const SOCIALS = {
  instagram: "https://www.instagram.com/midnighttruth1234/",
  linkedin: "#",
  youtube: "https://www.youtube.com/@Midnightscreams-r6l",
  
};
