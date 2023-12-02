import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { WordContextProvider } from "./context/WordContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WordContextProvider>
      <App />
    </WordContextProvider>
  </React.StrictMode>
);
