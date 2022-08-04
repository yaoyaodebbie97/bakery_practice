import axios from "axios";

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRDUCT_FROM_CART'
const FETCH_CART = 'FETCH_CART';


export const addProduct = (product) => ({
    type: ADD_TO_CART,
    product
});

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    id
  });

export const fetchCart = (cart) =>({
    type: FETCH_CART,
    cart
});


// thunks
export const addToCart = (product) => {
    return async (dispatch) => {
      try {
         const token = window.localStorage.getItem('token');
         if (token){
            const {data} = await axios.post('/api/cart', product, {
                headers: {
                    authorization: token
                }
            })
            dispatch(addProduct(data))

         }  else{
             const cart = JSON.parse(window.sessionStorage.getItem('cart'));
             cart.push(product);// what does cart look like?? 
             window.sessionStorage.setItem('cart', JSON.stringify(cart));
             dispatch(addProduct(product))
         }
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