// import React, { Component } from "react";

// class CartCount extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return <> 0 </>
//   }
// }  

// export default CartCount

import React, { Component } from "react";
import { connect } from "react-redux";

class CartCount extends Component {
  constructor() {
    super();
  }

  render() {
    let count = 0;
    const products = this.props.cart.products;
    if (products){
      for (let i = 0; i< products.length; i++){
        count += products[i].orderItems.totalQuantity;
      }
    }
   
    return <>{count}</>;
  }
}  

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState)(CartCount)