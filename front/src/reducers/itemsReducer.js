import { FETCH_ITEMS, FILTER_BY_CATEGORY_ITEMS, UNFILTER_ITEMS, FILTER_WILD_SEARCH } from '../actions/types'

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
      // console.log('payload from itemsReducer', payload)
      return {
        ...state,
        items: state.allItems.filter((item) => {
          return item.category === payload
        })
      }
    case UNFILTER_ITEMS:
      // console.log('payload UNFILTERED from itemsReducer', payload)
      return {
        ...state,
        items: state.allItems
      }
    case FILTER_WILD_SEARCH:
      console.log('payload WILD SEARCH from itemsReducer', payload)
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}
