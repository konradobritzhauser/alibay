import { FETCH_ITEMS, FILTER_BY_CATEGORY_ITEMS, UNFILTER_ITEMS, FILTER_WILD_SEARCH } from './types'
import axios from 'axios'

export const fetchItemsAction = () => async dispatch => {
  try {
    // console.log('from fetchItemsAction from itemsActions')
    // DONE: try to use short path. Will it work?
    const data = await (await axios.get('/items/getItems')).data
    // console.log('axios data', data)
    dispatch({
      type: FETCH_ITEMS,
      payload: data.results
    })
  } catch (err) {
    console.log('err is ', err)
  }
}

export const filterByCategory = (category) => async dispatch => {
  try {
    dispatch({
      type: FILTER_BY_CATEGORY_ITEMS,
      payload: category
    })
  } catch (err) {
    console.log('err is ', err)
  }
}

export const filterWildSearch = (arrSearch) => async dispatch => {
  try {
    dispatch({
      type: FILTER_WILD_SEARCH,
      payload: arrSearch
    })
  } catch (err) {
    console.log('err is ', err)
  }
}

export const unfilterItems = () => async dispatch => {
  console.log('unfilterItems from itemActions')
  try {
    dispatch({
      type: UNFILTER_ITEMS
    })
  } catch (err) {
    console.log('err is ', err)
  }
}

// TODO: AddItem should be transfered here if we need it
