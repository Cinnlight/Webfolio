import React from "react";
import ReactDom from "react-dom/client";
import WebfolioRouter from "./router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebfolioRouter />
  </StrictMode>,
)
