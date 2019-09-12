import React from 'react';
import SpinnerStyled from './SpinnerStyled';

const spinner = (props) => {
  return (
    <SpinnerStyled show={props.hideSpinner}/>
  );
}

export default spinner;