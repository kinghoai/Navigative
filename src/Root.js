import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Login } from './Login';
import { Logout } from './Logout';
import { StackNavigator } from 'react-navigation';

// export class Root extends Component {
//     render() {
//         return (
//             <View>
//                 <Logout/>
//             </View>            
//         )
//     }
// }

export const Root = StackNavigator({
    Login: {screen: Login},
    Logout: {screen: Logout},
})