import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Store from "./Store"; // state store
import { Provider } from "react-redux"; // Provider (update) (wrapper)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider Store={Store}>
    <App />
  </Provider>
);
