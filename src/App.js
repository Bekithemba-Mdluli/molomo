import Home from "./pages/Home";
import About from "./components/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Racking from "./pages/Racking";
import Storage from "./pages/Storage";
import Shelving from "./pages/Shelving";
import Mezzanine from "./pages/Mezzanine";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/products/racking",
      element: <Racking />,
    },
    {
      path: "/products/shelving",
      element: <Shelving />,
    },
    {
      path: "/products/storage",
      element: <Storage />,
    },
    {
      path: "/products/mezzanine",
      element: <Mezzanine />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
