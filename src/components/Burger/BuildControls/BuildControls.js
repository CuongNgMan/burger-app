import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import {StyledBuildControls, TotalPriceStyled, OrderButton} from './BuildControlsStyled';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <React.Fragment>
    <TotalPriceStyled>Total Price: {props.price.toFixed(2)}$</TotalPriceStyled>
    <StyledBuildControls>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label} 
          added={() => props.added(ctrl.type)}
          removed={() => props.removed(ctrl.type)}  
          disabled={props.disabled[ctrl.type]}  />
      ))}
    </StyledBuildControls>
    <OrderButton
      disabled={!props.purchaseable}
      onClick={props.purchasing}>
      ORDER NOW
    </OrderButton>
  </React.Fragment>
);

export default buildControls;