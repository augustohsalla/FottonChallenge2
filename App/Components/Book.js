import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class Book extends Component {
    render() {
        const { book } = this.props;
        return (
            <View style={{ paddingHorizontal: 15 }}>
                <Image style={{ marginTop: 30 }}
                    height={110}
                    width={this.props.width ? this.props.width : 85}
                    source={{ uri: book.imageLinks.smallThumbnail }} />
            </View>
        );

    }
}

