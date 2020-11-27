import React from "react";

import "./custom-button.styles.scss";
//import { Children } from "react";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "GoogleSignIn" : ""} 
 ${inverted ? "inverted" : ""}
 custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
