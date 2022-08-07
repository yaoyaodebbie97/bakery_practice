import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import { Login_CheckOut, Signup_CheckOut, RouteForCheckOut } from './components/Checkout_AuthForm';
import Home from './components/Home';
import { me } from './store';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Category from './components/Category';
import SingleProduct from './components/SingleProduct';
import OrderHistory from './components/OrderHistory';
import Confirmation from './components/ConfirmationPage';

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
     
      <div>
        {isLoggedIn ? 
          (<Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Redirect to='/home'/> 
            <Route exact path='/products' component={AllProducts} />
            <Route exact path='/products/:id' component={SingleProduct} />
            <Route exact path='/products/category/:category' component={Category} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/confirmation' component={Confirmation} />
            <Route path='/users/orders' component={OrderHistory} />
          </Switch>
        ): (
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route exact path='/products' component={AllProducts} />
            <Route exact path='/products/:id' component={SingleProduct} />
            <Route exact path='/products/category/:category' component={Category} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/checkout/login' component={Login_CheckOut} />
            <Route exact path='/checkout/signup' component={Signup_CheckOut} />
            <Route exact path='/confirmation' component={Confirmation} />
           
           
          </Switch>
        )}
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
