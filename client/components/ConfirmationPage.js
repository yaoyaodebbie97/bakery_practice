import React, { Component } from "react";
import { connect } from "react-redux";
import {emptyCart} from '../store/cart'


class Confirmation extends Component {  
  

  render() {
    return (
        <div>
        <h3>Thank you for your order!</h3>
        <h4>Confirmation #{this.props.cart.id}</h4> 
        </div>
    )
  }
}  

const mapState = (state) => {
    return {
      cart: state.cart
    }
};


export default connect(mapState)(Confirmation)
