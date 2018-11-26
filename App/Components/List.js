import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import BookList from './BookList'

export default class List extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: styles.header,
            headerTitle: ('Design Books'),
            headerRight: (<Icon color="#2C2605" name='search' />),
            headerLeft: (<Icon color="#2C2605" name='menu' />),
            headerTitleStyle: styles.headerTitle,
            headerLeftContainerStyle: styles.headerMenu,
            headerRightContainerStyle: styles.headerSearch,
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor='#FFDD0D'
                />
                <BookList navigation={this.props.navigation} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFDD0D',
    },
    header: {
        backgroundColor: '#FFDD0D'
    },
    headerMenu: {
        marginLeft: 18
    },
    headerSearch: {
        marginRight: 18
    },
    headerTitle: {
        top: 7,
        paddingBottom: 10,
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        fontStyle: 'normal',
        lineHeight: 23,
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#F0D10F'
    }
});



