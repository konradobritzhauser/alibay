import { ITEM_ADDED_TO_CART } from '../actions/types'

const initialState = {
  items: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ITEM_ADDED_TO_CART:
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}
