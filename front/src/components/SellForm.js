import React, { Component } from 'react'
import '../css/style.css'
import {connect} from 'react-redux'
import axios from 'axios'

import {fetchItemsAction} from '../actions/itemActions'

// TODO: Try to use icons from https://github.com/FortAwesome/react-fontawesome

export class SellForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category: '',
      description: '',
      price: 0,
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

  handleSubmit = async event => {
    event.preventDefault()
    let errArr =[]

    let seller = 'dennis'
    let likes = 0
    let { title, category, description, price } = this.state
    console.log(this.state)
    if(title===''|| category==='' || description==='' || price===0) errArr.push('err')
    console.log(errArr.length)
    if (errArr.length===1) {
      return window.alert('Please, check your input')
    } else {
    const fd = new FormData()
    // console.log('name:' + this.state.image.name)
    fd.append('fd', this.state.image, this.state.image.name)
    fd.append('title', title)
    fd.append('category', category)
    fd.append('description', description)
    fd.append('price', price)
    fd.append('likes', likes)
    fd.append('seller', seller)

    
    console.log('body is --->', fd)

    let data = (await axios({
      method: 'post',
      url: 'items/upload',
      data: fd,
      credentials: 'include'
    })).data
    console.log('data', data)
    if (data.succes) {
      window.alert('Your item has been added')
      // Update state with added item
      this.props.fetchItemsAction()
    }
  }
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
              <option>Cameras</option>
              <option>Laptop Computers</option>
              <option>Desktop Computers</option>
              <option>Speakers</option>
              <option>Watches</option>
              <option>Headphones</option>
              <option>Televisions</option>
              <option>Projectors</option>
              <option>Video Games</option>
              <option>Tablets</option>
              <option>Blu Ray Players</option>
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

export default connect(null,{fetchItemsAction})(SellForm)

