import type { Product } from "../data/products";
import { Link } from "react-router-dom";

type CartProps = {
  cart: Product[];
  onRemove: (index: number) => void;
};

export default function Cart({ cart, onRemove }: CartProps) {
  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <main className="container">
      <div className="page-heading">
        <h1>Shopping Cart</h1>
        <p>Review your selected products.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>You haven't added any products yet.</p>

          <Link to="/products" className="shop-btn">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((product, index) => (
              <div
                className="cart-item"
                key={`${product.id}-${index}`}
              >
                <img src={product.image} alt={product.name} />

                <div className="cart-info">
                  <span className="category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <p>
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemove(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>
              Total: Rp {total.toLocaleString("id-ID")}
            </h2>
          </div>
        </>
      )}
    </main>
  );
}