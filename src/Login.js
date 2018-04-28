import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Login extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Login Component</Text>
                <Text onPress={() => navigate('Logout')}>
                    Bam vao day log out
                </Text>
            </View>            
        )
    }
}