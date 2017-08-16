import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class App extends Component {
  
  onPressButton = () => {
    console.log('onPressssss')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressButton}
          title={'Learn More'}
          color="#841584"
        />
        <View>
          <Text></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

