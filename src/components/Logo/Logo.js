import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import { LogoWrapperStyled, LogoImageStyled } from './LogoStyled';

const logo = (props) => {
  return (
    <LogoWrapperStyled>
      <LogoImageStyled src={burgerLogo} alt="Burger icon"  />
    </LogoWrapperStyled>
  );
}

export default logo;