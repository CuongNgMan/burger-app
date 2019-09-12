import React from 'react';
import {BuildControl, BuildControlLabel, BuildControlMore, BuildControlLess} from './BuildControlStyled';

const buildControl = (props) => (
  <BuildControl>
    <BuildControlLabel>{props.label}</BuildControlLabel>
    <BuildControlMore onClick={props.added}>More</BuildControlMore>
    <BuildControlLess 
      onClick={props.removed} disabled={props.disabled}>Less</BuildControlLess>
  </BuildControl>
);

export default buildControl;