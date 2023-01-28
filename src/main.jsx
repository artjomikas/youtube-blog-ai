import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import BlogArticleProvider from "./context/BlogArticleProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BlogArticleProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BlogArticleProvider>
);
