import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { HeaderBackButton } from 'react-navigation';
import Book from './Book';
import BookDescription from './Books/BookDescription';
import BookLike from './Books/BookLike';
import BookPriceRate from './Books/BookPriceRate';
import BookRate from './Books/BookRate';
import BookShop from './Books/BookShop';
import BookAuthor from './Books/BookAuthor';
import BookPages from './Books/BookPages';

export default class Detail extends Component {
	constructor(props) {
		super(props);

	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerStyle: styles.header,
			headerTitle: ('Design Books'),
			headerRight: (<Icon color="#2C2605" name='search' />),
			headerLeft: (
				<Icon color="#2C2605" name='keyboard-backspace' onPress={() => navigation.goBack(null)} />
			),

			headerTitleStyle: styles.headerTitle,
			headerLeftContainerStyle: styles.headerMenu,
			headerRightContainerStyle: styles.headerSearch,
		}
	};


	render() {

		let book = this.props.navigation.getParam('book');

		debugger;
		if (!book) {
			return (
				<View />
			);
		}
		book = book.volumeInfo;
		const { title, description, imageLinks, pageCount, price = "9,99", authors, maturityRating } = book;

		return (
			<View style={styles.container}>
				<View style={styles.bookHeader}>
					<View style={{}}>
						<Image style={{ width: 100, height: 130 }} source={{ uri: imageLinks.smallThumbnail }} />
					</View>

					<View style={{ marginLeft: 23 }}>
						<BookDescription title={title} />
						<BookAuthor author={authors} style={{ flex: 1 }} />

						<BookPriceRate book={{ price, maturityRating }} style={{ flex: 1 }} />
					</View>
				</View>

				<View style={styles.bookShop}>
					<BookPages pages={pageCount} style={{ marginLeft: 36 }} />
					<BookShop />
				</View>
				<Text style={styles.text}>{description}</Text>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
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
	},
	bookHeader: {
		backgroundColor: '#FFDD0D',
		flexDirection: 'row',
		paddingHorizontal: 18,
		paddingTop: 40
	},
	bookShop: {
		backgroundColor: '#FFDD0D',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 25
	},
	text: {
		marginHorizontal: 17,
		marginVertical: 31,
		color: "#4F565D",
		fontSize: 14,
		lineHeight: 30,
		fontFamily: 'Roboto-Regular',
	}
});
