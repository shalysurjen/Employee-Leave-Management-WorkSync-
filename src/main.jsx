import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import DashboardLayout from "./component/dashboard/DashboardLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      {/* <DashboardLayout /> */}
    </BrowserRouter>
  </React.StrictMode>
);