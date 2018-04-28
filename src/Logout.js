import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Logout extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Logout Component</Text>
                <Text onPress={() => navigate('Login')}>
                    Bam vao day login
                </Text>
            </View>            
        )
    }
}