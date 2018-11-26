import React, { Component } from 'react';
import { Text } from 'react-native';


export default class BookPages extends Component {
    render() {
        return (
            <Text style={{ fontFamily: 'roboto', fontSize: 14, textAlign: 'center', color: '#9F8B0C', marginLeft: 36, marginTop: 5 }}>
                {this.props.pages} pages
            </Text>
        );
    }
}

