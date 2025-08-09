# URL Shortener Frontend

A modern, minimal, and professional web app for shortening URLs, tracking analytics, and managing links—all with a beautiful UI and seamless UX.

[**Live App → https://url-shortener-frontend-liard-one.vercel.app/**](https://url-shortener-frontend-liard-one.vercel.app/)

## Overview

This project is a fully functional URL shortener frontend, built with React and designed to provide a seamless user experience. It features instant URL shortening, click analytics, and a secure admin dashboard.

## Features

* **Instant URL shortening** with a single click
* **Copy-to-clipboard** for quick sharing
* **Click analytics**: See how many times each link is used
* **Admin dashboard**: Secure login, view/manage all URLs
* **Responsive, minimal, and elegant design**
* **Professional animations & accessibility**

## Tech Stack

* React (with Hooks)
* Axios
* React Router DOM
* Custom CSS (minimal, modern, and responsive)
* Backend: [Node.js/Express/MongoDB API](../url_shortner_be)

## Getting Started

```bash
npm install
npm start
```
The app runs locally at [http://localhost:3000](http://localhost:3000)

## API Connection

* The frontend is pre-configured to use the deployed backend.
* See `/src/UrlShortenerForm.js` for the API base URL.

## Project Structure

```
url-shortner-fe/
├── src/
│   ├── App.js, App.css
│   ├── UrlShortenerForm.js, UrlShortenerForm.css
│   ├── AdminPage.js, AdminPage.css
│   ├── LoginPage.js, LoginPage.css
│   └── components/
│       ├── Header.js, Header.css
│       ├── Footer.js, Footer.css
│       └── ...
├── public/
├── package.json
└── README.md
```

## Security
## 🛡️ Security
- No sensitive keys in the frontend repo.
- All admin actions require authentication.

## 🌐 Deployment
- Deployed on Vercel: [https://url-shortener-frontend-liard-one.vercel.app/](https://url-shortener-frontend-liard-one.vercel.app/)
- Backend: [See backend repo](../url_shortner_be)

---

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
