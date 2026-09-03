# Defentra Security and Technology Solutions - Landing

This repository contains a lightweight MERN-style landing page for **Defentra Security and Technology Solutions** and its flagship product:

- **TIRLAP** (Threat Intelligence Real-time Layer Analysis Platform)
- Focused on explaining the **Problem → Gaps → Exact Solution** narrative
- Includes About Us, Product, and introductory company sections
- Includes a Firebase-backed waitlist form (`waitlist` collection in Firestore)

## Tech Stack

- **Node.js + Express** (delivery server)
- **React** (landing UI)
- **Firebase Firestore** (waitlist storage)

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Firebase setup for waitlist

Update `/home/runner/work/landing/landing/public/config.js` with your Firebase web app configuration.

Waitlist records are written to Firestore collection: `waitlist`.
