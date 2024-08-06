import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import App from "../App";
import Contact from "../pages/Contact";
import ProductsManagement from "../pages/ProductsManagement";
import Products from "../pages/products/Products";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "products-management",
        element: <ProductsManagement />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
