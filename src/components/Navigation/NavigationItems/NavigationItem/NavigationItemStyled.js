import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationItemStyled = styled.li`
  margin: 10px 0px;
  box-sizing: border-box;
  display: block;
  width: 100%;

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }
`;

const NagivationItemAnkerStyled = styled(NavLink)`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  @media (min-width: 500px) {
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;

    :hover,
    :active,
    &.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`;

const NavigationButtonStyled = styled.button`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  :hover,
  :active {
    color: #40a4c8;
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: #40A4C8;
  `};
`;

export {
  NavigationItemStyled,
  NagivationItemAnkerStyled,
  NavigationButtonStyled
};
