import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { firstName } = props;

  return (
    <div id='content'>
      <img src='' />
      <div>
        <h3>About Us</h3>
        <p>Established in 2022.</p>
      </div>
      <div>
        <Link to='/products/category/bread'>Bread </Link>
        <Link to='/products/category/cupcakes'>Cupcakes </Link>
        <Link to='/products/category/cookies'>Cookies </Link>
        <Link to='/products/category/pies'>Pies </Link>
        <Link to='/products/category/pastries'>Pastries </Link>
        <Link to='/products/category/muffins'>Muffins </Link>
        <Link to='/products/category/cakes'>Cakes </Link>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
  };
};

export default connect(mapState)(Home);
