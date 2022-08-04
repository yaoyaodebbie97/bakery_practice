import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from '../store/userOrders'

export class OrderHistory extends React.Component {

  componentDidMount() {
    this.props.getOrders(this.props.match.params.id);
  }

  render() {
    const user = this.props.user
    const campus = student.campus
        return (
          <div className="Container">
          {user.map((order => (
              <div key={user.id}>
              <img className="productImg"  />
       <p>Product Name: </p>
       <p>Price: </p>

       </div>
            ) ))}
          </div>
        )
    }
  }


const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  getOrders: id => dispatch(fetchOrders(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
