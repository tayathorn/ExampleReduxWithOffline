import initialState from './initialState'
import * as types from '../actions/types'

export default function callService(state=initialState.response, action) {
  switch(action.type) {
    case types.FETCH_MESSAGE_SUCCESS: 
      return {
        msg: action.payload
      }
    case types.FETCH_MESSAGE_FAILED: 
      return {
        msg: action.payload
      }
    default:
      return state
  }
}