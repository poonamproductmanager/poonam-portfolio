# Poonam M — personal website

A personal website built with Next.js (App Router), React and TypeScript, with plain CSS (no extra frameworks).

## Edit the content

All text lives in `src/data/profile.ts`: your summary, roles, skills, certifications and contact links. Change it there and the page updates. Styling is in `src/app/globals.css`.

## Run locally (optional)

You need Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel via GitHub

1. Create a new **empty** repository on GitHub (no README).
2. Upload these files to it, either by dragging the folder contents into the GitHub web page ("uploading an existing file"), or with git:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In Vercel, click **Add New → Project**, import the repository and click **Deploy**. Vercel detects Next.js automatically, so you don't need to change any settings.
4. Every later push to `main` redeploys the site automatically.
