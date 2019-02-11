import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link to='/' class='navbar-brand'>
            Navbar
          </Link>

          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav mr-auto'>
              <li class='nav-item'>
                <Link to='/items' class='nav-link'>
                  Buy
                </Link>
              </li>

              <li class='nav-item'>
                <Link to='/sell-form' class='nav-link'>
                  Sell
                </Link>
              </li>
            </ul>

            <form class='form-inline my-2 my-lg-0 mr-auto ml-auto'>
              <input
                class='form-control mr-sm-2'
                id='navbar-search'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button
                class='btn btn-outline-secondary my-2 my-sm-0'
                type='submit'
              >
                Search
              </button>
            </form>

            <ul class='navbar-nav justify-content-end'>
              <li class='nav-item'>
                <Link to='/login' class='nav-link'>
                  Login
                </Link>
              </li>

              <li class='nav-item'>
                <Link to='/signup' class='nav-link'>
                  Signup
                </Link>
              </li>

              <li class='nav-item'>
                <Link to='/cart' class='nav-link'>
                  My Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
