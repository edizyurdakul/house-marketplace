import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
