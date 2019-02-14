import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchItemsAction } from '../actions/itemActions'

export class unConnectedCart extends Component {
  constructor(props){
    super(props)
    this.displayCartItems=this.displayCartItems.bind(this)
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
        that.setState({itemsById:results})
        that.setState({allItems:props.items})
      })
  }

  displayCartItems(){
    let cartIdArr=this.props.cart.items
    console.log("cartIdArr",cartIdArr)
    
    function displayItem(elem){
      return <div>{elem}</div>
    }
    

    try{
      return cartIdArr.map(displayItem)
    }catch(e){}
    
    
  }
  // clearCart(){
  //   axios.post("/cart/clearCart",
    
  //   )
  // }

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
