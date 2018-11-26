import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import List from './List';


export default class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: null,
		};
	}
	state = {};

	goToList = () => {
		const { navigation } = this.props;
		navigation.navigate('List');
	}

	render() {
		
		return (
			<View style={styles.container}>



				<Button onPress={this.goToList} title="Lista de livros" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFDD0D',
	}
});
