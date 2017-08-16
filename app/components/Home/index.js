import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

    // this.message = this.props.response.msg



    // this.setState({
    //   message: this.props.response.msg
    // })

    this.props.callServiceAction.fetchMessage()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button
            onPress={this.onPressButton}
            title={'Learn More'}
            color="#009688"
          />
        </View>
        <View style={styles.box}>
          <Text>{this.props.response.msg}</Text>
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
  }
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
