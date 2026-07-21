<img src="public/your-drive.svg" align="left" width="48" hspace="10" alt="App Icon">

# Your Drive — Frontend

Modern React + Vite frontend for a Google Drive–style storage application. Clean component architecture, direct-to-cloud upload UX, and a full subscription/billing UI.

<a href="https://cf.mushahidjs.dpdns.org">
  <h2 style="display: inline;">Live Demo 🚀</h2>
</a>

## 🚀 Features

### Core Features
- **Authentication UI**: email/password signup with OTP verification, login, and Google OAuth login (`@react-oauth/google`)
- **File & folder browsing**: nested directory navigation with breadcrumbs, context menus for rename/delete
- **Direct-to-cloud uploads**: files upload straight from the browser to cloud storage using a server-issued pre-signed URL, with a live progress UI
- **Subscription & billing**: a dedicated Plan page fetches the current subscription and drives a Razorpay checkout for Pro/Premium upgrades
- **Admin panel**: user list, force-logout, and account deletion for admins
- **Polished UX**: toast notifications, shimmer/skeleton loading states, modal portals

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router (`createBrowserRouter`)
- **HTTP**: Axios / Fetch (with `credentials: "include"` for session cookies)
- **Auth**: `@react-oauth/google` for Google OAuth
- **Payments**: Razorpay Checkout (client-side)
- **Validation**: Zod
- **Security**: DOMPurify for sanitizing any rendered HTML

## 📁 Project Structure

```
your-drive-storage-app-frontend/
├─ index.html
├─ package.json
├─ eslint.config.js
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ .env (not committed)
├─ public/
│  └─ _redirects
└─ src/
   ├─ main.jsx                       # route table
   ├─ App.jsx                          # drive view (files/directories, upload, breadcrumb)
   ├─ App.css
   ├─ index.css
   ├─ assets/
   ├─ Component/
   │  ├─ BreadCrumb.jsx
   │  ├─ ContextMenu.jsx
   │  ├─ DirItemListing.jsx
   │  ├─ Header.jsx
   │  ├─ Portal.jsx
   │  ├─ ShimmerLoading.jsx
   │  ├─ ToastPopup.jsx
   │  ├─ UploadProgress.jsx
   │  └─ UploadProgressBar.jsx
   └─ page/
      ├─ Admin.jsx                     # admin user management
      ├─ HeroPage.jsx                   # landing page
      ├─ Login.jsx
      ├─ SingUp.jsx
      ├─ Plan.jsx                        # subscription plans & Razorpay checkout
      ├─ Privacy_Policy.jsx
      └─ Terms_And_Condition.jsx
```

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- A running instance of [your-drive-storage-app-backend](https://github.com/mushahid2120/your-drive-storage-app-backend)
- A Razorpay account (public key only, for client-side checkout)
- A Google OAuth client ID

### Installation

```bash
git clone https://github.com/mushahid2120/your-drive-storage-app-frontend.git
cd your-drive-storage-app-frontend
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_BACKEND_BASE_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_RAZORPAY_KEY=your_razorpay_public_key
```

### Running Locally

```bash
npm run dev        # start Vite dev server
npm run build        # production build
npm run preview        # preview the production build
npm run lint            # run ESLint
```

The app runs on `http://localhost:5173` by default.

## 🗺️ Routes

| Path | Page | Notes |
|------|------|-------|
| `/` | `HeroPage` | Landing page |
| `/login` | `Login` | Email/password + Google login |
| `/signup` | `SingUp` | Signup with OTP verification + Google login |
| `/home` | `App` | Drive root view |
| `/directory/:dirId` | `App` | Browse a specific folder |
| `/admin` | `Admin` | Admin user management |
| `/plan` | `Plan` | Subscription plans & checkout |
| `/privacy-policy` | `Privacy_Policy` | Static page |
| `/terms-and-conditions` | `Terms_And_Condition` | Static page |
| `*` | — | 404 fallback |

## 🔐 Authentication

- Login/signup calls the backend's `/auth` endpoints with `credentials: "include"` so the session cookie is stored and sent on every subsequent request
- Google OAuth uses `@react-oauth/google`'s `GoogleOAuthProvider`, wrapping the Login and SignUp pages
- Auth state (`isAuthorized`) is derived by calling `GET /auth` on load — there's no client-stored token to manage

## 💳 Payment Integration

- The Plan page fetches the current subscription from `GET /subscriptions`
- Selecting a plan calls the backend to create a Razorpay order, then opens Razorpay's client-side Checkout widget with `VITE_RAZORPAY_KEY`
- On successful payment, the backend's webhook (not the frontend) is the source of truth for activating the plan — the UI simply re-fetches subscription state afterward

## 🖼️ File Upload UX

- Uploads request a pre-signed URL from the backend, then PUT the file directly to cloud storage from the browser — the file never passes through the app's own server
- `UploadProgress` / `UploadProgressBar` track per-file progress using upload event callbacks
- `ShimmerLoading` provides skeleton placeholders while directory contents load

## 📱 Responsive Design

- Built mobile-first with Tailwind CSS utility classes
- Context menus and directory listings adapt to touch interactions

## 🚀 Deployment

Two deployment paths are supported for the same codebase:

1. **Netlify** — static build deployed via Netlify, paired with the Render-hosted backend
2. **S3 + CloudFront** — production build uploaded to S3 and served through CloudFront, paired with the Lambda-hosted backend; a GitHub Actions workflow builds the bundle, syncs it to S3, and invalidates the CloudFront cache on every push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

MIT

## 📞 Support

For support, open an issue in the repository.
