import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

// Sélection avec l'ID
const element = document.getElementById("monParagraphe");

// Affichage dans la console
console.log(element);
