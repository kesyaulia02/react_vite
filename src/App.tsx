import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import type { Product } from "./data/products";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  // Menambahkan produk ke keranjang
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);

    alert(`${product.name} berhasil ditambahkan ke Cart!`);
  };

  // Menghapus produk dari keranjang
  const removeFromCart = (index: number) => {
    setCart((prevCart) =>
      prevCart.filter((_, i) => i !== index)
    );
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products onAddToCart={addToCart} />
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetail onAddToCart={addToCart} />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={removeFromCart}
            />
          }
        />
      </Routes>

      <footer className="footer">
        <h2>MyStore.</h2>
        <p>
          Your favorite products, all in one place.
        </p>
        <span>© 2026 MyStore. All Rights Reserved.</span>
      </footer>
    </BrowserRouter>
  );
}

export default App;