import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class BookShop extends Component {
    render() {
        return (
            <View style={{ paddingHorizontal: 91, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Button
                    title="BUY"
                    titleStyle={{ fontSize: 13, textAlign: 'center', color: '#FFFFFF' }}
                    buttonStyle={{
                        backgroundColor: '#4A90E2',
                        width: 116,
                        height: 36,
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        borderColor: '#4A90E2',
                        marginRight: 18

                    }}
                />

                <Icon
                    raised
                    name='heart'
                    size={15}
                    color='#DC4B5D'
                />

            </View>
        );
    }
}

