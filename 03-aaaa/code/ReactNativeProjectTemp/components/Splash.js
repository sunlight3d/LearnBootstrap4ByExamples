/*
Nguyen Duc Hoang (Mr)
Youtube channel: https://www.youtube.com/c/nguyenduchoang
Programming tutorial channel
This is Splash Screen
*/

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions
} from 'react-native'
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from './myColors'
var {height, width} = Dimensions.get('window')

//colors 
export default class Splash extends Component {
  static navigationOptions = {
    header: null,    
  }
  state = {
    logoOpacity: new Animated.Value(0),
    titleMarginTop: new Animated.Value(height / 2),
  }
  fadeLogo() {
    Animated.timing(this.state.logoOpacity,{
      toValue: 1,                  
      duration: 2000,              
    }).start()
  }
  async componentDidMount() {
    Animated.sequence([      
      //fade logo
      Animated.timing(this.state.logoOpacity,{
        toValue: 1,                  
        duration: 2000,              
      }),
      Animated.timing(this.state.titleMarginTop, {        
        toValue: 10,
        duration: 1000,              
      })
    ]).start(() => {
      this.props.navigation.navigate('Login')
    });
  }
  render() {    
    return (    
      <View style={styles.container}>
        <Animated.Image source={require('../images/logo.png')} 
          style={{...styles.logo, opacity: this.state.logoOpacity}}/>
        <Animated.Text style={{...styles.title, marginTop: this.state.titleMarginTop}}>
            Sharing your images to everyone
        </Animated.Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK_LIGHT    
  },
  logo: {
    width: 130, 
    height: 130, 
    borderRadius: 130 / 2,    
  },
  title: {
    color: 'white',
    color: COLOR_PINK_MEDIUM,
    marginTop: 10,    
    textAlign: 'center',
    width: 400,
    fontSize: 21
  },
})
