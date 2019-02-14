import React, { Component } from 'react'
import '../css/style.css'
import { connect } from 'react-redux'
import { filterByCategory, unfilterItems } from '../actions/itemActions'
class Category extends Component {
  render () {
    const handlerOnChange = (e) => {
      // console.log('e.target.name', e.target.innerText)
      if (e.target.innerText === 'All') {
        this.props.unfilterItems()
      } else {
        this.props.filterByCategory(e.target.innerText)
      }
    }

    return (
      <div className='categories-main'>
        <ul className='nav flex-column '>
          <li className='nav-item' onClick={handlerOnChange}>All</li>
          <li className='nav-item' onClick={handlerOnChange}>Accessories</li>
          <li className='nav-item' onClick={handlerOnChange}>Cameras</li>
          <li className='nav-item' onClick={handlerOnChange}>Laptop Computers</li>
          <li className='nav-item' onClick={handlerOnChange}>Desktop Computers</li>
          <li className='nav-item' onClick={handlerOnChange}>Speakers</li>
          <li className='nav-item' onClick={handlerOnChange}>Watches</li>
          <li className='nav-item' onClick={handlerOnChange}>Headphones</li>
          <li className='nav-item' onClick={handlerOnChange}>Televisions</li>
          <li className='nav-item' onClick={handlerOnChange}>Projectors</li>
          <li className='nav-item' onClick={handlerOnChange}>Video Games</li>
          <li className='nav-item' onClick={handlerOnChange}>Tablets</li>
          <li className='nav-item' onClick={handlerOnChange}>Blu Ray Players</li>
        </ul>
      </div>
    )
  }
}

export default connect(null, { filterByCategory, unfilterItems })(Category)
