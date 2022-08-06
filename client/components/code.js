// import React from "react";
// import { connect } from "react-redux";
// import {Link} from 'react-router-dom'
// import CartItem from './CartItem'



// class Cart extends React.Component {
//   constructor() {
//     super()
//     this.state = {totalQuantity: 0, totalPrice: 0}
//   }

//   componentDidMount() {
//     const totalPrice = 0
//     const totalQuantity = 0
//     this.props.productsInCart.forEach(cartItem => {
//       totalQuantity += cartItem.quantity
//       totalPrice += cartItem.price
//     })
//     this.setState({totalQuantity: totalQuantity, totalPrice:totalPrice})
   
//   }

//   componentDidUpdate(prevProps) {
//     if(prevProps.productsInCart !== this.props.productsInCart) {
//       const totalPrice = 0
//       const totalQuantity = 0
//       this.props.productsInCart.forEach(cartItem => {
//       totalQuantity += cartItem.quantity
//       totalPrice += cartItem.price
//     })
//       this.setState({totalQuantity: totalQuantity, totalPrice:totalPrice})
//     }
//   }


//   render() {
//     const {productsInCart} = this.props
//     return (
//       <div>
//         <h1 className="">Your Cart</h1>
//         <div className="Container">
//         {productsInCart.map((cartItem) => (
//           <CartItem key={cartItem.id} cartItem={cartItem} />
//         ))}
//        <div>
//          <p>Total Quantity: {this.state.totalQuantity}</p>
//        </div>
//        <div>
//          <p>Total Price: {this.state.totalPrice}</p>
//        </div>
//         </div>
//         <p>Already a member?</p>
//         <button>
//           <Link to="/checkout/login" >Log In To Checkout</Link>
//         </button>
//         <br/>
//         <button>
//           <Link to="/checkout/signup" >Guest Checkout</Link>
//         </button>
//       </div>
//     )
//   }
// }

// const mapState = (state) => {
//   return {
//     productsInCart: state.cart,
//   };
// };

// export default connect(mapState)(Cart);

import React from "react";
import { connect } from "react-redux";
import {removedProduct, updateCart} from "../store/cart"
import {Link} from 'react-router-dom'



// class CartItem extends React.Component {
//   constructor() {
//     super()
//     this.state = {quantity: 0}
//     this.changeHandler = this.changeHandler.bind(this)
//   }

//   componentDidMount() {
//     this.setState({quantity: this.props.cartItem.quantity})
//   }

//   componentDidUpdate(prevProps) {
//     if(prevProps.cartItem !== this.props.cartItem) {
//       this.setState({quantity: this.props.cartItem.quantity})
//     }
//   }

//   changeHandler(evt) {
//     this.setState({[evt.target.name]: evt.target.value})
//     this.props.updateCart(...this.props.cartItem, ...this.state)
//   }

//   render() {
//     const {cartItem} = this.props
//     return (
//       <div>  
//        <div className="cartComponent" key={cartItem.id}>
//          <img className="productImg" src={cartItem.imageUrl} />
//          <p>Product Name: {cartItem.productName}</p>
//          <p>Price: {cartItem.price * cartItem.quantity}</p>
//          <div>
//            <label htmlFor='Qty'>Qty</label>
//            <input min={0} type="number" id="qty" name="qty" value={this.state.quantity} onChange={this.changehandler}/>
//          </div>
//         <button
//           type="button"
//           onClick={() => this.props.removedProduct(cartItem.id)
//           }>
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//             <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//          </svg>
//         </button>
//        </div>  
//       </div>
//     )
//   }
// }



// const mapDispatch = (dispatch) => {
//     return {
//       removedProduct: (id) => dispatch(removedProduct(id)),
//       updateCart: (cartItem) => dispatch(updateCart(cartItem)),

//     };
//   };

// export default connect(null,mapDispatch)(CartItem);

// import axios from "axios";

// const ADD_TO_CART = 'ADD_TO_CART'
// const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRDUCT_FROM_CART'
// const EDIT_CART = 'EDIT_CART'
// const GET_CART = "GET_CART"
// const TOKEN = 'token'



// export const addProduct = (product) => ({
//     type: ADD_TO_CART,
//     product
// });

// export const removeProduct = (id) => ({
//     type: REMOVE_PRODUCT_FROM_CART,
//     id
//   });

// export const editCart = (product) => ({
//     type: EDIT_CART,
//     product
//   });

// export const getCart = (product) => ({
//     type: GET_CART,
//     product
//   });

// export const gotCart = () => {
//     return async (dispatch) => {
//       try {
//       const {data} = await axios.get('/api/cart')
//       dispatch(getCart(data))
//       } catch (error) {
//         console.error(error)
//       }
//     }
// };



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

// const cart = window.localStorage.getItem("cart")

// export const addToCart = (product) => async dispatch => {
//   const token = window.localStorage.getItem(TOKEN)
//   if (token) {
//     const {data} = await axios.post('/api/cart', product)
//     return dispatch(addProduct(data))
//   } else {
//     if(!cart) {
//       window.localStorage.setItem("cart", {products:[]})
//     }
//     if(cart.products.length === 0) {
//      cart.products.push(product)
//     } else {
//     if(!cart.products.includes(product)) {
//     cart.products.push(product)
//     }
//   }
//   window.localStorage.setItem("cart", JSON.stringify(cart))
//   return dispatch(addProduct(cart))

// }
// }

// export const updateCart = (product) => {
//   return async (dispatch) => {
//     try {
//     const {data} = await axios.put(`/api/cart/${product.id}`, product)
//     dispatch(editCart(data))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// };



// export const removedProduct = (id) => {
//   return async (dispatch) => {
//     try {
//     await axios.delete(`/api/cart/${id}`)
//     dispatch(removeProduct(id))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// };


//   const initialState = []

//   export default function cartReducer(state = initialState, action) {
//     switch (action.type) {
//       case ADD_TO_CART:
//         return [...state, action.product]
//       case GET_CART:
//         return [...state, action.product]
//       case REMOVE_PRODUCT_FROM_CART:
//         return state.filter((product) => product.id !== action.id);
//       case EDIT_CART:
//           return state.map(product => product.id === action.product.id? action.product : product)
     
         
//       default:
//         return state
  
//     }
//   }