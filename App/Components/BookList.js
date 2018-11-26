
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
            { id: '04', title: "De pé na patrola", descricao: 'Descriçõao do livro', pages: '216', author: 'David Airey', price: '9,99', rate: '3.5', img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d' }
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
        // this.fetchBooks;
        const { bookMargin, bookWidth, books } = this.state;
        return (
            <View style={[styles.container, { marginHorizontal: bookMargin }]} onLayout={this.onLayout} >
                <FlatList
                    data={books}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.goToDetail(item)} >
                            <Book book={item} width={bookWidth} />
                        </TouchableOpacity>
                    }
                />

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
});
