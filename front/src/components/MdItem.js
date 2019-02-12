import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SmItem extends Component {
  render () {
    console.log('item from SmItem ', this.props.item)
    const {
      _id,
      title,
      category,
      description,
      price,
      fd,
      likes,
      seller
    } = this.props.item
    return (
      <div className='card center '>
        <Link to={`/items/${_id}`}>
          Image will be here soon
          {/* <img width='50%' src={image} alt='pcs' /> */}
        </Link>
        <div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{price}</div>
          <div>{likes}</div>
          <div>{category}</div>
          <Link to={`/seller/${seller}`}> See a seller </Link>
        </div>
      </div>
    )
  }
}

export default SmItem
