import styled from 'styled-components';
//#region BuildControl
const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;
//#endregion

//#region BuildControlLabel
const BuildControlLabel = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 120px;
`;
//#endregion

//#region BuildControlButton
const BuildControlButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #AA6817;
  cursor: pointer;
  outline: none;

  :disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
  }

  :hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;
//#endregion

//#region BuildControlLess
const BuildControlLess = styled(BuildControlButton)`
  background-color: #D39952;
  color: white;

  :hover {
    background-color: #DAA972;
    color: white;
  }

  :active {
    background-color: #DAA972;
    color: white;
  }  
`;
//#endregion

//#region BuildControlMore
const BuildControlMore = styled(BuildControlButton)`
  background-color: #8F5E1E;
  color: white;
  
  :hover {
    background-color: #99703F;
    color: white;
  }
  
  :active {
    background-color: #99703F;
    color: white;
  }
`;
//#endregion

export {BuildControl, BuildControlLabel, BuildControlMore, BuildControlLess};