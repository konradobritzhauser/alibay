import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class smItem extends Component {
  render () {
    console.log('item from smItem ', this.props.item)
    const { _id } = this.props.item
    return (
      <div className='card center '>
        <Link to={`/items/${_id}`}>
          {/* <img width='50%' src={image} alt='pcs' /> */}
        </Link>
        {/* <div>
          <div>{description}</div>
          <div>{price}</div>
          <Link to={`/seller/${sellerId}`}> See a seller </Link>
        </div> */}
      </div>
    )
  }
}

export default smItem
