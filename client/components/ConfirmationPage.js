import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emptyCart } from '../store/cart';

class Confirmation extends Component {
  componentDidMount() {
    this.props.emptyCart(this.props.cart);
  }

  render() {
    // console.log('confirmation page, this is my cart', this.props.cart)

    return (
      <div className='h-100 d-flex justify-content-center align-items-center'>
        <div className='py-5 my-5'>
          <h3 className='text-center'>Thank you for your order!</h3>
          <h4 className='align-items-center text-center'>
            Confirmation #{this.props.cart.id}
          </h4>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => ({
  emptyCart: (cart) => dispatch(emptyCart(cart)),
});

export default connect(mapState, mapDispatch)(Confirmation);
