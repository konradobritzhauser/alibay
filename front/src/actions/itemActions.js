import { FETCH_ITEMS } from './types'
import axios from 'axios'

export const fetchItemsAction = () => async dispatch => {
  try {
    console.log('from fetchItemsAction from itemsActions')
    // TODO: try to use short path. Will it work?
    const data = await (await axios.get('http://localhost:4000/items/getItems')).data
    console.log('axios data', data)
    dispatch({
      type: FETCH_ITEMS,
      payload: data.results
    })
  } catch (err) {
    console.log('err is ', err)
  }
}

// TODO: AddItem should be transfered here
