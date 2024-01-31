import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css"
import AppRoute from "./routes/AppRoute.tsx";

const router = createBrowserRouter([
  {
    path:"/Shopp/",
    element:<App/>,
    children: [
      {
        path:"/Shopp/",
        element:<AppRoute/>
      }
      

    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
