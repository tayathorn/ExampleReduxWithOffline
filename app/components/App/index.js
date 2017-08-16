import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import { Provider } from 'react-redux'

import Home from '../Home'
import configureStore from '../../store/configureStore'

const store = configureStore()
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}
