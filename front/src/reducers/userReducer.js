import { LOGGEDIN } from '../actions/types'

const initialState = {
  loggedIn: false
  // sid: ''
  // FIX: for devs only
  // sid: '845223540033'
}

export default (state = initialState, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case LOGGEDIN:
      return {
        ...state,
        loggedIn: payload.loggedIn
        // sid: payload.sid
      }
    default:
      return state
  }
}
