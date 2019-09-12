import styled from 'styled-components';

const SideDrawerToggleContainerStyled = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
`;

const SideDrawerToggleMenuStyled = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`;

export {SideDrawerToggleContainerStyled, SideDrawerToggleMenuStyled};
