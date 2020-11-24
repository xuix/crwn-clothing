import React from "react";

import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '..//..//redux/shop/shop.selectors';
import CollectionsOverview from '..//..//components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom'
import CollectionPage from "../collection/collection.component";



const ShopPage =({match})=> {
  
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component= {CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component= {CollectionPage}/>
      </div>
    );
  }

  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
  });

export default connect(mapStateToProps)(ShopPage) ;
