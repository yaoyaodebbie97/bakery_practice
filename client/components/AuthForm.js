import React from 'react';
import { connect } from 'react-redux';
import { authenticateLogin, authenticateSignUp } from '../store';

/**
 * COMPONENT
 */
const AuthFormSignUp = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className='py-3 my-4'>
      <h2 className='my-2 align-middle text-center'>Become a member today!</h2>
      <h3 className='my-2 align-middle text-center'>Sign Up</h3>
      <form
        className='my-3 justify-content-center text-center'
        onSubmit={handleSubmit}
        name={name}
      >
        <div className='form-group align-middle'>
          <label htmlFor='firstName'>First Name</label>
          <input name='firstName' type='text' />

          <label htmlFor='lastName'>Last Name</label>
          <input name='lastName' type='text' />

          <label htmlFor='address'>Address</label>
          <input name='address' type='text' />
        </div>
        <div>
          <div className='form-group align-middle'>
            <label htmlFor='email'>Email</label>
            <input name='email' type='text' />
          </div>

          <div className='form-group align-middle'>
            <label className='mx-3' htmlFor='password'>
              Password
            </label>
            <input name='password' type='password' />
          </div>
          <div className='form-group'>
            <button className='mt-4 btn btn-primary align-middle' type='submit'>
              {displayName}
            </button>
          </div>
        </div>

        {error && error.response && (
          <div>Please fill in correct username and password!</div>
        )}
      </form>
    </div>
  );
};
const AuthFormLogIn = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className='py-3 my-5'>
      <h2 className='align-middle text-center'>Already a member? Log In!</h2>
      <form
        className='my-4 justify-content-center form-inline py-5'
        onSubmit={handleSubmit}
        name={name}
      >
        <div className='form-group'>
          <label className='mx-2' htmlFor='email'>
            Email
          </label>
          <input name='email' type='text' />
          <label className='mx-2' htmlFor='password'>
            Password
          </label>
          <input name='password' type='password' />
          <div>
            <button className='btn btn-primary' type='submit'>
              {displayName}
            </button>
          </div>
          {error && error.response && (
            <div>Please fill out all fields before submitting!</div>
          )}
        </div>
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatchforLogIn = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticateLogin(email, password, formName));
    },
  };
};

const mapDispatchforSignUp = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const address = evt.target.address.value;
      dispatch(
        authenticateSignUp(
          email,
          password,
          formName,
          firstName,
          lastName,
          address
        )
      );
    },
  };
};

export const Login = connect(mapLogin, mapDispatchforLogIn)(AuthFormLogIn);
export const Signup = connect(mapSignup, mapDispatchforSignUp)(AuthFormSignUp);
