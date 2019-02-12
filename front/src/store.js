import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// We can bring from './reducers' because it named index.js, but it's better to be more explicit
// In index.js we exported combineReducers variable, but since it was default export we can name it here as we want
import rootReducers from './reducers/index'

const initialState = {}

const middleware = [thunk]
// devs only
// const middleware = []

// let reducer = function (state, action) {
//   return state // Needed because react-redux calls your reducer with an @@init action
// }

const store = createStore(
  rootReducers, // reducer,
  initialState, // InitialState
  compose( // Middleware and Redux dev tools extention. Compose - https://redux.js.org/api/compose
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
