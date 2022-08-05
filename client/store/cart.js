import axios from "axios";

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRDUCT_FROM_CART'
const EDIT_CART = 'EDIT_CART'
const GET_CART = "GET_CART"
const TOKEN = 'token'



export const addProduct = (product) => ({
    type: ADD_TO_CART,
    product
});

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    id
  });

export const editCart = (product) => ({
    type: EDIT_CART,
    product
  });

export const getCart = (product) => ({
    type: GET_CART,
    product
  });

export const gotCart = () => {
    return async (dispatch) => {
      try {
      const {data} = await axios.get('/api/cart')
      dispatch(getCart(data))
      } catch (error) {
        console.error(error)
      }
    }
};



// export const addToCart = (product) => {
//     return async (dispatch) => {
//       try {
//       const {data} = await axios.post('/api/cart', product)
//       dispatch(addProduct(data))
//       } catch (error) {
//         console.error(error)
//       }
//     }
// };

const cart = window.localStorage.getItem("cart")

export const addToCart = (product) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const {data} = await axios.post('/api/cart', product)
    return dispatch(addProduct(data))
  } else {
    if(!cart) {
      window.localStorage.setItem("cart", {products:[]})
    }
    if(cart.products.length === 0) {
     cart.products.push(product)
    } else {
    if(!cart.products.includes(product)) {
    cart.products.push(product)
    }
  }
  window.localStorage.setItem("cart", JSON.stringify(cart))
  return dispatch(addProduct(cart))

}
}

export const updateCart = (product) => {
  return async (dispatch) => {
    try {
    const {data} = await axios.put(`/api/cart/${product.id}`, product)
    dispatch(editCart(data))
    } catch (error) {
      console.error(error)
    }
  }
};



export const removedProduct = (id) => {
  return async (dispatch) => {
    try {
    await axios.delete(`/api/cart/${id}`)
    dispatch(removeProduct(id))
    } catch (error) {
      console.error(error)
    }
  }
};


  const initialState = []

  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        return [...state, action.product]
      case GET_CART:
        return [...state, action.product]
      case REMOVE_PRODUCT_FROM_CART:
        return state.filter((product) => product.id !== action.id);
      case EDIT_CART:
          return state.map(product => product.id === action.product.id? action.product : product)
     
         
      default:
        return state
  
    }
  }