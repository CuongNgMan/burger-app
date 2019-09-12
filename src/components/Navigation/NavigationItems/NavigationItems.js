import React from 'react';
import { NavigationItemsULStyled } from "./NavigationItemsStyled";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <NavigationItemsULStyled>
      <NavigationItem to="/" exact>Burger Builder</NavigationItem>
      <NavigationItem to="/orders" >Orders</NavigationItem>
    </NavigationItemsULStyled>
  );
}

export default navigationItems;