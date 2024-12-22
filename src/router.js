import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
