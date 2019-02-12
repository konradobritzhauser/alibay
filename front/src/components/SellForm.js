import React, { Component } from 'react'
import axios from 'axios'

export class SellForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      category: '',
      description: '',
      price: '',
      image: ''
    }
    this.titleHandler = this.titleHandler.bind(this)
    this.categoryHandler = this.categoryHandler.bind(this)
    this.descriptionHandler = this.descriptionHandler.bind(this)
    this.priceSelectHandler = this.priceSelectHandler.bind(this)
    this.imageSelectHandler = this.imageSelectHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  titleHandler = (event) => {
    this.setState({ title: event.target.value })
  }

  categoryHandler (event) {
    this.setState({ category: event.target.value })
  }

  descriptionHandler (event) {
    this.setState({ description: event.target.value })
  }

  priceSelectHandler (event) {
    this.setState({ price: event.target.value })
  }

  imageSelectHandler (event) {
    this.setState({ image: event.target.files[0] })
  }

  handleSubmit (event) {
    event.preventDefault()
    let {title, category, description, price, image} = this.state
    let body = {
      title,
      category,
      description,
      price,
      image
    }
    axios.post('/user/sell-form', { body })
      .then(res=> console.log('res', res))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Title'
              onChange={this.titleHandler}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label for='category'>Select one:</label>
            <select
              className='form-control'
              id='category'
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
          <div className='form-group'>
            <textarea
              placeholder='Describe your item'
              onChange={this.descriptionHandler}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='$'
              onChange={this.priceSelectHandler}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <input
              type='file'
              accept='image/*'
              onChange={this.imageSelectHandler}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <input type='submit' className='btn btn-dark btn-block' />
          </div>
        </form>
      </div>
    )
  }
}

export default SellForm
