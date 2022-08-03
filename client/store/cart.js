import axios from "axios";

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRDUCT_FROM_CART'


export const addProduct = (product) => ({
    type: ADD_TO_CART,
    product
});

export const removeProduct = (id) => ({
    type: REMOVE_PRDUCT_FROM_CART,
    id
  });

export const addToCart = (product) => {
    return async (dispatch) => {
      try {
      const {data} = await axios.post('/api/products', product)
      dispatch(addProduct(data))
      } catch (error) {
        console.error(error)
      }
    }
  };

export const removedProduct = (id) => {
  return async (dispatch) => {
    try {
    await axios.delete(`/api/products/${id}`)
    dispatch(removeProduct(id))
    } catch (error) {
      console.error(error)
    }
  }
};

  const initialState = []

  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        return action.product
      case REMOVE_PRODUCT_FROM_CART:
        return state.filter((product) => product.id !== action.id);
      default:
        return state
  
    }
  }