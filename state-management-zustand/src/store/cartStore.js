import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],

  // Add Item
  addToCart: (product) => {
    const existingItem = get().cart.find((item) => item.id === product.id);

    if (existingItem) {
      // increase Quantity
      set({
        cart: get().cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      set({
        cart: [...get().cart, { ...product, quantity: 1 }],
      });
    }
  },

  // decrease Quantity
  decreaseQuantity: (id) => {
    const item = get().cart.find((i) => i.id === id);

    if (item.quantity == 1) {
      set({
        cart: get().cart.filter((item) => item.id != id),
      });
    } else {
      set({
        cart: get().cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      });
    }
  },

  // remove to cart

  removeToCart: (id) => {
    set({
      cart: get().cart.filter((item) => item.id !== id),
    });
  },

  totalPrice: () => {
    return get().cart.reduce((total, item) => {
      total + item.price * item.quantity;
    }, 0);
  },
}));

export default useCartStore;
