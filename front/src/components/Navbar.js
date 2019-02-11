import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" class="navbar-brand">
            Navbar
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/items" class="nav-link">
                  Buy
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/sell-form" class="nav-link">
                  Sell
                </Link>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0 mr-auto ml-auto">
              <input
                className="form-control mr-sm-2"
                id="navbar-search"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-secondary my-2 my-sm-0"
                type="submit"
                id="search-button-nav"
              >
                Search
              </button>
            </form>

            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/cart" className="nav-link">
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
