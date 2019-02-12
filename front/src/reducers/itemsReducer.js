import { FETCH_ITEMS } from '../actions/types'

const initialState = {
  items: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}
