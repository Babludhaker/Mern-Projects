import { FaShoppingCart } from "react-icons/fa";
import "../index.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button className="add-btn" onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
