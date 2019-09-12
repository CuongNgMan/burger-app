import React from "react";
import StyledBurger from "./BurgerStyled";
import Ingredients from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  let transIngredients = Object.keys(props.ingredients)
    .map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, index) => {
        return <Ingredients key={igkey + index} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transIngredients.length === 0) {
    transIngredients = <p>Add more ingredients!!!</p>;
  }

  return (
    <StyledBurger>
      <Ingredients type="bread-top" />
      {transIngredients}
      <Ingredients type="bread-bottom" />
    </StyledBurger>
  );
};

export default burger;
