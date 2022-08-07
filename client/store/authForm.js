import axios from 'axios'
import history from '../history'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_AUTHFORM = 'SET_AUTHFORM'

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({type: SET_AUTHFORM, auth})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export const authenticateLoginCo = (email, password, method) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, {email, password})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}
export const authenticateSignUpCo = (email, password, method, firstName, lastName, address) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, {email, password, firstName, lastName, address})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/login')
  return {
    type: SET_AUTHFORM,
    auth: {}
  }
}

/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case SET_AUTHFORM:
      return action.auth
    default:
      return state
  }
}