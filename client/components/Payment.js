import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
//import { toast } from "react-toastify";
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { FRONTENDKEY } from '../../webkeys';

//import "react-toastify/dist/ReactToastify.css";
//import "./styles.css";

//toast.configure();

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = { status: '' };

    this.handleToken = this.handleToken.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
  }

  totalAmount() {
    let cost = 0;
    const products = this.props.cart.products;
    if (products) {
      for (let i = 0; i < products.length; i++) {
        cost += products[i].orderItems.totalCost;
      }
    }
    return cost;
  }

  async handleToken(token) {
    const response = await axios.post('/api/payment', {
      token,
      product: { price: this.totalAmount(), name: 'bakery goods' },
    });
    const { status } = response.data;
    console.log('Response:', response.data);
    if (status === 'success') {
      console.log('Success! Check email for details');

      this.setState({ status: 'Success! Check email for details' });
    } else {
      console.log('Something went wrong');

      this.setState({ status: 'Something went wrong' });
    }
  }

  render() {
    console.log(this.props.cart);

    return (
      <div>
        <Route
          path='/payment'
          render={() =>
            this.state.status === 'Success! Check email for details' ? (
              <Redirect to='/confirmation' />
            ) : (
              <div className='container'>
                <div className='product'>
                  <h1>Payment</h1>
                  <h3>Total Amount: ${(this.totalAmount()/ 100).toFixed(2)}</h3>
                </div>
                <StripeCheckout
                  stripeKey={FRONTENDKEY}
                  token={this.handleToken}
                  amount={this.totalAmount() / 100}
                  name='Payment'
                  billingAddress
                  shippingAddress
                />
              </div>
            )
          }
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState)(Checkout);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
