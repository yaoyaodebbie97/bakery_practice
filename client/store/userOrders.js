import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'

export const getOrders = (orders) => ({
  type: GET_ORDERS,
  orders
});

// export const fetchOrders = (id) => {
//   return async (dispatch) => {
//     try {
//         const { data } = await axios.get(`/api/users/${id}/orders`)
//         await dispatch(getOrders(data))
//     } catch (err) {
//       console.error('Uh oh, trouble finding User order history!');
//     }
//   }
// }

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data } = await axios.get(`/api/users/orders`, {
          headers: {
            authorization: token
          }
        })
        await dispatch(getOrders(data))
      } else {
        console.log("no token")
      }
    } catch (err) {
      console.error('Uh oh, trouble finding User order history!');
    }
  }
}

const userOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}

export default userOrdersReducer
