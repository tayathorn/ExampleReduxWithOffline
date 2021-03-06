import {createStore, applyMiddleware} from 'redux'
import { createNetworkMiddleware } from 'react-native-offline'
import thunkMiddleware from 'redux-thunk'

import initialState from '../reducer/initialState'
import reducer from '../reducer'


const networkMiddleware = createNetworkMiddleware()

export default function configureStore() {
  // const enhancer = compose(
  //   applyMiddleware(
  //     thunkMiddleware, // lets us dispatch() functions
  //   ),
  // );
  // return createStore(reducer, initialState, enhancer);

  return createStore(
    reducer,
    // applyMiddleware([networkMiddleware, thunkMiddleware]),
    applyMiddleware(networkMiddleware, thunkMiddleware),
  )
}