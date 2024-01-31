import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css"
import LandingPage from "./pages/landingPage.tsx";

const router = createBrowserRouter([
  {
    path:"/Shopp/",
    element:<App/>,
    children: [
      {
        path:"/Shopp/",
        element:<LandingPage/>
      }
      

    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
