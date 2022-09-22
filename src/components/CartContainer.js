import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItem, total, quantity } = useSelector((state) => state.cart);
  if (quantity < 1) {
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItem.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Empty Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
