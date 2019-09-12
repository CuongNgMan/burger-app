import styled from 'styled-components';


const NavigationItemsULStyled = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;


export { NavigationItemsULStyled };