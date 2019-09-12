import React from "react";
import ModalStyled from "./ModalStyled";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aulixilary";

const areEqual = (prevProps, nextProps) => {
  if (
    prevProps.show !== nextProps.show ||
    prevProps.children !== nextProps.children
  ) {
    return false;
  } else {
    return true;
  }
};

const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <ModalStyled show={props.show}>{props.children}</ModalStyled>
  </Aux>
);

export default React.memo(modal, areEqual);
