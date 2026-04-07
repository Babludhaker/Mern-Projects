import Cart from "./components/Cart.jsx";
import ProductCard from "./components/ProductCard";
import { products } from "./data/product.js";
import { useCart } from "./hooks/useCart.js";
import "./index.css";

export default function App() {
  const { addToCart, removeFromCart, updateQuantity, total, cart } = useCart();
  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main className="product">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </main>

      <div>
        <Cart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          total={total}
        />
      </div>
    </div>
  );
}
