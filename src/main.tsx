import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css"
import AboutPage from "./pages/AboutPage.tsx";


const router = createBrowserRouter([
  {
    path:"/Shopp",
    element:<App/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:"/Shopp/about",
    element:<AboutPage/>,
    errorElement: <div>404 Not Found</div>
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
