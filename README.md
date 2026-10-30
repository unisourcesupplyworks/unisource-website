# UniSource website

Static marketing site for UniSource, built with React and Vite. It uses the same colour theme as the UniSource app.

## Run it locally

You need Node.js 18 or newer.

```bash
npm install
npm run dev       # opens a local dev server, usually at http://localhost:5173
```

## Build for hosting

```bash
npm run build     # outputs a static site in dist/
npm run preview   # serve the built site locally to check it
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, cPanel, S3). The build uses relative paths, so it also works from a sub-folder.

## Editing content

All business details and copy live in **`src/data.js`**:

- `CONTACT` holds the address, phone numbers, WhatsApp number, email and minimum order value.
- The catalogue lines (`RAW`) list every item. Add or remove a line and the category pages and item counts update automatically.
- `WHY`, `SECTORS` and `HOW` hold the section texts.

### Using your own photos

Every illustration sits in an image slot. To swap one for a photo:

1. Put the image in `public/images/` (for example `public/images/pantry.jpg`).
2. In `src/data.js`, set its slot in `PHOTOS`, for example `Pantry: 'images/pantry.jpg'`.

The slots are `HeroShelf`, `Pantry`, `Stationery`, `Housekeeping`, `Gifting`, `Office`, `Coworking`, `Cafe`, `Campus` and `Van`. Any slot left empty keeps its illustration. Landscape images work best (about 8:5 for the cards, 6:5 for the hero).

Colours and spacing are CSS variables at the top of **`src/styles.css`**. The site switches to a dark theme automatically when the visitor's device is in dark mode.

## How the buttons work

There is no backend. Requests are sent through the visitor's own WhatsApp or email app:

| Button | What it does |
|---|---|
| Nav links, "Browse categories", "Request a quote" | Smooth-scroll to that section |
| Category cards / footer category links | Open the item browser with search and filters |
| "Add", +/−, "Add all 8", "Reorder these" | Build a quote list, saved in the browser |
| List icon in the header | Opens the quote list drawer |
| Sector cards | Pre-select the type of space in the quote form |
| "Send on WhatsApp" / "Send by email" | Open WhatsApp or email with the full list pre-filled |
| "Sign in" / "Get the app" | Request app access over WhatsApp |
| Address, phone, email | Open Google Maps, the dialler, or the email app |
