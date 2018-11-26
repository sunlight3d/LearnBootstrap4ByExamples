/*
Nguyen Duc Hoang (Mr)
Youtube channel: https://www.youtube.com/c/nguyenduchoang
Programming tutorial channel
*/
import {AppRegistry} from 'react-native'
//import Login from './components/Login'
//import Splash from './components/Splash'
import AppStackNavigator from './components/AppStackNavigator'
import {name as appName} from './app.json'
AppRegistry.registerComponent(appName, () => AppStackNavigator)
