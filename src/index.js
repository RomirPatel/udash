import React from "react";
import ReactDOM from "react-dom"; // Updated import
import { Home } from "./screens/Home";

// Ensure the DOM is loaded before trying to access elements
document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  
  // Check if the app element exists in the DOM
  if (app) {
    const root = ReactDOM.createRoot(app);
    root.render(<Home />);
  } else {
    console.error("Target container 'app' not found in the DOM.");
  }
});
