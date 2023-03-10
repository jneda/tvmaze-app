import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Show, { loader as showLoader } from "./Show";
import Person, { loader as personLoader } from "./Person";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/show/:id",
    element: <Show />,
    loader: showLoader,
  },
  {
    path: "/person/:id",
    element: <Person />,
    loader: personLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
