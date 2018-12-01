import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Button, SearchBar, Card, ListItem } from 'react-native-elements';
import { get_books, get_recent_books } from '../redux/actionTypes';
import { getBooks } from '../redux/actions';
import List from './List';

class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: null,
		};
	}
	state = {
		query: '',
	};

	componentDidMount = () => {
		this.props.onLoadBooks(this.state.query);
		this.props.loadRecentBooks();
	}

	goToDetail = (item) => {
		const { navigation } = this.props;
		navigation.navigate('Detail', { book: item });
	}

	goToList = () => {
		const { navigation, books } = this.props;
		if (books) {
			navigation.navigate('List', { books: books });
		}
	}

	keyExtractor = (item, index) => index
	render() {
		const { books } = this.props;
		let categories, volumes;
		if (books) {
			volumes = books.map(book => book.volumeInfo);
			categories = volumes.map(v => v.categories);
			categories = categories.filter(Boolean);
		}

		const { query } = this.state;
		return (
			<View style={styles.container}>
				<StatusBar
					barStyle='dark-content'
					backgroundColor='#FFDD0D'
				/>
				<View style={styles.searchContainer}>
					<SearchBar
						onChangeText={query => this.setState({ query })}
						onCancel={() => this.setState({ query: '' })}
						lightTheme
						value={this.state.query}
						placeholder="Buscar livros"
						platform="ios"
						containerStyle={{ backgroundColor: '#FFDD0D' }}
					/>
					<Text style={styles.text}>Buscando por: </Text>
					{query != '' &&
						<Text style={styles.textQuery}>
							'{query}'
						</Text>
					}

				</View>
				<View style={styles.favBooks}>
					<Button onPress={this.goToList} title="Buscar" />
				</View>

				<View style={styles.favBooks}>
					<Text style={styles.favBooksTitle}>Livros mais acessados</Text>
					<FlatList
						data={this.props.recentBooks} //this.props.books}
						keyExtractor={item => item.id}
						numColumns={1}
						renderItem={
							({ item }) =>
								<TouchableOpacity onPress={() => this.goToDetail(item)} style={{ marginTop: 5 }}>
									<Text style={styles.favBooksText}>{item.volumeInfo.title}</Text>
								</TouchableOpacity>
						}
					/>
				</View>

				<View style={styles.favCategories}>
					<Text style={styles.favCategoriesTitle}>Categorias mais buscadas</Text>
					<FlatList
						data={categories}
						keyExtractor={item => item}
						numColumns={1}
						renderItem={
							({ item }) =>
								<Text style={styles.favCategoriesText}>{item}</Text>
						}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#FFDD0D',
	},
	favBooksTitle: {
		fontSize: 28,
		color: '#3c3c3c',
		textAlign: 'center'
	},
	favCategoriesTitle: {
		fontSize: 26,
		color: '#3c3c3c',
		textAlign: 'center'
	},
	favCategoriesText: {
		fontSize: 14,
		marginTop: 5,
		marginHorizontal: 15,
	},
	favBooksText: {
		fontSize: 14,
		marginTop: 5,
		marginHorizontal: 15,
		textDecorationLine: 'underline'
	},
	searchContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	text: {
		marginLeft: 14,
		fontSize: 14,
		textAlign: 'left',
		color: '#3c3c3c'
	},
	textQuery: {
		fontSize: 20,
		marginLeft: 5,
		marginTop: -5,
		textDecorationLine: 'underline'
	},
	favBooks: {
		paddingVertical: 20,
		paddingHorizontal: 20,
		flex: 1
	},
	favCategories: {
		paddingVertical: 20,
		paddingHorizontal: 20,
		flex: 1

	}
});


mapStateToProps = (state) => {
	const { books, recentBooks, error, fetching } = state.bookReducer;
	return {
		recentBooks: recentBooks,
		books: books,
		error: error,
		loading: fetching
	};
}

mapDispatchToProps = dispatch => {
	return {
		onLoadBooks: () => dispatch({ type: get_books }),
		loadRecentBooks: () => dispatch({ type: get_recent_books })
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
