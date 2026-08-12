# Akash Verma — Portfolio

A cinematic, mobile-friendly React portfolio site with a Home, About, My Works
(clients) and Contact section — built with Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Project structure

```
akash-verma-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            entry point
    ├── App.jsx             wires all sections together + scroll logic
    ├── App.css             all styling (colors, type, layout)
    ├── data/
    │   └── content.js      ← ALL editable text lives here (bio, stats, clients, email…)
    ├── components/
    │   ├── icons.jsx        Instagram / LinkedIn / YouTube / Vimeo / play icons
    │   ├── Nav.jsx           the timeline-scrubber navigation bar
    │   ├── Hero.jsx          homepage hero
    │   ├── About.jsx         about section
    │   ├── Works.jsx         "My recent clients" section
    │   └── Footer.jsx        contact section
    └── assets/
        └── clients/          ← put client photos/logos here
```

## Adding a client photo or logo

1. Drop the image file into `src/assets/clients/`, e.g. `shivam.jpg` or
   `avinash.jpg`.
2. Open `src/data/content.js` and find the `CLIENTS` array. Set the `photo`
   field for that client to the file path, for example:

   ```js
   {
     name: "Shivam Singh",
     handle: "@shivamison1",
     url: "https://www.youtube.com/@shivamison1",
     tape: "C002",
     photo: "/src/assets/clients/shivam.jpg",
     video: "https://www.youtube.com/watch?v=XXXXXXXX", // optional
   }
   ```

3. That's it — the card automatically shows the photo. If `photo` is left as
   `null`, the card falls back to a lettered avatar (e.g. "SS"), so nothing
   ever breaks while you're still collecting images.

## Adding a "Watch sample" video button

Set the `video` field on a client (any public YouTube/Vimeo link, or a link
to proof of the collaboration). A "Watch sample" button appears on that
client's card automatically. Leave it `null`/unset to hide the button.

## Editing any other text

Everything — the hero headline, bio paragraphs, stats, skills, niches, email
and social links — lives in `src/data/content.js`. You shouldn't need to
touch the component files to update copy.
