import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { fetchOrders } from '../store/userOrders'

// const cardStyle = {
//   background: '#F4F4E1',
//   border: '1px solid grey',
//   height: '500px',
//   width: '20rem',
//   margin: '5px',
//   textIndent: '50px',
//   // flexFlow: 'column wrap',
// }

// const sectionStyle = {
//   background: '#84C3C8',
//   boxSizing: 'border-box',
//   position: 'relative',
//   width: '100%',
//   overflow: 'hidden'
// }

// const divStyle = {
//   margin: '10px',
//   padding: '10px',
//   display: 'flex',
//   // flexDirection: 'column',

//   // position: 'absolute',
//   left: '200px'
// }

export class OrderHistory extends React.Component {

  async componentDidMount() {
    await this.props.getOrders();
  }

  render() {
    const orders = this.props.orders
    return (
      <div >
        <h3>Order History</h3>
          {orders && orders.length !== 0 ? (
            <div >
              {orders.map((order => (
                <div className="card" order={order} key={order.id} >
                  <h4>Order No. {order.id}</h4>
                  {order.products.map(item => {
                    return (
                      <div key={item.id}>
                      <img className="productImg" src={item.imageUrl} />
                      {/* <Link to={`/products/${item.id}`}> */}
                      <p>{item.productName}</p>
                      {/* </Link> */}
                      <p>Price: ${(item.price / 100).toFixed(2)}</p>
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
