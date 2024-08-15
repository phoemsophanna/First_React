import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home, { listUser } from "./page/Home";
import ProductDetail, { findUser } from "./page/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: listUser,
      },
      {
        path: ":id",
        element: <ProductDetail />,
        loader: findUser,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
