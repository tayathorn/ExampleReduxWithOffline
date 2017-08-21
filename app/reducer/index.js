import { combineReducers } from 'redux';
import response from './callServiceReducer'
import { reducer as network } from 'react-native-offline'

export default combineReducers({
  response,
  network,
})
