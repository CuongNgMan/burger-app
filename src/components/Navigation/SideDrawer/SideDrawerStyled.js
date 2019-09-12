import styled from 'styled-components';


const sideDrawerContainerStyled = styled.div`
  position: fixed;
  width: 200px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  transform: ${ props => props.sideDrawerOpen ? 'translateX(0)' : 'translateX(-100%)'};

  /* ${({ isOpen }) => isOpen && `
    transform: translateX(0);
  `};

  ${({ isClosed }) => isClosed && `
    transform: translateX(-100%);
  `};
   */

  @media (min-width: 500px) {
    display: none;
  }
  
`;



export default sideDrawerContainerStyled;