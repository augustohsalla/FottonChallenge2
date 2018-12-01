import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BookDescription extends Component {

    render() {
        return (
            <View>
                <Text style={styles.bookTitle}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bookTitle: {
        color: '#2C2605',
        textAlign: 'left',
        fontSize: 20,
        fontFamily: 'Roboto',
        width: 210
    }
});
