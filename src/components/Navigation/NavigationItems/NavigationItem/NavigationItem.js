import React from "react";
import {
  NavigationItemStyled,
  NagivationItemAnkerStyled
} from "./NavigationItemStyled";

const navigationItem = props => {
  return (
    <NavigationItemStyled>
      {/* <NagivationItemAnkerStyled 
        href={props.refLink}
        isActive={props.isActive} 
        onClick={props.menuClick}> 
          {props.children}
      </NagivationItemAnkerStyled> */}
      <NagivationItemAnkerStyled to={props.to} exact={props.exact}>
        {props.children}
      </NagivationItemAnkerStyled>
    </NavigationItemStyled>
  );
};

export default navigationItem;

