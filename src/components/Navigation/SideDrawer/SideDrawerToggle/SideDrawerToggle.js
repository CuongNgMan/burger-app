import React from 'react';
import {SideDrawerToggleContainerStyled, SideDrawerToggleMenuStyled } from './SideDrawerToggleStyled';
const SideDrawerToggle = (props) => { 
  return (
    <SideDrawerToggleContainerStyled onClick={props.menuClicked}>
      <SideDrawerToggleMenuStyled />
      <SideDrawerToggleMenuStyled />
      <SideDrawerToggleMenuStyled />
    </SideDrawerToggleContainerStyled>
  );
  
};

export default SideDrawerToggle;

