import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BookLike extends Component {
    render() {
        return (
            <Icon
                reverse
                name='heart'
                size={15}
                color='white'
            />
        );
    }
}

