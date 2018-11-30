/** @format */
/*
Nguyen Duc Hoang (Mr)
Youtube channel: https://www.youtube.com/c/nguyenduchoang
Programming tutorial channel
This is Login Screen
Install icons: react-native-vector-icons
Login Facebook:
yarn add react-native-fbsdk
react-native link react-native-fbsdk
//Steps to connect Facebook
https://developers.facebook.com/quickstarts/136213253812236/?platform=android

*/

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
//colors 
import { COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM } from './myColors'
//Login Facebook
import { LoginManager } from "react-native-fbsdk"

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      //Disable "back" button on Android
      return true
    })
  }
  componentWillUnmount() {
    this.backHandler.remove();
  }
  
  async loginFacebook() {
    // alert("1234")
    try {
      let result = await LoginManager.logInWithReadPermissions(['public_profile'])
      if (result.isCancelled) {
        alert('Login was cancelled');
      } else {
        alert('Login was successful with permissions: '
          + result.grantedPermissions.toString());
      }
    } catch (error) {
      alert('Login failed with error: ' + error)      
    }    
  }
  render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons
              name="ios-speedometer"
              size={100}
              color={COLOR_PINK}>
            </Ionicons>
            <Text style={styles.title}>
              Sharing your images to everyone
            </Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Enter your email"
              >
              </TextInput>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true}
              >
              </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <FontAwesome.Button
              style={styles.facebookButton}
              name="facebook"
              onPress={this.loginFacebook}
              backgroundColor={COLOR_FACEBOOK}
            >
              <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
            </FontAwesome.Button>
          </View>
        </View>
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
    backgroundColor: COLOR_PINK_LIGHT
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,//70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: COLOR_PINK_MEDIUM,
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.2)'//a = alpha = opacity
  },
  textInput: {
    width: 280,
    height: 45
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  textOR: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
