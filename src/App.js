import Home from "./pages/Home";
import About from "./components/About";
import Products from "./routes/Products";
import Contact from "./routes/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>

    // <div>
    //   <Home />

    // </div>
  );
}

export default App;
