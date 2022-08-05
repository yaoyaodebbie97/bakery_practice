// import React from "react";
// import { connect } from "react-redux";
// import {removedProduct} from "../store/cart"


// class Cart extends React.Component {

//   render() {
//     const {productsInCart} = this.props
//     return (
//       <div>
//         <h1 className="">Your Cart</h1>
//         <div className="Container">
//         {productsInCart.map((product) => (
//        <div className="cartComponent" key={product.id}>
//          <img className="productImg" src={product.imageUrl} />
//          <p>Product Name: {product.productName}</p>
//          <p>Price: {product.price}</p>
//         <button
//           type="button"
//           onClick={() => this.props.removedProduct(product.id)
//           }>
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//             <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//          </svg>
//         </button>
//         <Link to="/">Check Out</Link>
//        </div>
//         ))
//        }

//         </div>
//       </div>
//     )
//   }
// }

// const mapState = (state) => {
//   return {
//     productsInCart: state.cart
//   };
// };

// const mapDispatch = (dispatch) => {
//     return {
//       removedProduct: (id) => dispatch(removedProduct(id))
//     };
//   };

// export default connect(mapState,mapDispatch)(Cart);



import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCart, removeFromCart, updateQuantity} from "../store/cart";

class Cart extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.fetchCart();
  }
  handleClick (id) {
    this.props.removeFromCart(id)
  }
  render() {
    return (
      <div>
        {console.log(this.props.cart)}
        {this.props.cart !== null && this.props.cart.products
        ? this.props.cart.products.map((product) => (
          <div key = {product.id}>
            {console.log(product)}
              <p> -----------------------</p>
              <p> Name: {product.productName} </p>
              <img src=  {product.imageUrl}/>
              <p> Quantity: {product.orderItems.totalQuantity} </p>
              <p> Cost: {product.orderItems.totalCost}</p>
              {/* <p> Name: {item.Product.productName}</> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick = {()=> this.handleClick(product.orderItems.productId)}>
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
              
              <button onClick = {() => this.props.updateQuantity(product.orderItems, 1)}> + </button>
          
              <button onClick = {() => this.props.updateQuantity(product.orderItems, -1)}> - </button>
          </div>
        ))
      :  <p> Loading Cart </p>}
     

      </div>
    );
  }
}



const mapState = (state) => ({
  cart: state.cart,
});

const mapDispatch = (dispatch) => ({
  fetchCart: () => dispatch(fetchCart()),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  updateQuantity: (product, change) => dispatch (updateQuantity(product, change)),
});

export default connect(mapState, mapDispatch)(Cart);



