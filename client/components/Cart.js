import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart, removeFromCart, updateQuantity } from '../store/cart';
import CartCount from './CartCount';
import CartPrice from './CartPrice';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchCart();
  }
  handleClick(id) {
    this.props.removeFromCart(id);
  }

  render() {
    return (
      <div className='mt-3 container-fluid'>
        {this.props.cart !== null && this.props.cart.products ? (
          this.props.cart.products.length === 0 || this.props.cart === null ? (
            <>
              <div className='justify-content-center'>
                <h3 className='my-5 h-100 d-flex justify-content-center align-items-center'>
                  Your Cart is Empty{' '}
                </h3>
                <p className='my-5 h-100 d-flex justify-content-center align-items-center'>
                  Add some goodies to get started!
                </p>
                <img
                  className='rounded mx-auto d-block img-thumbnail cart-img'
                  src='https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
              </div>
            </>
          ) : (
            this.props.cart.products.map((product) => (
              <div className='card container col-4' key={product.id}>
                <div className='row my-1 width:18rem'>
                  <div className='card-horizontal border-secondary'>
                    <div className='img-square-wrapper p-0'>
                      <img
                        className='img-thumbnail productImg-sm mb-0'
                        src={product.imageUrl}
                      />
                    </div>
                    <div className='card-body m-0'>
                      <h4 className='card-title cupcake-font my-0'>
                        {product.productName}{' '}
                      </h4>
                      <p className='card-body my-0 px-3'>
                        {' '}
                        Quantity: {product.orderItems.totalQuantity}{' '}
                      </p>
                      <div className='px-4'>
                        <button
                          className='mx-1'
                          onClick={() =>
                            this.props.updateQuantity(product.orderItems, -1)
                          }>
                          {' '}
                          -{' '}
                        </button>
                        <button
                          onClick={() =>
                            this.props.updateQuantity(product.orderItems, 1)
                          }>
                          {' '}
                          +{' '}
                        </button>

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          className='bi bi-trash'
                          viewBox='0 0 16 16'
                          onClick={() =>
                            this.handleClick(product.orderItems.productId)
                          }>
                          <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                          <path
                            fillRule='evenodd'
                            d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                          />
                        </svg>
                      </div>
                      <p className='card-body'>
                        {' '}
                        Price: ${(product.price / 100).toFixed(2)}
                      </p>
                      <p className='card-footer bg-white'>
                        {' '}
                        Item Subtotal: $
                        {(product.orderItems.totalCost / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        ) : (
          <div>
            <h2 className='align-items-center align-middle'> Loading Cart </h2>
            <img
              className='align-middle productImg'
              src='https://i.gifer.com/embedded/download/9DPW.gif'
            />
          </div>
        )}
        _________________________________________________
        <div>
          {this.props.cart !== null &&
          this.props.cart.products &&
          this.props.cart.products.length > 0 ? (
            <div className='mx-3'>
              <div>
                {' '}
                Total Number of Items in Cart: <CartCount />
              </div>
              <div>
                {' '}
                Total Cost of Items in Cart: <CartPrice />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {this.props.isLoggedIn ? (
          <div className='my-3'>
            <Link to='/checkout/login' className='btn btn-primary mx-3 btn-sm'>
              Checkout
            </Link>
          </div>
        ) : (
          <div className='mt-4'>
            <div className='py-2 my-2'>
              <Link
                to='/checkout/login'
                className='btn btn-secondary mx-3 btn-sm'
                role='button'>
                Log In To Checkout
              </Link>
            </div>
            <div className='py-2 my-2'>
              <Link
                to='/checkout/signup'
                className='btn btn-secondary mx-3 btn-sm'
                role='button'>
                Sign Up To Checkout
              </Link>
            </div>
            <div className='py-2 my-2'>
              <Link
                to='/payment'
                className='btn btn-secondary mx-3 btn-sm'
                role='button'>
                Proceed To Checkout As A Guest
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  isLoggedIn: !!state.auth.id,
});

const mapDispatch = (dispatch) => ({
  fetchCart: () => dispatch(fetchCart()),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  updateQuantity: (product, change) =>
    dispatch(updateQuantity(product, change)),
});

export default connect(mapState, mapDispatch)(Cart);
