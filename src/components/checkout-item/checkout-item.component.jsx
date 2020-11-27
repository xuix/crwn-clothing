import React from "react";

import "./checkout-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
//import { addItem } from "../../redux/checkout/checkout.action";
import checkoutItem from "./checkout-item.component";
import { connect } from "react-redux";
import { clearItemFromCart, removeItemFromCart,addItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, clearItem,removeItem,addItem }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem:(item) => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
