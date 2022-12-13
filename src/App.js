import Home from "./pages/Home";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    // <div>
    //   <Home />

    // </div>
  );
}

export default App;
