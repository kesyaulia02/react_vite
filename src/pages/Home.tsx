import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">
            WELCOME TO MYSTORE
          </span>

          <h1>
            Find Your
            <br />
            Favorite Products
          </h1>

          <p>
            Discover a collection of quality products
            with attractive prices. Find everything you
            need in one place.
          </p>

          <Link to="/products" className="shop-btn">
            Shop Now →
          </Link>
        </div>
      </section>

      <section className="home-info">
        <h2>Welcome to MyStore</h2>

        <p>
          MyStore menyediakan berbagai pilihan produk
          mulai dari electronics, accessories, hingga fashion.
          Temukan produk favoritmu sekarang!
        </p>

        <Link to="/products" className="text-link">
          Explore Products →
        </Link>
      </section>
    </main>
  );
}