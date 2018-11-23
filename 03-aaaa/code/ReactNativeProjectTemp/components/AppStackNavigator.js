/*
Nguyen Duc Hoang (Mr)
Youtube channel: https://www.youtube.com/c/nguyenduchoang
Programming tutorial channel
This is Stack Navigator
*/
import Login from './Login'
import Splash from './Splash'
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
    Splash: {
        screen: Splash
    },
    Login: {
        screen: Login
    },    
}, {
    initialRouteName: "Splash"
})

export default createAppContainer(AppNavigator);