import React  from "react";

import "./custom-button.styles.scss";
//import { Children } from "react";

const CustomButton = ({children,isGoogleSignIn,...otherProps}) => (
 <button className={`${isGoogleSignIn? 'GoogleSignIn':'' } custom-button`} {...otherProps}>
     {children}
 </button>
);

export default CustomButton;
