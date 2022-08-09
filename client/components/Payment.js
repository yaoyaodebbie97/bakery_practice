import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import {Route, Redirect} from 'react-router-dom';
import {emptyCart} from '../store/cart'

class Checkout extends React.Component {
    constructor() {
      super()
    this.state = {status: ""}
    
    this.handleToken = this.handleToken.bind(this)
    this.totalAmount = this.totalAmount.bind(this)
    }


  totalAmount() {
    let cost = 0;
    const products = this.props.cart.products;
    if (products){
      for (let i = 0; i< products.length; i++){
        cost += products[i].orderItems.totalCost;
      }
    }
    return cost;
  }
 
  async handleToken(token) {
    const response = await axios.post('/api/payment',
      {token, product: {price:this.totalAmount(), name:"bakery goods"}}
    )
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      console.log("Success! Check email for details");

      this.setState({status: "Success! Check email for details"})
  
    } else {
      console.log("Something went wrong");
    
      this.setState({status: "Something went wrong"})

    }
  }

  success () {
    this.props.emptyCart(this.props.cart) 
    return  <Route path='/payment' render={() => <Redirect to="/confirmation"/>} />

  }

  
  render() {
    console.log('cart', this.props.cart)

  return (
    <div>
  
    {this.state.status === "Success! Check email for details"? this.success() : 
    (<div className="container">
      <div className="product">
        <h1>Payment</h1>
        <h3>Total Amount: ${this.totalAmount()}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51LUR1EARbh2upnk3SvfbZZxz8LsK9G1zI8CjR4mcHAzDZUVq6x0Vj19ic6x5g1Lhq4JN8tKBguKKcLEtso1ITR8q00gGR8VTmx"
        token={this.handleToken}
        amount={this.totalAmount()}
        name="Payment"
        billingAddress
        shippingAddress
      />
    </div>)
    } 
    </div>
  
  )
  }
}

const mapState = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatch = (dispatch) => ({
  emptyCart: (cart) => dispatch(emptyCart(cart)),
});


export default connect(mapState, mapDispatch)(Checkout)
