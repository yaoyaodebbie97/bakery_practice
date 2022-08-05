import React from "react";
import { connect } from "react-redux";
// import {me} from '../store/auth'
import { fetchOrders } from '../store/userOrders'

export class OrderHistory extends React.Component {

  componentDidMount() {
    // await this.props.getUser()
  this.props.getOrders();
  }

  render() {
    console.log(this.props)
    // const orders = this.props.orders
    // console.log(this.props.orders)
        return (
          <h1>hello</h1>
      //     <div className="Container">
      //     {user.map((order => (
      //         <div key={user.id}>
      //         <img className="productImg"  />
      //  <p>Product Name: </p>
      //  <p>Price: </p>

      //  </div>
      //       ) ))}
      //     </div>
        )
    }
  }


const mapStateToProps = state => ({
  // user: state.user,
 orders: state.orders,
})

const mapDispatchToProps = dispatch => ({
  // getUser: () => dispatch(me()),
  getOrders: () => dispatch(fetchOrders()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
