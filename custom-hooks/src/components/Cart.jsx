import "../index.css";
import CartItem from "./CartItem";

function Cart({ cart, onUpdateQuantity, onRemove, total }) {
  if (cart.length === 0) {
    return <div className="cart-empty">Cart is Empty</div>;
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${typeof total === "number" ? total.toFixed(2) : total}</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
