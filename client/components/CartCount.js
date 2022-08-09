import React, { Component } from "react";
import { connect } from "react-redux";

class CartCount extends Component {
  constructor() {
    super()
  // this.state = {count: 0}
  //this.countNum = this.countNum.bind(this)
  }

  // componentDidMount() {
  //   let countCart = 0;
  //   const products = this.props.cart.products || []
  //     for (let i = 0; i< products.length; i++){
  //       countCart += products[i].orderItems.totalQuantity;
  //     } 
  
  //   this.setState({count: countCart})
  // }

  // componentDidUpdate(prevProps) {
  //   if(prevProps.cart !== this.props.cart) {
  //     let countCart = 0;
  //     const products = this.props.cart.products || []
  //       for (let i = 0; i< products.length; i++){
  //         countCart += products[i].orderItems.totalQuantity;
  //       } 
  //     this.setState({count: countCart})
  //   }
  // }

  // countNum() {
  //   let count = 0;
  //   const products = this.props.cart.products || []
  //     for (let i = 0; i< products.length; i++){
  //       count += products[i].orderItems.totalQuantity;
  //     } 
  //   return count
  // }


  // countNum() {
  //   let count = 0;
  //   const products = this.props.cart.products || []
  //   if (!products || !products.length){
  //     return count
  //   } else {
  //     for (let i = 0; i< products.length; i++){
  //       count += products[i].orderItems.totalQuantity;
  //     } 
  //     return count
  //   }
  // }


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