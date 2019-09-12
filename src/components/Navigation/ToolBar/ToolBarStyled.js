import styled from 'styled-components';

//#region ToolBarHeaderStyled
const ToolBarHeaderStyled = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703B09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;  
//#endregion

const ToolBarItemStyled = styled.header`
  height: inherit;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToolBarNavStyled = styled.nav`
  height: inherit;
  font-weight: bold;
  display: none;
  justify-content: center;
  align-items: center;

  @media (min-width: 499px) {
    display: flex;
  }
`;


export {ToolBarHeaderStyled, ToolBarItemStyled, ToolBarNavStyled};
