import React from 'react'
import {connect} from 'react-redux'
import {authenticateSignUpCo} from '../store/authForm'
import {authenticateLoginCo} from '../store/authForm'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom';
// import Confirmation from './ConfirmationPage';
import { me } from '../store/authForm';
// import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Confirmation from './ConfirmationPage';


/**
 * COMPONENT
 */
const AuthFormSignUp_CheckOut = props => {
  props.loadInitialData()

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
          <label htmlFor="address">
            <small>Address</small>
          </label>
          <input name="address" type="text" />
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
  props.loadInitialData()
  const {name, displayName, handleSubmit, error} = props
  console.log('props', props)
 
  // if(props.isLoggedIn) {
  //   return <Redirect to="/confirmation"/>
  // } else {
  return (
    <div>
      (<form onSubmit={handleSubmit} name={name}>
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
          <button type="submit">{displayName}
          </button>
        </div>
        {(error && error.response && <div> {error.response.data} </div>)}
        
      </form> )
      
    </div>)
    
  }

  const checkoutRoute = () => {
    return (
      <div>{props.isLoggedIn ? <Redirect to="/confirmation"/> : "unauthorised"}</div>
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
    isLoggedIn: !!state.authForm.id,
    error: state.auth.error,
    
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Checkout',
    error: state.auth.error,
  }
}


const mapDispatchforLogIn = dispatch => {
    return {
      handleSubmit(evt) {
        evt.preventDefault()
        const formName = evt.target.name
        const email = evt.target.email.value
        const password = evt.target.password.value
        dispatch(authenticateLoginCo(email, password, formName))
      },
      loadInitialData() {
        dispatch(me());
      }
  }
}
  
  const mapDispatchforSignUp = dispatch => {
    return {
      handleSubmit(evt) {
        evt.preventDefault()
        const formName = evt.target.name
        const email = evt.target.email.value
        const password = evt.target.password.value
        const firstName = evt.target.firstName.value
        const lastName =evt.target.lastName.value
        const address = evt.target.address.value
        dispatch(authenticateSignUpCo(email, password, formName, firstName, lastName, address))
      },
      loadInitialData() {
        dispatch(me());
      }
      }
  }
  

export const Login_CheckOut = connect(mapLogin, mapDispatchforLogIn)(AuthFormLogIn_CheckOut)
export const Signup_CheckOut = connect(mapSignup, mapDispatchforSignUp)(AuthFormSignUp_CheckOut)
export const RouteForCheckOut = connect(mapLogin, mapDispatchforLogIn)(checkoutRoute)