import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Category from './components/Category';
import SingleProduct from './components/SingleProduct';
import OrderHistory from './components/OrderHistory';
import UserAccount from './components/UserAccount';
import Confirmation from './components/ConfirmationPage';
import Checkout from './components/Payment';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className='root'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route
            exact
            path='/login'
            render={() => (isLoggedIn ? <Redirect to='/home' /> : <Login />)}
          />
          <Route
            exact
            path='/signup'
            render={() => (isLoggedIn ? <Redirect to='/home' /> : <Signup />)}
          />
          <Route path='/users/account' component={UserAccount} />
          <Route exact path='/products' component={AllProducts} />
          <Route exact path='/products/:id' component={SingleProduct} />
          <Route
            exact
            path='/products/category/:category'
            component={Category}
          />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/confirmation' component={Confirmation} />
          <Route
            exact
            path='/checkout/login'
            render={() => (isLoggedIn ? <Redirect to='/payment' /> : <Login />)}
          />
          <Route
            exact
            path='/checkout/signup'
            render={() =>
              isLoggedIn ? <Redirect to='/payment' /> : <Signup />
            }
          />
          <Route path='/users/orders' component={OrderHistory} />
          <Route path='/payment' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
