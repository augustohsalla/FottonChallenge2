
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Card, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Book from './Book';
export default class BookList extends Component {
    state = {
        books: [
            { id: '01', title: "Titulo do livro", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '02', title: "Livro 2", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '03', title: "Fábulas Fabulistícas", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '04', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '05', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/76b1/9690/fdb9ce310bc9cd305451e354f0c3c5b5' },
            { id: '06', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '07', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/76b1/9690/fdb9ce310bc9cd305451e354f0c3c5b5' },
            { id: '08', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '09', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '10', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '11', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' },
            { id: '12', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' }
        ]
    };

    goToDetail = (item) => {
        const { navigation } = this.props;
        navigation.navigate('Detail', { book: item });
    }

    bookMargin = (widthTotal, n) => {
        return 10 * n + 1 / widthTotal;
    }

    onLayout = (event) => {
        //numColumn based on device screen ?
        const bookMargin = this.bookMargin(event.nativeEvent.layout.width, 3);

        this.setState({
            bookWidth: 10 * bookMargin,
            bookMargin: bookMargin,
        })
    }

    render() {

        const { bookMargin, bookWidth } = this.state;
        const { books } = this.props;

        return (
            <View style={styles.container} >
                <FlatList
                    style={styles.flatList}
                    data={this.props.books}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.goToDetail(item)} >
                            <Book book={item.volumeInfo} width={bookWidth} />
                        </TouchableOpacity>
                    }
                />
            </View >
        );

    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    flatList: {
        // marginTop: 35,

    }
});
