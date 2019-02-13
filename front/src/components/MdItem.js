import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MdItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log('item from MdItem ', this.props.item)
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
    console.log(this.props.item._id)
    return (
      <div className="card center ">
        <Link to={`/items/${_id}`}>
          Image will be here soon
          {/* <img width='50%' src={image} alt='pcs' /> */}
        </Link>
        <div className="container">
          <div>{title}</div>
          <div>${price}</div>
        </div>
      </div>
    )
  }
}

export default MdItem
