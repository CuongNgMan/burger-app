import styled from "styled-components";

const BUTTON_COLORS = {
  CONTINUE: "#5C9210",
  CANCEL: "#944317",
};

const ButtonStyled = styled.div`
  background-color: transparent;
  border: none;
  color: ${props => BUTTON_COLORS[props.btnColor]};
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 5px 10px 5px 10px;
  font-weight: bold;
  display: inline-flex;
  
  :first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

ButtonStyled.defaultProps = {
  btnColor: "white"
};

export default ButtonStyled;
