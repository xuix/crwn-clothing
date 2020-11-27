import React from "react";

import "./cart-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";
import cartItem from "./cart-item.component";

const CartItem = ({ item, addItem }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
