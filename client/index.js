import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './App';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import {CheckoutForm} from "./components/Payment";

// const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');

// function clientSecret() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: '{{CLIENT_SECRET}}',
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
