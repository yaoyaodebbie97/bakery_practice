import axios from "axios";

const GET_CART = 'GET_CART'
const UPDATE_CART = 'UPDATE_CART' 

export const getCart = (cart) => ({
  type: GET_CART,
  cart
});

export const updateTheCart = (cart) =>({ // either adding a new item, removing a item, updating the quantity of the item 
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
          }}
        )
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


export const addToCart = (product, quantity) => {
  return async (dispatch) => {
    const cost = product.price * quantity; 
    try {
       const token = window.localStorage.getItem('token'); 
       if (token){ // logged in user 
          const {data} = await axios.post('/api/cart', {
            productId: product.id,
            totalQuantity: quantity,
            totalCost: cost 
          }, 
          {  headers: {
                  authorization: token
              }
          })
          dispatch(updateTheCart(data))
       }  else{ // for a guest or not signed in user 
           let cart = JSON.parse(window.localStorage.getItem('cart'))
              ? JSON.parse(window.localStorage.getItem('cart'))
              : {products: [] } 
            cart.products.push({
            productName: product.productName,
            productId: product.id, 
            unitPrice: product.price,
            orderItems: {
              totalQuantity: parseInt(quantity), 
              totalCost: cost }
            })
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
      const token = window.localStorage.getItem('token'); 
      if (token) {
        const {data} = await axios.delete(`/api/cart/${id}`, {
          headers: {
            authorization: token,
          }
        });
        dispatch(updateTheCart(data))
      } else{
        const cart = JSON.parse(window.localStorage.getItem('cart'))
        const newCart = cart.products.filter( item => item.productId !== id);
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        dispatch(updateTheCart(newCart))
      }
    } catch (err){
      console.log(err);
    }
  }
};

export const updateQuantity = (item, quantityChange) => {
  return async (dispatch) => {
    try {
       const token = window.localStorage.getItem('token'); 
       if (token){ 
          const {data} = await axios.put('/api/cart', {  
            itemId: item.id,
            quantityChange: quantityChange,
          }, {
              headers: {
                  authorization: token
              }
          })
          dispatch(updateTheCart(data))
       }  else{ 
           const cart = JSON.parse(window.localStorage.getItem('cart'))
           for (let i = 0; i< cart.products.length; i++){
             if (cart.products[i].productId === item.productId){// in the local storage, we stored productId, not the item id 
              //  const newQuantity = cart.products[i].totalQuantity + quantityChange;
              //  cart.products[i].totalCost = cart.products[i].totalCost * newQuantity/ cart.products[i].totalQuantity // same percentage change 
              //  cart.products[i].totalQuantity  = newQuantity;
              cart.products[i].totalQuantity += quantityChange;
              cart.products[i].totalCost += quantityChange * cart.products[i].unitPrice;
             }
           }
           window.localStorage.setItem('cart', JSON.stringify(cart));
           dispatch(updateTheCart(cart))
       }
    } catch (err) {
      console.log(err)
    }
  }
};


  const initialState = {}

  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
     
      case GET_CART:
        return action.cart;

      case UPDATE_CART:
        return action.cart;
        
      default:
        return state

    }
  }

