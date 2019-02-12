import React, { Component } from 'react'
import '../css/style.css'
import axios from 'axios'

// TODO: Try to use icons from https://github.com/FortAwesome/react-fontawesome

export class SellForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category: '',
      description: '',
      price: '',
      image: ''
    }
  }

  titleHandler = event => {
    this.setState({ title: event.target.value })
  }

  categoryHandler = event => {
    this.setState({ category: event.target.value })
  }

  descriptionHandler = event => {
    this.setState({ description: event.target.value })
  }

  priceSelectHandler = event => {
    this.setState({ price: event.target.value })
  }

  imageSelectHandler = event => {
    this.setState({ image: event.target.files[0] })
    console.log(event.target.files[0])
  }

  handleSubmit = event => {
    event.preventDefault()
    const fd = new FormData()
    // console.log('name:' + this.state.image.name)
    fd.append('image', this.state.image, this.state.image.name)
    // console.log(fd)
    let { title, category, description, price } = this.state
    let body = {
      title,
      category,
      description,
      price,
      fd
    }
    // for (var entry of fd.entries()) {
    //   console.log(entry[0] + ', ' + entry[1] + ', ' + entry[2])
    // }
    axios.post('/items/additem', { body }).then(res => console.log('res', res))
  }

  render() {
    return (
      <div id="sellform-main">
        <form onSubmit={this.handleSubmit}>
          <h2>Sell your item</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              onChange={this.titleHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Select one:</label>
            <select
              className="form-control"
              id="category"
              onChange={this.categoryHandler}
            >
              <option>Accessories</option>
              <option>Camera</option>
              <option>Laptop Computer</option>
              <option>Desktop Computer</option>
              <option>Speaker</option>
              <option>Watch</option>
              <option>Headphones</option>
              <option>Television</option>
              <option>Projector</option>
              <option>Video Games</option>
              <option>Tablet</option>
              <option>Blu Ray Player</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Describe your item"
              onChange={this.descriptionHandler}
              className="form-control form-text-area"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="$"
              onChange={this.priceSelectHandler}
              className="form-control sell-price float-left"
            />
            <input
              type="file"
              accept="image/*"
              onChange={this.imageSelectHandler}
              className="form-control sell-img-upload float-right"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-dark btn-block button-sell-form"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SellForm
