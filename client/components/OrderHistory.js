import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { fetchOrders } from '../store/userOrders'

const divStyle = {
  margin: '10px',
  padding: '10px',
  // display: 'flex',
  left: '1em'
}

export class OrderHistory extends React.Component {

  async componentDidMount() {
    await this.props.getOrders();
  }

  render() {
    const orders = this.props.orders
    return (
      <div className='my-4'>
        <h3>Order History</h3>
        <div className="row">
          {orders && orders.length !== 0 ? (
            <div className='card col-8'style={divStyle}  >
              {orders.map((order => (
                <div className='card' order={order} key={order.id} >
                  <h4 className='card-header order-header'>Order No. {order.id}</h4>
                  {order.products.map(item => {
                    return (
                      <div className=' list-group-item my-1 card-body' key={item.id}>
                      <img className="responsive rounded float-left" src={item.imageUrl} />
                      <p className='card-title order product-name'>{item.productName}</p>
                      <p className='card-text order'>Price: ${(item.price / 100).toFixed(2)}</p>
                      </div>
                    )
                  })}
                </div>
              )))}
            </div>
          ) : (
            <div>No recent orders found</div>
          )}
      </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  orders: state.orders,
})

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(fetchOrders()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
