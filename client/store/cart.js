import axios from "axios";


const GET_CART = 'GET_CART'
// const ADD_PRODUCT  = 'ADD_PRODUCT'
const UPDATE_CART = 'UPDATE_CART'
// const REMOVE_PRODUCT = 'REMOVE_PROUDUCT' 



export const getCart = (cart) => ({
  type: GET_CART,
  cart
});


// export const addProduct = (cart) => ({
//     type: ADD_PRODUCT,
//     cart
// });

// export const removeProduct = (cart) => ({ // make it product instead of id to make it consistent 
//     type: REMOVE_PRODUCT,
//     cart
// });

export const updateTheCart = (cart) =>({ // either adding a new item, removing a new item, updating the quantity of the item 
  type: UPDATE_CART,
  cart,
})


// thunks
export const fetchCart = () =>{
  return async (dispatch) =>{
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const {data} = await axios.get('/api/cart', {
          headers: {
              authorization: token
          }
        })
        await dispatch(getCart(data))
      }
      else {
        const cart = JSON.parse(window.localStorage.getItem('cart'))
        await dispatch(getCart(cart))
      }
    }
    catch (err) {
      console.log(err)
    }
  }

}
// export const addToCart = (id, quantity) => {
//   return async (dispatch) => {
//     try {
//        const token = window.localStorage.getItem('token'); // TOKEN 
//        if (token){ // logged in user 
//           const {data} = await axios.post('/api/cart', {  // axios call to alter the database 
//             productId: id,
//             totalQuantity: quantity
//           }, {
//               headers: {
//                   authorization: token
//               }
//           })
//           dispatch(updateTheCart(data))
//        }  else{ // for a guest or not signed in user 
//            let cart = JSON.parse(window.localStorage.getItem('cart'))
//             ? JSON.parse(window.localStorage.getItem('cart'))
//             : {products:[]}
//            cart.products.push({productId: id, totalQuantity: quantity});
//            window.localStorage.setItem('cart', JSON.stringify(cart));
//            dispatch(updateTheCart(cart))
//        }
//     } catch (err) {
//       console.log(err)
//     }
//   }
// };

export const addToCart = (product, quantity) => {
  return async (dispatch) => {
    try {
       const token = window.localStorage.getItem('token'); // TOKEN 
       if (token){ // logged in user 
          const {data} = await axios.post('/api/cart', product, {
              headers: {
                  authorization: token
              }
          })
          dispatch(updateTheCart(data))
       }  else{ // for a guest or not signed in user 
           let cart = JSON.parse(window.localStorage.getItem('cart'))
            ? JSON.parse(window.localStorage.getItem('cart'))
            : {products:[]}
           const cost = product.price * quantity; 
           cart.products.push({id: product.id, quantity: quantity, cost: cost });
           window.localStorage.setItem('cart', JSON.stringify(cart));
           dispatch(updateTheCart(cart))
       }
    } catch (err) {
      console.log(err)
    }
  }
};

export const removeFromCart = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token'); // TOKEN 
      if (token) {
        const {data} = await axios.delete(`/api/cart/${id}`, {
          headers: {
            authorization: token,
          }
        });
        dispatch(updateTheCart(data))
      } else{
        const cart = JSON.parse(window.localStorage.getItem('cart'))
        const newCart = {products: cart.products.filter(product => product.id !== id)};
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        dispatch(updateTheCart(newCart))
      }
    } catch (err){
      console.log(err);
    }
  }
};

export const updateCart = (id, newQuantity) => {
  return async (dispatch) => {
    try {
       const token = window.localStorage.getItem('token'); // TOKEN 
       if (token){ // logged in user 
          const {data} = await axios.put('/api/cart', {  // axios call to alter the database 
            productId: id,
            totalQuantity: newQuantity
          }, {
              headers: {
                  authorization: token
              }
          })
          dispatch(updateTheCart(data))
       }  else{ // for a guest or not signed in user 
           const cart = JSON.parse(window.localStorage.getItem('cart'))
           cart.products.push({productId: id, totalQuantity: newQuantity});
           window.localStorage.setItem('cart', JSON.stringify(cart));
           dispatch(updateTheCart(cart))
       }
    } catch (err) {
      console.log(err)
    }
  }
};


  const initialState = {} // object 

  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_CART:
        return action.cart;''
      case GET_CART:
        return action.cart;
      default:
        return state

    }
  }