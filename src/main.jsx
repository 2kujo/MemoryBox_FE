import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterInfo } from "@/router";

// import App from "./App.jsx";
// import ServiceMain from "@/pages/ServiceMain";
import "./index.css";

const RouterObject = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ServiceMain /> */}
    <RouterProvider router={RouterObject} />
  </React.StrictMode>
);
