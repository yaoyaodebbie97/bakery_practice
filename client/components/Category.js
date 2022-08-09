import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../store/category';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cart';

class Category extends Component {
  componentDidMount() {
    this.props.getCategory(this.props.match.params.category);
  }

  handleAdd(product, quantity) {
    this.props.addToCart(product, quantity);
    alert('item added to cart');
  }

  render() {
    return (
      <div className='row'>
        <h2>hehy</h2>
        {this.props.category.length > 0 ? (
          this.props.category.map((product) => (
            <div key={product.id} className='card product-card shadow-lg'>
              <div className='card-body .col-4'>
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    className='productImg rounded'
                  ></img>
                  <p className='card-title product-name'>
                    {product.productName}
                  </p>
                </Link>
                <p className='card-text'>
                  Price: ${(product.price / 100).toFixed(2)}
                </p>
                <button
                  className='btn btn-primary'
                  onClick={() => this.handleAdd(product, 1)}
                >
                  {' '}
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1> Still Loading </h1>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  category: state.category,
});

const mapDispatch = (dispatch) => ({
  getCategory: (category) => dispatch(fetchCategory(category)),
  addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
});

export default connect(mapState, mapDispatch)(Category);
