import axios from 'axios'

const GET_USERS = 'GET_USERS'

export const getUsers = (users) => ({
  type: GET_USERS,
  users
});

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data } = await axios.get(`/api/users/all`, {
          headers: {
            authorization: token
          }
        })
        console.log(data)
        await dispatch(getUsers(data))
    }
  } catch (err) {
      console.error('Uh oh, trouble finding user!');
    }
  }
}

const adminAccountReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}

export default adminAccountReducer
