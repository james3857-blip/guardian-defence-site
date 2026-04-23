# Guardian Defence Firearms Training Website

Deployable React + Vite website starter for Guardian Defence Firearms Training.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm install
npm run build
```

The production files will be created in the `dist/` folder.

## Deploy to Vercel

1. Create a GitHub repository and upload this project.
2. Sign in to Vercel.
3. Import the repository.
4. Vercel will detect Vite automatically.
5. Click Deploy.

## Deploy to Netlify

1. Upload this project to GitHub or drag the built `dist/` folder into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Important files to update

- `public/logo.png` → your site logo
- `src/App.jsx` → course details, schedule, and contact info
- Gallery image URLs in `src/App.jsx` → replace with your own photos

## Contact form

The current form opens an email draft to:

`james3857@guardian-defence.com`

To receive direct website submissions later, connect the form to Formspree, Netlify Forms, or your hosting provider.
