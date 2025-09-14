import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import { LiveCursorsProvider } from "./context/LiveCursorsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <LiveCursorsProvider>
    <App />
  </LiveCursorsProvider>
);
