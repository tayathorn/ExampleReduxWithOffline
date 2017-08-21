import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ConnectivityRenderer } from 'react-native-offline'

import * as callServiceAction from '../../actions'

class Home extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      message: '---'
    }
  } 

  onPressButton = () => {
    console.log('onPressssss')
    this.props.callServiceAction.fetchMessage()
  }

  onPressReset = () => {
    console.log('Press reset button !')
    this.props.callServiceAction.resetMessage()
  }

  renderTextWithConnectivityRenderer = () => {
    return(
      <ConnectivityRenderer>
        {isConnected => 
          {
            console.log('isConnected : ', isConnected)
            /*isConnected && <Text>{this.props.response.msg}</Text>*/
            if(isConnected) {
              return <Text style={styles.myText}>{this.props.response.msg}</Text>
            }
            return <Text style={styles.myText}>Not connected</Text>
          }
          
        }
      </ConnectivityRenderer>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.myButton}>
            <Button
              onPress={this.onPressButton}
              title={'Press me !'}
              color="#009688"
            />
          </View>
          <View style={styles.myButton}>
            <Button
              onPress={this.onPressReset}
              title={'Reset'}
              color="#B71C1C"
            />
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.myText}>{this.props.response.msg}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  box: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myButton: {
    marginBottom: 10,
  },
  myText: {
    fontSize: 25,
    marginHorizontal: 10,
  },
});

function mapStateToProps(state) {
  return {
      response: state.response,
  }
}

function mapDispatchToProps(dispatch) {
  return {
      callServiceAction: bindActionCreators(callServiceAction, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
