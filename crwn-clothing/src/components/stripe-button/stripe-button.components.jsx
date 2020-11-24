import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hr8FkHjwYRzCTTJ5rjg6oDQ4aCPprZcYywSPTARB0mmASUEqi7NOLmU1QxCc6iP3Wm7EhefX3vQUqFk4TzYgQ2L00Rn8ZxmUV";

  const onToken =  (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
