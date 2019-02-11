import React, { Component } from 'react'
import '../css/style.css'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Buy
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sell
                </a>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0 mr-auto ml-auto">
              <input
                class="form-control mr-sm-2"
                id="navbar-search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-secondary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>

            <ul class="navbar-nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Signup
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  My Cart
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
