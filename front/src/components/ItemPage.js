import React, { Component } from 'react'
import '../css/style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

// import { Route, BrowserRouter, Link } from 'react-router-dom'

class ItemPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsArr: [],
      newArr: []
    }
  }

  //This function runs by itself and change the state
  //Adds all the arrays
  componentDidMount() {
    fetch('http://localhost:4000/items/getItems')
      .then(x => x.text())
      .then(responseBody => {
        // console.log('responseBody', responseBody)
        let parsedResponseBody = JSON.parse(responseBody)
        // console.log('parsedResponseBody :', parsedResponseBody)
        let itemsArr = parsedResponseBody.results
        this.setState({ itemsArr: itemsArr })
        this.verifyId(itemsArr)
      })
  }

  verifyId = itemsArr => {
    // console.log('itemsArr :', this.state.itemsArr)
    let segment_str = window.location.pathname
    let segment_array = segment_str.split('/')
    let last_segment = segment_array.pop()

    // console.log(last_segment)
    // let result = flatten(itemData)
    // console.log('itemData:', itemData)

    //Go through the itemData array and if last part of URL matches,
    //the ID then it will add it to the flat array

    let flat = []
    for (let i = 0; i < itemsArr.length; i++) {
      if (last_segment === itemsArr[i]._id) {
        flat = flat.concat(itemsArr[i])
      }
    }
    this.setState({ newArr: flat[0] })
    console.log(this.state.newArr)
    // console.log(flat[0])
    // return flat[0]
  }

  addItemCart = event => {
    event.preventDefault()
    let body = {
      // username: this.state.newArr.,
      itemId: this.state.newArr._id
    }
    console.log(body)
    try {
      const check = axios({
        method: 'post',
        url: '/cart/addItem',
        credentials: 'include',
        data: body
      })
      if (check.success) {
        this.props.history.push('/cart')
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  render() {
    console.log('this.state.newArr', this.state.newArr)
    let category = this.state.newArr.category
    let desc = this.state.newArr.description
    let fd = this.state.newArr.fd
    let likes = this.state.newArr.likes
    let price = this.state.newArr.price
    let seller = this.state.newArr.seller
    let title = this.state.newArr.title
    let id = this.state.newArr._id

    return (
      <div className="container container-item-page">
        <div className="row">
          <div className="col-sm-6 left-column-buy">
            <img className="buy-photo" src={fd} alt='product'></img>
          </div>
          <div className="col-sm-6 right-column-buy">
            <div className="right-column-inside">
              <h5>{title}</h5>
              <div>{desc}</div>
              <div className="buy-price">${price}</div>
              <button
                to="/cart"
                className="btn btn-dark btn-block submit-button-signup button-add-cart"
                onClick={this.addItemCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {/* <Link to={`/seller/${seller}`}> See a seller </Link> */}
      </div>
    )
  }
}

export default withRouter(ItemPage)
