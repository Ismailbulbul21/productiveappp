# Qorsheyn Policy Website

Policy and legal pages for the Qorsheyn productivity app: Privacy Policy, Terms of Service, Delete Account & Data, and Data Safety.

## Tech stack

- **Vite** (React)
- **Tailwind CSS**
- **React Router**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Vercel

1. Push this repo to GitHub (or connect your repo in Vercel).
2. In Vercel: **New Project** → import the repo.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

The included `vercel.json` rewrites all routes to `index.html` so client-side routing works (e.g. `/privacy`, `/terms`).

## Pages

- **/** – Home with links to all policy pages
- **/privacy** – Privacy Policy
- **/terms** – Terms of Service
- **/delete-account** – Delete Account & Data
- **/data-safety** – Data Safety (for app store listings)

Contact: [ismailbulbul381@gmail.com](mailto:ismailbulbul381@gmail.com)
