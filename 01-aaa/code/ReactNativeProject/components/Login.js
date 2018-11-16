/**
 yarn add react-native-vector-icons
 yarn add react-native-fbsdk
 react-native link
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
const FBSDK = require('react-native-fbsdk')
const {
  LoginManager,
} = FBSDK
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Login extends Component {
  async loginWithFacebook() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          alert('Login was successful with permissions: '
            + result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login failed with error: ' + error);
      }
    )
  }
  render() {
    const FacebookButton = () => (
      <Icon.Button name="facebook"
        backgroundColor="#3b5998"
        onPress={this.loginWithFacebook}>
        Login with Facebook
      </Icon.Button>
    )
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <Ionicons name="ios-speedometer" size={100} color="rgb(221, 97, 97)" />
          <Text style={styles.title}>Sharing your images for everybody</Text>
        </View>
        <View style={styles.down}>    
        <FacebookButton />      
      </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(234, 195, 176)'
  },
  up: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'green', 
  },
  down: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',  
    // backgroundColor:'powderblue'   
    // alignItems: 'center',      
  },
  title: {
    fontFamily: 'SourceSansPro-Light',// Run react-native link         
    color: 'rgb(255,119,34)',
    margin: 10, fontSize: 23,
    width: 400,
    textAlign: 'center',
  },
  loginButton: {
    width: 350,
    height: 40
  }
});
