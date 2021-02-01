import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((ctrl) => (
        <BuildControl
          added={() => props.ingredientAdded(ctrl.type)}
          remove={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disableInfo[ctrl.type]}
          key={ctrl.label}
          label={ctrl.type}
        />
      ))}
      <button 
        disabled={!props.purchaseable}
        className={classes.OrderButton}
        onClick={props.order}
        >{props.isAuth? 'ORDER NOW' : 'SIGNUP TO ORDER'}</button>
    </div>
  );
};

export default BuildControls;
