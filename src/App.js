import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state)
  console.log(products)
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:ProductId" element={<ProductDetails/>} />
          <Route>404 Not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
