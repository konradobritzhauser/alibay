import React, { Component } from 'react'
import '../css/style.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import { filterWildSearch } from '../actions/itemActions'
class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchInput: ''
    }
  }
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

    const onSearchChange = (event) => {
      this.setState({ searchInput: event.target.value })
    }

    const handleSearchSubmit = async (e) => {
      console.log('this.state.searchInput', this.state.searchInput)

      e.preventDefault()
      try {
        const data = await (await axios({
          method: 'post',
          url: '/items/searchItems',
          data: { search: this.state.searchInput },
          credentials: 'include'
        })).data
        console.log(data)
        if (data.success) {
          // If backend gives {success: true} then we set store
          this.props.filterWildSearch(data.result)
          // this.props.history.push('/items')
        }
      } catch (err) {
        console.log('err', err)
      }

      this.setState({ searchInput: '' })
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

            <form onSubmit={handleSearchSubmit} className='form-inline my-2 my-lg-0 mr-auto ml-auto'>
              <input
                className='form-control mr-sm-2'
                id='navbar-search'
                type='text'
                placeholder='Search for products'
                aria-label='Search'
                value={this.state.searchInput}
                onChange={onSearchChange}
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
export default connect(mapStateToProps, { filterWildSearch })(withRouter(Navbar))
