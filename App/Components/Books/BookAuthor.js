import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BookAuthor extends Component {

    render() {
        return (
            <Text style={styles.bookAuthor}>
                {this.props.author}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    bookAuthor: {
        color: '#9F8B0C',
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'Roboto'
    }
});
