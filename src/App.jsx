import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home, { listUser } from "./page/Home";
import ProductDetail, { findUser } from "./page/ProductDetail";
import Accessories, { dataAccessories } from "./page/Accessories";
import About from "./page/About";

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
        path: "accessories",
        element: <Accessories />,
        loader: dataAccessories,
      },
      {
        path: "home/:id",
        element: <ProductDetail />,
        loader: findUser,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
