import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchSingleProduct} from '../store/singleProduct'
import {addToCart} from '../store/cart'

class SingleProduct extends Component {
    construtor(){
      super();
      this.props = {
        productId : this.props.match.params.id,
        quantity: 0
      }
      this.handleAdd = this.handleAdd.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() { 
        this.props.getSingleProduct(this.props.match.params.id);
      }

    handleSelect(evt){
      this.setState ({quantity: evt.target.value});
    } 

    handleAdd() {
      this.props.addToCart(this.state);
    }
    render() {
        const product = this.props.product
        return (
        <div>
            <img src = {product.imageUrl} ></img>  
            <p> Product Name: {product.productName} </p>
            <p> Description: {product.description}</p>
         
            <select name="quantity" id="quantity" onChange = {(evt)=>this.handleSelect(evt)} > 
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
                className='button'
                onClick={() => this.handleAdd()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
            </button>

        </div>
        )
  }
}

const mapState = (state) => ({
    product: state.singleProduct
  });
  
  const mapDispatch = (dispatch) => ({
    getSingleProduct: (id) => dispatch (fetchSingleProduct(id)),
    addToCart: (product) => dispatch (addToCart(product)),
  });
  
  export default connect(mapState, mapDispatch)(SingleProduct);
  