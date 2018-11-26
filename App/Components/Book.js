import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class Book extends Component {
    render() {
        const { book } = this.props;
        return (
            <Image style={{ flex: 1, margin: 1 }}
                height={130} width={this.props.width ? this.props.width : 100}
                source={{ uri: book.img }} />
        );
    }
}

