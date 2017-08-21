import * as types from './types'
import axios from 'react-native-axios'
import {config} from '../config'

export function fetchMessage() {
  return function(dispatch) {
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
}