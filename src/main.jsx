import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// ✅ Dynamically set basename for development and production
const isProduction = import.meta.env.MODE === "production";
const basename = isProduction ? "/my-react-app" : "";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}> {/* ✅ Works for both local & production */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
