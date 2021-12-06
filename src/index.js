import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PageContextProvider } from "./context/PageContext";

ReactDOM.render(
  <PageContextProvider>
    <App />
  </PageContextProvider>,
  document.getElementById("root")
);
