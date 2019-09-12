import React from 'react';

import ToolBar from '../Navigation/ToolBar/ToolBar';
import Aux from '../../hoc/Aulixilary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer : false,
  };

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    })
  };

  closingSideDrawerHandler = () => {
    this.setState({ showSideDrawer : false });
  };
  
  render() {
    return (
      <Aux>
        <ToolBar menuClicked={this.toggleSideDrawerHandler} />
        <SideDrawer sideDrawerOpen={this.state.showSideDrawer} backdropClicked={this.closingSideDrawerHandler}></SideDrawer>
        <main>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}


export default Layout;