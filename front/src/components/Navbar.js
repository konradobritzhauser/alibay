import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component {
  render () {
    // console.log('loggedin', this.props.loggedin)

    // When user is NOT loggedin it returns both links: signup and login
    // When user is loggedin it return empty or icon with link to Profile comp
    const getSignupLogin = () => {
      // Checking redux.store
      if (this.props.loggedin) {
        return (
          <li className='nav-item'>
            <Link to='/profile' className='nav-link'>
                    Profile
            </Link>
          </li>
        )
      } else {
        return (
          < >
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                    Login
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/signup' className='nav-link'>
                    Signup
              </Link>
            </li>
          </>
        )
      }
    }

    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link to='/items' className='navbar-brand'>
            Alibay
          </Link>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/items' className='nav-link'>
                  Buy
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/sell-form' className='nav-link'>
                  Sell
                </Link>
              </li>
            </ul>

            <form className='form-inline my-2 my-lg-0 mr-auto ml-auto'>
              <input
                className='form-control mr-sm-2'
                id='navbar-search'
                type='search'
                placeholder='Search for products'
                aria-label='Search'
              />
              <button
                className='btn btn-outline-secondary my-2 my-sm-0'
                type='submit'
                id='search-button-nav'
              >
                Search
              </button>
            </form>

            <ul className='navbar-nav justify-content-end'>

              {getSignupLogin()}

              <li className='nav-item'>
                <Link to='/cart' className='nav-link'>
                  <div className='cart' />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedin: state.user.loggedIn
  }
}
export default connect(mapStateToProps)(Navbar)
