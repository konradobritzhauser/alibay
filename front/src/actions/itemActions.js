import { FETCH_ITEMS } from './types'
import axios from 'axios'

export const fetchItemsAction = () => dispatch => {
  console.log('from fetchItemsAction from itemsActions')

  // TODO: try to use short path. Will it work?

  axios.get('http://localhost:4000/items')
    .then(res => {
      console.log('res.json() is ', res.json())
      res.json()
    })
    .then(items => {
      // console.log('msgs from chatAction is ', msgs)
      dispatch({
        type: FETCH_ITEMS,
        payload: items
      })
    })
}

// TODO: AddItem should be transfered here
