/**
 yarn add react-native-vector-icons
 yarn add react-native-fbsdk
 react-native link
 */
import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity, TextInput
} from 'react-native'
// const FBSDK = require('react-native-fbsdk')
// const {
//   LoginManager,
// } = FBSDK
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email:'',
      password
    }
  }
  async loginWithFacebook() {
    /*
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
    */
  }
  _onLogin() {

  }
  render() {
    const FacebookButton = () => (
      <FontAwesome.Button name="facebook"
        style={styles.facebookButton}
        backgroundColor="#3b5998"
        onPress={this.loginFacebook}>
        Login with Facebook
      </FontAwesome.Button>
    )
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <Ionicons name="ios-speedometer" size={100} color="rgb(221, 97, 97)" />
          <Text style={styles.title}>Sharing your images for everybody</Text>
        </View>
        <View style={styles.middle}>
          <TextInput style={styles.textInput}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
          <TouchableOpacity onPress={this._onLogin} style={styles.button}>
          </TouchableOpacity>
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
  middle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor:'powderblue'   
    alignItems: 'center',
  },
  down: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor:'powderblue'   
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SourceSansPro-Light',// Run react-native link         
    color: 'rgb(255,119,34)',
    margin: 10, fontSize: 23,
    width: 400,
    textAlign: 'center',
  },
  facebookButton: {
    width: 300,
    height: 45,
    justifyContent: 'center',
  },  
  textInput: {
    width: 300,
    height: 45,
    justifyContent: 'center',
  },
  button: {
    width: 300,
    height: 45,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
});
