/**
 yarn add react-native-vector-icons
 react-native link react-native-vector-icons
 */
import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Login extends Component {
  async loginWithFacebook() {

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
        <View style={styles.up} />
        <View style={styles.down} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',    
    alignItems: 'center',    
  },  
  up: {
    flex: 1,
    flexDirection: 'row',
    // width:100,    
    //justifyContent: 'stretch',   
    backgroundColor:'green', 
    alignItems: 'stretch',    
  },  
  down: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',  
    backgroundColor:'powderblue'   
    // alignItems: 'center',      
  }
});
