import React from "react";
import Button from "../../../components/UI/Button/Button";
import ContactDataStyled from "./ContactDataStyled";
import axios from "../../../axios-order";
import { connect } from "react-redux";

const mapState = state => {
  return state;
};

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = e => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Bunker Kurt",
        address: {
          street: "Street 1",
          district: "10",
          zipCode: "700000",
          country: "Vietnam"
        },
        email: "test@maildomain.com"
      },
      deliveryType: "normal"
    };
    axios
      .post("orders.json", order)
      .then(response => {
        // console.log(response);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        // console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <ContactDataStyled>
        <h2>Enter your contact data</h2>
        <form action="POST">
          <div>
            <div>
              <span>Name: </span>
              <input type="text" name="name" placeholder="Your name" />
            </div>

            <div>
              <span>Email: </span>
              <input type="email" name="email" placeholder="Your email" />
            </div>

            <div>
              <span>Street: </span>
              <input type="text" name="street" placeholder="Street" />
            </div>

            <div>
              <span>Postal: </span>
              <input type="text" name="postal" placeholder="Postal" />
            </div>
          </div>

          <div>
            <Button
              btnColor="CONTINUE"
              style={{ display: "none" }}
              clicked={this.orderHandler}
            >
              ORDER
            </Button>
          </div>
        </form>
      </ContactDataStyled>
    );
  }
}

export default connect(
  mapState,
  null
)(ContactData);
