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
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
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
      email: '',
      password: ''
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
    const FacebookButton = (props) => (
      <FontAwesome.Button name="facebook"
        {...props}
        backgroundColor="#3b5998"
        onPress={this.loginFacebook}>
        <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
      </FontAwesome.Button>
    )
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons name="ios-speedometer" size={100} color="rgb(221, 97, 97)" />
            <Text style={styles.title}>Sharing your images for everybody</Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Enter your email"
                value={this.state.email}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput style={styles.textInput}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={true}
                placeholder="Enter your password"
                value={this.state.password}
              />
            </View>
            <TouchableOpacity onPress={this._onLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <FacebookButton style={styles.facebookButton} />
          </View>
        </View >
      </TouchableWithoutFeedback>

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
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'green', 
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor:'powderblue',   
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SourceSansPro-Light',// Run react-native link         
    color: 'rgb(255,119,34)',
    margin: 10, fontSize: 23,
    width: 400,
    textAlign: 'center',
  },
  loginButtonTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: 'white'
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  textInput: {
    width: 280,
    height: 45,
    justifyContent: 'center',
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(221, 97, 97)'
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
  },
  //divider
  divider: {
    height: 40,
    width: 298,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  textOR: {
    flex: 1,
    textAlign: 'center'
  }
});
