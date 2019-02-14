import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchItemsAction } from '../actions/itemActions'

export class unConnectedCart extends Component {
  constructor(props){
    super(props)
    // this.state={cartCleared}
    this.displayCartItems=this.displayCartItems.bind(this)
    this.clearCart=this.clearCart.bind(this)
  }
  componentDidMount(){

    // const data = await (await axios({
    //     method: 'post',
    //     url: '/user/login', 
    //     data: body,
    //     credentials: 'include'
    //   })).data
    // this.props.fetchItemsAction()
    console.log("props",this.props)
    let that=this
    let props=this.props
    console.log('document.cookie is',document.cookie)
    // let body={username:"konrad"}
      axios(
      {method:'post',url:'/cart/getCart',credentials:'include'}
      ).then(function(response){
    // console.log("props",props)
        // console.log(response)
        let results=response.data.results
        console.log('resultsId', results)
        props.dispatch({type:"GET_CART",payload:results})
        // that.setState({itemsById:results})
        // that.setState({allItems:props.items})
      })
  }

  getCartItems(){
    console.log("props",this.props)
    let that=this
    let props=this.props
    console.log('document.cookie is',document.cookie)
    // let body={username:"konrad"}
      axios(
      {method:'post',url:'/cart/getCart',credentials:'include'}
      ).then(function(response){
    // console.log("props",props)
        // console.log(response)
        let results=response.data.results
        console.log('resultsId', results)
        props.dispatch({type:"GET_CART",payload:results})
        // that.setState({itemsById:results})
        // that.setState({allItems:props.items})
      })
  }
  displayCartItems(){
    let cartIdArr=this.props.cart.items
    console.log("cartIdArr",cartIdArr)
    axios(
      {method:"get",url:"items/getItems"}
    ).then(function(response){
      // console.log('response', response)
      let allItems=response.data.results
      console.log('allItems', allItems)
      let relaventItems=[]

      function compareToCart(){
      }

      function compareToCart(){
        for(let i=0;i<cartIdArr.length;i++){
          
        }
      }
      

      allItems.forEach()

    })
    
    
    



    function displayItem(elem){
      return <div>{elem}</div>
    }
    

    // try{
    //   return cartIdArr.map(displayItem)
    // }catch(e){}
    
    
  }
  clearCart(){
    let that=this
    axios({
      method:"post",
      url:"cart/clearCart",
      credentials:"include"
    }).then(that.getCartItems())
  }

  render () {
    
    return (
      <div>
        <div>
          <h3>Your Cart</h3>
        <div>{this.displayCartItems()}</div>
          <input type='button' onClick={this.clearCart} value="Clear Cart"></input>
          
        </div>
      </div>
    )
  }
}

let mapStateToProps=function(state){
  return{
    cart:state.cart,
    items:state.items
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
