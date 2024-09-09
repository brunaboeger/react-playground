import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

import Basics from "./basics/Basics";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Basics />
  </StrictMode>
);
