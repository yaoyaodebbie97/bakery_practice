import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchSingleProduct} from '../store/singleProduct'
import {addToCart} from '../store/cart'

class SingleProduct extends Component {
    constructor(){
      super()
      this.state = {
        totalQuantity: 1
      }
      this.handleAdd = this.handleAdd.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.props.getSingleProduct(this.props.match.params.id);
      }

    handleSelect(evt){
      this.setState ({totalQuantity: evt.target.value});
    }

    handleAdd() {
      this.props.addToCart(this.props.product, this.state.totalQuantity);
      alert('item added to cart')
    }

    render() {
        const product = this.props.product
        return (
        <div className={"singleProductContainer"}>
            {isNaN(product.price/100)
            ?  <>
                <h1 className='align-items-center'> Still Loading </h1>
                <img
                  src={
                    'https://i.pinimg.com/originals/da/08/2c/da082c176aea0f8e5ab294ff7a0f90d1.gif'
                  }
                />
              </>
            :
            <div> 
              <img className={"responsive"} src = {product.imageUrl} ></img>
              <div className={"singleProduct"}>
                <div className={"singleHeader"} >
              <p> {product.productName} </p>
              </div>
              <p> {product.description}</p>
              <p>${(product.price / 100).toFixed(2)}</p>

              <select className={'quantity'} name="quantity" id="quantity" onChange = {this.handleSelect} >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
              </select>
              <button
                  className={'addToCartButton'}
                  onClick={() => this.handleAdd()}>
                      Add to Cart
              </button>
              </div>
            </div>
    }
        </div>
        )
  }
}

const mapState = (state) => ({
    product: state.singleProduct
  });

  const mapDispatch = (dispatch) => ({
    getSingleProduct: (id) => dispatch (fetchSingleProduct(id)),
    addToCart: (product, quantity) => dispatch (addToCart(product, quantity)),
  });

  export default connect(mapState, mapDispatch)(SingleProduct);
