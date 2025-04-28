# HiFrame - Embedded Website Application

A React + Vite application that embeds websites using iframes.

## Features

- Embeds external websites in a full-screen iframe
- Simple and lightweight implementation
- Built with React and Vite for fast development

## Getting Started

### Prerequisites

- Node.js (version 18.x or later recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/hiframe.git
   cd hiframe
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. To run on port 3000
   ```bash
   npm run dev -- --port 3000
   # or
   yarn dev --port 3000
   ```

5. Open your browser and navigate to http://localhost:5173 (or http://localhost:3000 if you specified the port)

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Notes on Iframe Restrictions

Some websites may block embedding through iframe due to security headers such as X-Frame-Options or Content-Security-Policy. If you encounter 401 (Unauthorized) or other errors, the target website may have these restrictions in place.

OAuth flows typically do not work in iframes due to these security restrictions - consider using popups or redirects instead.

## Original Vite Template Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
