import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MdItem extends Component {
  render() {
    // console.log('item from MdItem ', this.props.item)
    const {
      _id,
      title,
      // category,
      // description,
      price,
      fd
      // likes,
      // seller
    } = this.props.item
    console.log(this.props.item._id)
    return (
      <div className="card center card-container">
        <Link to={`/items/${_id}`}>
          <img
            className="card-img-top"
            src={fd}
            alt=""
            style={{ width: '100px' }}
          />
          {/* <img width='50%' src={image} alt='pcs' /> */}
          <div className="container">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">${price}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default MdItem
