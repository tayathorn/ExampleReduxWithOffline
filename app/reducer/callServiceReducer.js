import initialState from './initialState'
import * as types from '../actions/types'

import { offlineActionTypes } from 'react-native-offline';

export default function callService(state=initialState.response, action) {
  console.log('action :: ', action)
  switch(action.type) {
    case types.FETCH_MESSAGE_SUCCESS: 
      return {
        msg: action.payload
      }
    case types.FETCH_MESSAGE_FAILED: 
      return {
        msg: action.payload
      }
    case types.RESET_MESSAGE:
      return {
        msg: initialState.response.msg
      }
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return {
        msg: 'You\'re offline mode !!'
      }
    default:
      return state
  }
}