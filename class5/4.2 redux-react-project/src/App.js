import ProductListing from "./components/ProductListing";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<ProductListing />} />
            <Route exact path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
