import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export class unConnectedCart extends Component {
  constructor(props){
    super(props)
    this.displayCartItems=this.displayCartItems.bind(this)
  }
  componentDidMount(){
    // console.log("props",this.props)
    let props=this.props
      axios.post("cart/getCart",
      {username:"konrad"}
      ).then(function(response){
    // console.log("props",props)

        // console.log(response)
        let results=response.data.results
        console.log('results', results)
        props.dispatch({type:"GET_CART",payload:results})
      })
  }

  displayCartItems(){
    let cartArr=this.props.cart.cart
    console.log("cartArr",cartArr)
    
    function displayItem(elem){
      return <div>{elem}</div>
    }
    
    try{
      return cartArr.map(displayItem)
    }catch(e){}
    
    
  }
  render () {
    
    return (
      <div>
        <div>
          <input type='button' value="Clear Cart"></input>
          <div>{this.displayCartItems()}</div>
        </div>
      </div>
    )
  }
}

let mapStateToProps=function(state){
  return{
    cart:state.cart
  }
} 

let Cart=connect(mapStateToProps)(unConnectedCart)

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
