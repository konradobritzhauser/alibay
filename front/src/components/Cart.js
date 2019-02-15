import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchItemsAction } from "../actions/itemActions";
import { LOGGEDIN } from "../actions/types";

export class unConnectedCart extends Component {
  constructor(props) {
    super(props);
    this.state = { totalSum: 0 };
    this.displayCartItems = this.displayCartItems.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.DisplayTotalPrice=this.DisplayTotalPrice.bind(this)
  }
  componentDidMount() {
    // const data = await (await axios({
    //     method: 'post',
    //     url: '/user/login',
    //     data: body,
    //     credentials: 'include'
    //   })).data
    // this.props.fetchItemsAction()
    console.log("props", this.props);
    let that = this;
    let props = this.props;
    console.log("document.cookie is", document.cookie);
    // let body={username:"konrad"}
    axios({
      method: "post",
      url: "/cart/getCart",
      credentials: "include"
    }).then(function(response) {
      // console.log("props",props)
      // console.log(response)
      let results = response.data.results;
      console.log("resultsId", results);
      props.dispatch({ type: "GET_CART", payload: results });
      // that.setState({itemsById:results})
      // that.setState({allItems:props.items})
    });
  }

  getCartItems() {
    console.log("props", this.props);
    let that = this;
    let props = this.props;
    console.log("document.cookie is", document.cookie);
    // let body={username:"konrad"}
    axios({
      method: "post",
      url: "/cart/getCart",
      credentials: "include"
    }).then(function(response) {
      // console.log("props",props)
      // console.log(response)
      let results = response.data.results;
      console.log("resultsId", results);
      props.dispatch({ type: "GET_CART", payload: results });
      // that.setState({itemsById:results})
      // that.setState({allItems:props.items})
    });
  }
  displayCartItems() {
    return this.props.cart.items.map(elem => {
      let totalSum = this.state.totalSum + elem.price;
      // this.setState({ totalSum: totalSum });
      return (
        <div className="container">
          <h4>{elem.title}</h4>
          <div className="row">
            <div />
            <img src={elem.fd} style={{ width: "100px", height: "50px" }} />
            <h6>{"$" + elem.price}</h6>
          </div>
         
        </div>
      );
    });
  }
  DisplayTotalPrice() {
    return <div>
      <h4>Sum Total:{this.state.totalSum}</h4>
    </div>
  }
  clearCart() {
    let that = this;
    axios({
      method: "post",
      url: "cart/clearCart",
      credentials: "include"
    }).then(that.getCartItems());
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <div>
            <h3>Your Cart</h3>
            <div>{this.displayCartItems()}</div>
            <input type="button" onClick={this.clearCart} value="Clear Cart" />
            <input type="button" onClick={this.clearCart} value="Complete Checkout" />
          </div>
        </div>
      );
    }
    return (
      <h3 className="container  text-center">
        To view you cart please log in or sign up
      </h3>
    );
  }
}

let mapStateToProps = function(state) {
  return {
    cart: state.cart,
    items: state.items,
    loggedIn: state.user.loggedIn
  };
};

let Cart = connect(mapStateToProps)(unConnectedCart);

// const mapStateToProps = state => {
//   return {
//     items: state.items.items
//   }
// }
// export default connect(
//   mapStateToProps,
//   { fetchItemsAction }
// )(Items)

export default Cart;
