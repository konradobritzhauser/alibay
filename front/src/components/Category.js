import React, { Component } from 'react'
import '../css/style.css'

class Category extends Component {
  render() {
    return (
      <div className="categories-main">
        <ul className="nav flex-column ">
          <li className="nav-item">All</li>
          <li className="nav-item">Accessories</li>
          <li className="nav-item">Cameras</li>
          <li className="nav-item">Laptop Computers</li>
          <li className="nav-item">Desktop Computers</li>
          <li className="nav-item">Speaker</li>
          <li className="nav-item">Watches</li>
          <li className="nav-item">Headphones</li>
          <li className="nav-item">Televisions</li>
          <li className="nav-item">Projectors</li>
          <li className="nav-item">Video Games</li>
          <li className="nav-item">Tablets</li>
          <li className="nav-item">Blu Ray Players</li>
        </ul>
      </div>
    )
  }
}

export default Category
