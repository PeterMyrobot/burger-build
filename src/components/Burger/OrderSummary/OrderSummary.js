import React from "react";

import Aux from "../../../hoc/Auxil/Auxil";
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Burger with the following ingredients:</p>
      <ul>
          {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
    </Aux>
  );
};

export default OrderSummary;
