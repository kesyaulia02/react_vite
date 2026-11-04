import ProductCard from "../components/ProductCard";
import {
  products,
  type Product,
} from "../data/products";

type ProductsProps = {
  onAddToCart: (product: Product) => void;
};

export default function Products({
  onAddToCart,
}: ProductsProps) {
  return (
    <main className="container">
      <div className="page-heading">
        <span className="hero-label">OUR COLLECTION</span>

        <h1>Our Products</h1>

        <p>
          Explore our collection and find your favorite products.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
}