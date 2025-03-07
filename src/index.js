import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use ReactDOM from "react-dom/client"
import App from "./App";
import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
