import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from '../store/userOrders'

export class OrderHistory extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.getOrders(this.props.match.params.id);
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
// user: state.auth,
 orders: state.orders,
})

const mapDispatchToProps = dispatch => ({
  getOrders: id => dispatch(fetchOrders(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
