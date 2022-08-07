import React, { Component } from "react";
import { connect } from "react-redux";

class CartCount extends Component {
  constructor() {
    super();
  }

  render() {
    let cost = 0;
    const products = this.props.cart.products;
    if (products){
      for (let i = 0; i< products.length; i++){
        cost += products[i].orderItems.totalCost;
      }
    }
    return <>${(cost / 100).toFixed(2)}</>;
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState)(CartCount)
