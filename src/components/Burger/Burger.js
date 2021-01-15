import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let transIngredients = Object.keys(props.ingredients).map((key) => {
    return [...Array(props.ingredients[key])].map((_, i) => {
      return <BurgerIngredient key={key + i} type={key} />;
    });
  }).
  reduce((arr, el) => {
    return arr.concat(el)
  },[]);

  if (transIngredients.length === 0) {
    transIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
