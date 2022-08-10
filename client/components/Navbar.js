import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import CartCount from './CartCount';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <>
    <nav role='navigation' className='navbar sticky-top'>
      <Link to='/home' className='navbar-brand my-0 py-0 col-6 navbar-img'>
        <img
          id='logo'
          src='https://i.postimg.cc/3xB0vrHK/Taurus-Bakery-logos-black.png'
          className='navbar-brand'
        />
      </Link>
      {isLoggedIn ? (
        <div className='navbar-div navbar-nav menu-toggle ml-auto'>
          {/* The navbar will show these links after you log in */}
          <Link to='/home'>Home</Link>
          <Link to='/products'>All Products</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
          <Link to='/users/account'>My Account</Link>
          <Link to='/cart' className='cartLink'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-cart3'
              viewBox='0 0 16 16'>
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
            <CartCount />
          </Link>
        </div>
      ) : (
        <div className='navbar-div menu-toggle ml-auto'>
          {/* The navbar will show these links before you log in */}
          <Link to='/home'>Home</Link>
          <Link to='/products'>All Products</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>

          <Link to='/cart' className='cartLink'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-cart3'
              viewBox='0 0 16 16'>
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
            <CartCount />
          </Link>
        </div>
      )}
    </nav>
  </>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
