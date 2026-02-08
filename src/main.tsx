import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Changed this
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <React.StrictMode>
    {/* HashRouter handles the /Portfolio path automatically using # */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);