import React from "react";
import ReactDOM from "react-dom/client";

// Css filess
import "./css/global.css";
import "./css/App.css";

// Components
import App from "./App.tsx";
import ToastProvider from "./components/ui/toast/Toast.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider />
    <App />
  </React.StrictMode>
);
