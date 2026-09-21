import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Global.css";
import Loja from "./Front/Loja.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Loja />
  </StrictMode>
);