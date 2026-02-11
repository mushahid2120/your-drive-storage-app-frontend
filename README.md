<img src="public/your-drive.svg" align="left" width="48" hspace="10" alt="App Icon">

# Your Drive 

Modern React + Vite frontend for a Google Drive–style storage application. This repository highlights a clean component architecture, direct-to-cloud upload UX, and production-minded UI patterns suitable for portfolio review.

Live Demos
---
<a href="https://mushahidjs.dpdns.org">
  <h2 style="display: inline;">Live Demo  🚀</h2>
</a>
 — deployed via Netlify (frontend) and Render (backend).

<br/>

<a href="https://cf.mushahidjs.dpdns.org">
  <h2 style="display: inline;">Live Demo  🚀</h2>
</a> — frontend served from S3 + CloudFront; backend deployed as Lambda (serverless) behind API gateway/CloudFront.

---

Full repository tree (frontend)
-----------------------------

```
your-drive-storage-app-frontend/
├─ index.html
├─ package.json
├─ eslint.config.js
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ README.md
├─ .env (not committed)
├─ public/
│  └─ _redirects
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  ├─ assets/
│  ├─ Component/
│  │  ├─ BreadCrumb.jsx
│  │  ├─ ContextMenu.jsx
│  │  ├─ DirItemListing.jsx
│  │  ├─ Header.jsx
│  │  ├─ Portal.jsx
│  │  ├─ ShimmerLoading.jsx
│  │  ├─ ToastPopup.jsx
│  │  ├─ UploadProgress.jsx
│  │  └─ UploadProgressBar.jsx
│  └─ page/
│     ├─ Admin.jsx
│     ├─ HeroPage.jsx
│     ├─ Login.jsx
│     └─ SingUp.jsx
```


<h2 style="color:#0b74de">✨ What this frontend demonstrates</h2>

- <strong>React + Vite</strong>: modern toolchain with fast HMR and minimal build config.
- <strong>TailwindCSS</strong>: utility-first styling for consistent, responsive UI.
- <strong>Client-side routing</strong>: nested routes and breadcrumb navigation for folder hierarchy.
- <strong>Direct-to-cloud uploads</strong>: the client uploads large files directly to cloud storage for scalability and reliability.
- <strong>Polished UX</strong>: upload progress, toasts, context menus, and loading placeholders.

---

<h2 style="color:#0b74de">🏗 Project structure (important files)</h2>

- App entry & routing: `src/main.jsx`
- Core app logic: `src/App.jsx`
- Pages: `src/page` (Login, SignUp, Admin, Home)
- Reusable components: `src/Component` (Header, Breadcrumb, Listing, Upload UI)
- Styling: `tailwind.config.js` and `src/index.css`

---

<h2 style="color:#0b74de">🔧 Stack & libraries</h2>

- React (hooks & functional components)
- Vite (dev server & bundler)
- TailwindCSS (styling)
- React Router (routing)
- Axios (HTTP + direct cloud PUT)
- @react-oauth/google (Google One‑Tap / OAuth)
- Zod (client-side validation where applicable)

---

<h2 style="color:#0b74de">✨ High-level features (recruiter-friendly)</h2>

- Authentication UI: email/password and Google login flows integrated with server-side sessions.
- File upload UX: multi-file uploads, progress visualization, cancellation and resilient finalization.
- Directory browsing: breadcrumb navigation and nested views for folder hierarchy.
- Admin UI: lightweight admin interface for user oversight (sensitive operations are backend-controlled).

---

<h2 style="color:#0b74de">🚀 CI/CD & DevOps</h2>

Hosting & automation
- Hosting: frontend is deployed to S3 and served through CloudFront for low-latency CDN delivery.
- GitHub Actions pipeline: an automated workflow (`.github/workflows/main.yml`) builds the production bundle, uploads artifacts to the configured S3 bucket, and triggers a CloudFront cache invalidation so updates go live immediately.
- Secrets & env: CI uses encrypted GitHub secrets for sensitive values (S3 credentials, CloudFront distribution ID, OAuth client IDs, API base URL). The pipeline separates build and deploy steps and uses secure credentials provided at CI runtime.

Observability
- Add build/deploy badges and basic uptime monitoring for the demo to demonstrate production readiness.

---

<h2 style="color:#0b74de">☁️ Cloud & integration skills</h2>

- Direct-to-cloud upload pattern: client obtains a server-issued upload token and uploads files directly to cloud storage, reducing server bandwidth.
- Secure delivery: files are accessed using signed CDN URLs to enforce access control.
- Google OAuth: client-side integration using `@react-oauth/google` for quick social login UX.

---

<h2 style="color:#0b74de">Security & reviewer guidance</h2>

- This README focuses on high-level features and intentionally avoids exposing backend endpoints or sensitive implementation details.
- Reviewers should inspect `src/App.jsx`, `src/page/*`, and `src/Component/*` to evaluate UI architecture, state management, and integration patterns.

---
