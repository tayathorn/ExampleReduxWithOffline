import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import { Provider } from 'react-redux'

import Home from '../Home'
import configureStore from '../../store/configureStore'

import { withNetworkConnectivity } from 'react-native-offline';

const store = configureStore()

const AppWrapper = () => (
  <Home/>
)

AppWrapper = withNetworkConnectivity({
  withRedux: true // It won't inject isConnected as a prop in this case
})(AppWrapper); 

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper/>
      </Provider>
    )
  }
}
