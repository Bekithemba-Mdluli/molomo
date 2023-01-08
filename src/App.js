// import Home from "./routes/Home";
// import About from "./routes/About";
import Products from "./routes/Products";
// import Contact from "./routes/Contact";
// import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" component={About} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}
      <Products />
    </div>
  );
}

export default App;
