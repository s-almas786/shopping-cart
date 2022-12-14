import React from "react";
import { ChevronUp, ChevronDown } from "../icons";

function CartItem(props) {
  const { id, img, title, price, quantity } = props;
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn">Remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{quantity}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
