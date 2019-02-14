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
          <img className="card-img-top" />
          {/* <img width='50%' src={image} alt='pcs' /> */}
        </Link>
        <div className="container">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">${price}</p>
        </div>
      </div>
    )
  }
}

export default MdItem
