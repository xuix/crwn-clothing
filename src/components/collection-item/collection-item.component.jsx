import React from "react";
import { withRouter } from "react-router-dom";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'

const CollectionItem = ({ item,addItem }) => {
  const {id, name, price, imageUrl}= item;
  return( <div className="collection-item">
  <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
  <div className="collection-footer">
    <div className="name">{name}</div>
    <div className="price">{price}</div>
  </div>
  <CustomButton inverted onClick={()=>addItem(item)} >add to cart</CustomButton>
</div>)
 
};

const mapDispatchToProps=(dispatch)=>({
addItem: (item)=> dispatch(addItem(item))
}
)


export default connect(null,mapDispatchToProps)(CollectionItem);
