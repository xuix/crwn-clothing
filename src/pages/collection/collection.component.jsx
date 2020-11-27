import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectShopCollection } from "..//..//redux/shop/shop.selectors";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CollectionPage = ({ collection }) => {
  console.log("######collection=", collection);
  const { items, title } = collection;

  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div>
        <div  className="items" >
          {items.map((item) => (
            <CollectionItem  className="collection-item" key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
