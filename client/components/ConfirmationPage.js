import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emptyCart } from '../store/cart';

class Confirmation extends Component {
  render() {
    return (
      <div className='py-3 my-3 h-100 d-flex justify-content-center align-items-center'>
        <div className='py-3 my-5'>
          <h3 className='py-5 text-center'>Thank you for your purchase!</h3>
          <h4 className='py-3 align-items-center text-center'>
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

export default connect(mapState)(Confirmation);
