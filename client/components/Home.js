import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <img src=""/>
      <div>
        <h3>About Us</h3>
        <p>Established in 2022.</p>
      </div>
      <div>
        <Link to='/products/bread'>Bread</Link>
        <Link to='/products/rolls'>Rolls</Link>
        <Link to='/products/cookies'>Cookies</Link>
        <Link to='/products/pies'>Pies</Link>
        <Link to='/products/pastries'>Pastries</Link>
        <Link to='/products/muffins'>Muffins</Link>
        <Link to='/products/cakes'>Cakes</Link>
        </div> 
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)



