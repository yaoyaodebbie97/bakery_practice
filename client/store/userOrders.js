import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'

export const getOrders = (orders) => ({
  type: GET_ORDERS,
  orders
});

export const fetchOrders = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`api/users/${id}/orders`)
    dispatch(fetchOrders(orders))
  }
}

const userOrdersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}

export default userOrdersReducer
