import { Link, useParams } from "react-router-dom";
import { products, type Product } from "../data/products";

type ProductDetailProps = {
  onAddToCart: (product: Product) => void;
};

export default function ProductDetail({
  onAddToCart,
}: ProductDetailProps) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="container">
        <h2>Product Not Found</h2>

        <Link to="/products" className="text-link">
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="detail-container">
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-content">
        <span className="category">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <h2>
          Rp {product.price.toLocaleString("id-ID")}
        </h2>

        <p>{product.description}</p>

        <button
          className="add-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

        <Link to="/products" className="back-link">
          ← Back to Products
        </Link>
      </div>
    </main>
  );
}