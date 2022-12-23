import Home from "./pages/Home";
import About from "./components/About";
import Products from "./routes/Products";
import Contact from "./routes/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Racking from "./pages/Racking";

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
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
