import { ITEM_ADDED_TO_CART } from '../actions/types'
import {ITEM_REMOVED_FROM_CART} from "../actions/types"
import {GET_CART} from "../actions/types"
import axios from 'axios'
const initialState = {
  items: []
}

export default (state = initialState, { type, payload }) => {
  if(type===GET_CART){
      return{
        ...state,
        cart:payload
      }
  }else{
    return state
  }
  
  
  
  
  
  
  // switch (type) {
  //   case ITEM_ADDED_TO_CART:

  //     return {
  //       ...state,
  //       items: payload
  //     }
  //   case ITEM_REMOVED_FROM_CART:
  //     return{
  //       ...state,
  //       items: payload
  //     }
  //   case GET_CART:
  //     let cart;
  //     axios.post("cart/getCart",
  //     {username:payload}
  //     ).then(function(response){
  //       console.log(response)
  //       let results=response.data.results
  //       console.log('results', results)
  //       cart=results
  //       console.log("carts 1",cart)
  //       return{
  //         ...state,
  //         items
  //       }
  //     })
  //     console.log("cart 2",cart)
  //     let items="test"
  //     console.log("items",items)
  //     return{
  //       ...state,
  //       items
  //     }
  //   default:
  //     return state
  // }
}
