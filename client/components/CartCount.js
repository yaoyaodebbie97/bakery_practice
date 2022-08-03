import React, { Component } from "react";
// import { connect } from "react-redux";

class CartCount extends Component {
  constructor() {
    super();
  }

  render() {
    return <> 0 </>
  }
}  

export default CartCount

// import React, { Component } from "react";
// import { connect } from "react-redux";

// class CartCount extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { orderItem } = this.props;
//     let count = 0;
//     for (let i = 0; i< orderItem.length; i++){
//       count += orderItem.totalQuantity;
//     }
//     return <>{count}</>;
//   }
// }  

// const mapState = (state) => {
//   return {
//     orderItem: state.orderItem,
//   };
// };

// export default connect(mapState)(CartCount)