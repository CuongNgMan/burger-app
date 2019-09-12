import React, { Component } from 'react';
import {BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese, Salad, Bacon} from './BurgerIngredientsStyled';
import PropTypes from 'prop-types';

class Ingredients extends Component {
  render() {
    let ingredient = null;
    
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <BreadBottom></BreadBottom>
        break;
      case ('bread-top'):
        ingredient = 
          <BreadTop>
            <Seeds1></Seeds1>
            <Seeds2></Seeds2>
          </BreadTop>
        break;
      case ('meat'):
        ingredient = <Meat></Meat>
        break;
      case ('cheese'):
        ingredient = <Cheese></Cheese>
        break;      
      case ('salad'):
        ingredient = <Salad></Salad>
        break;
      case ('bacon'):
        ingredient = <Bacon></Bacon>
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

Ingredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredients;