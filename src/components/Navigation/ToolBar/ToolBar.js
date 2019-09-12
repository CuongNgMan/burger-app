import React from 'react';

import Logo from '../../Logo/Logo';
import { ToolBarHeaderStyled, ToolBarItemStyled, ToolBarNavStyled } from './ToolBarStyled';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';
const toolbar= (props) => (
  <ToolBarHeaderStyled>
    <ToolBarItemStyled>
      {/* <NavigationItemStyled>
        <NavigationButtonStyled onClick={props.menuClicked}>
          MENU
        </NavigationButtonStyled>
      </NavigationItemStyled> */}
      <SideDrawerToggle menuClicked={props.menuClicked} />
    </ToolBarItemStyled>
    <ToolBarItemStyled>
      <Logo></Logo>
    </ToolBarItemStyled>
    
    <ToolBarNavStyled>
      <NavigationItems>
        
      </NavigationItems>
    </ToolBarNavStyled>
  </ToolBarHeaderStyled>
);

export default toolbar;