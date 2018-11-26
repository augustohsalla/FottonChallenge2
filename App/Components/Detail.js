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
		this.state = {
			book:
				{
					id: '01',
					title: "Titulo do livro",
					description: 'Descriçõao do livro',
					pages: '216',
					author: 'David Airey',
					price: '9,99',
					rate: '3.5',
					img: 'https://s3-alpha.figma.com/img/e2cd/e885/223c346752c4ccce3f2f718ef143d42d'
				}
		}
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerStyle: styles.header,
			headerTitle: ('Design Books'),
			headerRight: (<Icon color="#2C2605" name='search' />),
			headerLeft: (
				// <HeaderBackButton onPress={() => navigation.goBack(null)} />
				<Icon color="#2C2605" name='keyboard-backspace' onPress={() => navigation.goBack(null)} />
			),

			headerTitleStyle: styles.headerTitle,
			headerLeftContainerStyle: styles.headerMenu,
			headerRightContainerStyle: styles.headerSearch,
		}
	};


	render() {

		const book = this.props.navigation.getParam('book');

		if (!book) {
			return (
				<View />
			);
		}
		const { title, description, img, pages, price, author, rate } = book;

		return (
			<View style={styles.container}>


				<View style={styles.bookHeader}>

					<View style={{}}>
						<Image style={{ width: 100, height: 130 }} source={{ uri: img }} />
					</View>

					<View style={{ marginLeft: 23 }}>
						<BookDescription title={title} />
						<BookAuthor author={author} style={{ flex: 1 }} />

						<BookPriceRate book={{ price, rate }} style={{ flex: 1 }} />
					</View>


				</View>


				<View style={styles.bookShop}>
					<BookPages pages={pages} style={{ marginLeft: 36 }} />
					<BookShop />
				</View>
				<Text style={styles.text}>Since timemam sm aing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ring and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ring and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more r</Text>

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
