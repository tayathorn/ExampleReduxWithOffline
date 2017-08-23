import * as types from './types'
import axios from 'react-native-axios'
import {config} from '../config'

export function fetchMessage() {
  function thunkFetchMessage(dispatch) {
    axios.get(config.urlService)
    .then((response) => {
      console.log('response : ', response)
      dispatch({
        type: types.FETCH_MESSAGE_SUCCESS,
        payload: response.data.msg
      })
    })
    .catch((error) => {
      console.log('error :: ', error)
    })
  }

  thunkFetchMessage.interceptInOffline = true
  thunkFetchMessage.meta = {
    retry: true
  }

  return thunkFetchMessage
}

export function resetMessage() {
  return function(dispatch) {
    dispatch({
      type: types.RESET_MESSAGE,
    })
  }
}