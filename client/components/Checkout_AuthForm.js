import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'
import {addToOrder} from '../store/order'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthFormSignUp_CheckOut = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <p>Guest Checkout</p>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" />
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" />
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">
          <Link to="/confirmation" >{displayName}</Link>
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}
const AuthFormLogIn_CheckOut = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <p>Welcome back! Sign In For Fast Checkout!</p>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">
          <Link to="/confirmation" >{displayName}</Link>
          </button>
        </div>
      </form>
      
    </div>
    )
  }


/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Checkout',
    error: state.auth.error,
    productsInCart: state.cart
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Checkout',
    error: state.auth.error,
    productsInCart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt, order) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(authenticate(email, password, formName))
      dispatch(addToOrder(this.props.productsInCart))
    }
  }
}

export const Login_CheckOut = connect(mapLogin, mapDispatch)(AuthFormLogIn_CheckOut)
export const Signup_CheckOut = connect(mapSignup, mapDispatch)(AuthFormSignUp_CheckOut)