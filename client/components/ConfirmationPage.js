import React, { Component } from "react";
// import { connect } from "react-redux";

class Confirmation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
        <h3>Thank you for your Order!</h3>
        <h4>Confirmation #{this.props.cart.orderId}</h4>
        </div>
    )
  }
}  

const mapState = (state) => {
    return {
      cart: state.cart
    };
  };



export default connect(mapState)(Confirmation)
