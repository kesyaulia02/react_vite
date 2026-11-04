import { Link } from "react-router-dom";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-info">
        <span className="category">{product.category}</span>

        <h3>{product.name}</h3>

        <p className="product-price">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        <div className="product-actions">
          <Link
            to={`/products/${product.id}`}
            className="detail-btn"
          >
            Detail
          </Link>

          <button
            className="add-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}