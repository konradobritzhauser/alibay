import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchItemsAction } from '../actions/itemActions'
import { LOGGEDIN } from '../actions/types'

export class unConnectedCart extends Component {
  constructor(props) {
    super(props)
    this.state = { totalSum: 0, checkedOut: false }
    this.displayCartItems = this.displayCartItems.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.DisplayTotalPrice = this.DisplayTotalPrice.bind(this)
  }
  componentDidMount() {
    // const data = await (await axios({
    //     method: 'post',
    //     url: '/user/login',
    //     data: body,
    //     credentials: 'include'
    //   })).data
    // this.props.fetchItemsAction()
    console.log('props', this.props)
    let that = this
    let props = this.props
    console.log('document.cookie is', document.cookie)
    // let body={username:"konrad"}
    axios({
      method: 'post',
      url: '/cart/getCart',
      credentials: 'include'
    }).then(function(response) {
      // console.log("props",props)
      // console.log(response)
      let results = response.data.results
      console.log('resultsId', results)
      props.dispatch({ type: 'GET_CART', payload: results })
      // that.setState({itemsById:results})
      // that.setState({allItems:props.items})
    })
  }

  getCartItems() {
    console.log('props', this.props)
    let that = this
    let props = this.props
    console.log('document.cookie is', document.cookie)
    // let body={username:"konrad"}
    axios({
      method: 'post',
      url: '/cart/getCart',
      credentials: 'include'
    }).then(function(response) {
      // console.log("props",props)
      // console.log(response)
      let results = response.data.results
      console.log('resultsId', results)
      props.dispatch({ type: 'GET_CART', payload: results })
      // that.setState({itemsById:results})
      // that.setState({allItems:props.items})
    })
  }
  displayCartItems() {
    let totalSum = 0
    console.log('props', this.props)
    let getCartItems = () => {
      return this.props.cart.items.map(elem => {
        totalSum = totalSum + elem.price
        // this.setState({ totalSum: totalSum });
        return (
          <div className="container">
            <div className="row">
              <div />
              <div>
                <img
                  src={elem.fd}
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
              <div>
                <h4 className="title-cart">{elem.title}</h4>
              </div>
              <div>
                <h6>{' -$' + elem.price}</h6>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div>
        {getCartItems()}
        <h5 className="total-price">Total Sum:$ {totalSum}</h5>
      </div>
    )
  }
  DisplayTotalPrice() {
    return (
      <div>
        <h4>Sum Total:{this.state.totalSum}</h4>
      </div>
    )
  }
  clearCart(e) {
    console.log('e', e.currentTarget)
    let that = this
    axios({
      method: 'post',
      url: 'cart/clearCart',
      credentials: 'include'
    }).then(function() {
      // that.getCartItems()

      that.setState({ checkedOut: true })
    })
  }

  render() {
    if (this.state.checkedOut) {
      return (
        <h3 className="container  text-center">
          Checkout complete. Thank you for choosing Alibay!
        </h3>
      )
    } else if (this.props.loggedIn) {
      return (
        <div className="container cart-holder">
          <div>
            <h3>Your Cart</h3>
            <div>{this.displayCartItems()}</div>
            <div>
              <input
                type="button"
                onClick={this.clearCart}
                value="Clear Cart"
                className="btn btn-dark btn-block button-cart-clear"
              />
              <input
                type="button"
                onClick={this.clearCart}
                value="Complete Checkout"
                className="btn btn-dark btn-block button-cart-checkout"
              />
            </div>
          </div>
        </div>
      )
    }
    return (
      <h3 className="container  text-center">
        To view you cart please log in or sign up
      </h3>
    )
  }
}

let mapStateToProps = function(state) {
  return {
    cart: state.cart,
    items: state.items,
    loggedIn: state.user.loggedIn
  }
}

let Cart = connect(mapStateToProps)(unConnectedCart)

// const mapStateToProps = state => {
//   return {
//     items: state.items.items
//   }
// }
// export default connect(
//   mapStateToProps,
//   { fetchItemsAction }
// )(Items)

export default Cart
