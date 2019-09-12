import React from 'react';
import BackdropStyled from './BackdropStyled';


const backdrop = (props) => (
  props.show ? <BackdropStyled onClick={props.clicked} /> : null
);

export default backdrop;