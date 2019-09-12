import React from 'react';
import ButtonStyled from './ButtonStyled';

const button = (props) => {
  return (
    <ButtonStyled 
      onClick={props.clicked} 
      btnColor={props.btnColor}>
        {props.children}
    </ButtonStyled>
  );
}

export default button;