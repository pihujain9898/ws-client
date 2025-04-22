# WS Client Frontend Setup Guide

This guide walks you through setting up the WebSocket client frontend built with React and Vite.

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.app.json
└── vite.config.ts
```

---

### 1. Initialize Project & Install Dependencies

- Clone the repository:
```bash
git clone <repository-url>
```

- **Dependencies**:
    - `react`, `react-dom`: React library
    - `vite`: Build tool
    - `react-hot-toast`: Toast notifications
    - `tailwindcss`: CSS framework

- Install dependencies:
```bash
npm install
```

### 2. Environment Variables

- Create a `.env` file in the root directory or rename `.env.example`.

### 3. Run the Application

- **Development**:
```bash
npm run dev
```

- **Production**:
```bash
npm run build && npm run preview
```

---

### Features

- **WebSocket Integration**: Real-time communication with the backend.
- **React Components**: Modular and reusable components.
- **TailwindCSS**: For styling.
- **Toast Notifications**: User feedback with `react-hot-toast`.

---

### Folder Details

- `src/components`: Reusable UI components.
- `src/hooks`: Custom React hooks.
- `src/pages`: Application pages.
- `src/services`: WebSocket manager and other services.

---

### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.

---

### Notes

- Ensure the backend WebSocket server is running and accessible via the URL specified in `.env`.
- TailwindCSS is pre-configured in `tailwind.config.js`.
