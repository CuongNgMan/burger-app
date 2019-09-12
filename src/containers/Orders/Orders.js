import React from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-order";
import errorHandlerHOC from "../../hoc/errorHandlerHOC";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true
  };

  getOrders = async () => {
    try {
      const resp = await axios.get("orders.json");
      if (resp.status === 200 && resp.statusText === "OK") {
        if (resp.data) {
          return resp.data;
        }
      }
    } catch (error) {
      return error;
    }
  };

  componentDidMount() {
    const result = this.getOrders();
    result
      .then(data => {
        console.log("[Orders.js] componentDidMount");
        const orders = Object.keys(data).reduce((initValue, currValue) => {
          const res = { ...data[currValue], id: currValue };

          return [...initValue, res];
        }, []);

        console.log(orders);
        console.log("-----------------------------");
        this.setState({ orders: [...orders], loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let orders = this.state.orders.map(order => {
      const price = Number.parseFloat(order.price).toFixed(2);

      return <Order {...order.ingredients} price={price} key={order.id} />;
    });
    if (!orders) {
      orders = <Spinner show={this.state.loading} />;
    }
    return <div>{orders}</div>;
  }
}

export default errorHandlerHOC(Orders, axios);
