import { combineReducers } from 'redux'

import userReducer from './userReducer.js'
import cartReducer from './cartReducer.js'
import itemsReducer from './itemsReducer'
// import itemReducer from './itemReducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  items: itemsReducer
})
