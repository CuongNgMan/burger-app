import React, { Component } from "react";
import Layout from "../src/components/Layout/Layout";
import BurgerBuilder from "../src/containers/BGBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", margin: "10% auto auto auto" }}>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
