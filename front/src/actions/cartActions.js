import { GET_CART } from './types'
import axios from 'axios'

export const fetchCartAction = () => async dispatch => {
    try {

        
          axios.post("cart/getCart",
          {username:"konrad"}
          ).then(function(response){
        // console.log("props",props)
            // console.log(response)
            let results=response.data.results
            console.log('resultsId', results)
            dispatch({type:GET_CART,payload:results})
          })  


     
    } catch (err) {
      console.log('err is ', err)
    }
  }