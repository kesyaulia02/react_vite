import { Link, useLocation } from "react-router-dom";

type NavbarProps = {
  cartCount: number;
};

export default function Navbar({ cartCount }: NavbarProps) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MyStore<span>.</span>
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/products"
          className={location.pathname.startsWith("/products") ? "active" : ""}
        >
          Products
        </Link>

        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "active" : ""}
        >
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}