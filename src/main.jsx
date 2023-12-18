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
    <div className="m-auto h-max max-w-[640px] pb-10 px-5">
      <RouterProvider router={RouterObject} />
    </div>
  </React.StrictMode>
);
