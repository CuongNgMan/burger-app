import React from 'react';

import SideDrawerContainerStyled from './SideDrawerStyled';
import Logo from '../../Logo/Logo';
import { SideDrawerLogoWrapperStyled  } from '../../Logo/LogoStyled';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aulixilary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show={props.sideDrawerOpen} clicked={props.backdropClicked} />
      <SideDrawerContainerStyled sideDrawerOpen={props.sideDrawerOpen}>
        <SideDrawerLogoWrapperStyled>
          <Logo />
        </SideDrawerLogoWrapperStyled>
        <nav>
          <NavigationItems>

          </NavigationItems>
        </nav>
      </SideDrawerContainerStyled>
    </Aux>
  );
}

export default sideDrawer;