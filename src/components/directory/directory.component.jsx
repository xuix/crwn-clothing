import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "..//..//redux/directory/directory.selectors";
import {selectCollectionForPreview} from '..//..//redux/shop/shop.selectors';
import {addCollectionAndDocuments} from '../../firebase/firebase.utils'


import "./directory.styles.scss";

const Directory = ({ sections,collections }) => {
  //* a one of piece of code to add the shop data to the firebase database
  //addCollectionAndDocuments('collections',collections)
  return (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  collections: selectCollectionForPreview,

});

export default connect(mapStateToProps)(Directory);
