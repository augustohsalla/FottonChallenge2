import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Rating } from 'react-native-elements';
const star = require('./../../../assets/img/star.png')


export default class BookPriceRate extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={{ color: '#2C2605', fontSize: 20, fontFamily: 'roboto', textAlign: 'left', marginRight: 12 }}>
                    ${this.props.book.price}
                </Text>

                <Rating
                    type='custom'
                    ratingImage={star}
                    ratingColor='#4C4309'
                    ratingBackgroundColor='#E4C81B'
                    ratingCount={5}
                    imageSize={14}
                    style={{ paddingVertical: 10 }}
                />
            </View>
        );
    }
}

