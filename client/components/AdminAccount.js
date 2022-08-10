import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/admin';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cart';

class AdminAccount extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log(this.props)
    if (this.props.users.length === 0) {
      return (<h5 className='my-4'>Oops, for admin eyes only!</h5>)
    } else {
    return (
        <div className='row col-12 col-4-sm product'>
          {this.props.users.map((user) => (
                  <div key={user.id} className='card product-card shadow-lg'>
                    <div className='card-body'>
                        <p className='card-title product-name'>
                          {user.firstName} {user.lastName}
                        </p>
                      <p className='card-text baseline user-font'>
                        email: {user.email}
                      </p>
                      <p className='card-text baseline user-font'>
                        address: {user.address}
                      </p>
                      {user.orders && user.orders.length !== 0 ? (
                        <p>
                        {user.orders.map(order => {
                          return (
                            <p className='card-text baseline user-font'>Order No. {order.id}</p>
                          )
                        })}
                        </p>
                      ) : (
            <div className='card-text baseline user-font'>No recent orders found</div>
                      )}
                    </div>
                  </div>
                ))}

        </div>
    );
  }
}
}

const mapState = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(AdminAccount)
