import { FETCH_ITEMS, FILTER_BY_CATEGORY_ITEMS, UNFILTER_ITEMS } from '../actions/types'

const initialState = {
  items: [],
  allItems: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEMS:
      return {
        ...state,
        allItems: payload,
        items: payload
      }
    case FILTER_BY_CATEGORY_ITEMS:
      console.log('payload from itemsReducer', payload)
      return {
        ...state,
        items: state.allItems.filter((item) => {
          return item.category === payload
        })
      }
    case UNFILTER_ITEMS:
      console.log('payload UNFILTERED from itemsReducer', payload)
      return {
        ...state,
        items: state.allItems
      }
    default:
      return state
  }
}
