import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchCategory} from '../store/category'
import {Link} from 'react-router-dom'
import {addToCart} from '../store/cart'



class Category extends Component {

    componentDidMount() { 
        this.props.getCategory(this.props.match.params.category);
    }

    render() {
        
        return (
        <div> 
            {this.props.category.length > 0 
            ? this.props.category.map ((product) => (
            <div key = {product.id}> 
                <Link to = {`/products/${product.id}`} > 
                <img src = {product.imageUrl}></img>  
                <h1> Product Name: {product.productName}</h1> 
                <h1> Price: {product.price}</h1> 
                </Link>
                <button
                className='addToCart'
                onClick={() => this.props.addToCart(product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                     </svg>
                </button>
            </div>
            ))
            : <h1> No Product in this Category </h1>
            }
        </div>
        )
  }
}

const mapState = (state) => ({
    category: state.category
  });
  
  const mapDispatch = (dispatch) => ({
    getCategory: (category) => dispatch (fetchCategory(category)),
    addToCart: (product) => dispatch (addToCart(product)),
  });
  
  export default connect(mapState, mapDispatch)(Category);
  
