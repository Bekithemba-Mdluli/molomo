import Home from "./pages/Home";
import About from "./components/About";
import Products from "./routes/Products";
import Contact from "./routes/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

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
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    // <Router>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/products" component={Products} />
    //     <Route path="/contact" component={Contact} />
    //   </Switch>
    // </Router>

    // <div>
    //   <Home />

    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
