import "./App.css";
import Category from "./components/Category";
import WishList from "./components/WishList/WishList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </BrowserRouter>
      {/* <Category /> */}
      {/* <WishList /> */}
    </div>
  );
}

export default App;
