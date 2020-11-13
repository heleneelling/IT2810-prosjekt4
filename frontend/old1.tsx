import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Carousel, {MemoizedCarousel} from './src/components/Carousel';
import ItemDisplay from './src/components/ItemDisplay';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const assets = {
	logo: require('./assets/logo_transparent.png'),
	eye: require('./assets/splash2.png')
};
interface IHeaderProps {
	title: string;
}
const Header2 = (props: IHeaderProps) => {
	return (
		<View style={styles.header}>
			<Image source={assets.logo} style={styles.logo} />
			<Icon style={styles.navCart} name="shopping-cart" size={30} color="#fff" />
			<Icon style={styles.navSearch} name="search" size={30} color="#fff" />
		</View>
	);
}
const Header = (props: IHeaderProps) => {
	return (
		<View style={styles.header}>
			<Image source={assets.logo} style={styles.logo} />
			<Icon style={styles.navCart} name="shopping-cart" size={30} color="#fff" />
			<Icon style={styles.navSearch} name="search" size={30} color="#fff" />
		</View>
	);
}
const Footer = () => {
	return (
		<View style={styles.footer}>
			<Text style={{textAlign: 'center'}}>Venti</Text>
		</View>
	);
}

const Splash = () => {
	return (
		<View style={styles.splash}>
			<Image source={assets.eye} style={styles.eye} />
			
		</View>
	);
}

export default function App() {
	const [value, onChangeText] = useState('placeholder');
	return (
	<View style={styles.container}>
		<Header title="Hello"/>
		<ScrollView style={styles.container}>
			<Splash />
			<Text style={styles.h1}>News</Text>
			<MemoizedCarousel />

			<Text style={styles.h1}>Shopping</Text>
			<View style={styles.filterSort}>
				<Text style={styles.filter}>Filter</Text>
				<Text style={styles.sort}>Sort</Text>
			</View>
			<View style={{alignItems: 'center', justifyContent: 'center',  marginBottom: 10}}>
				<TextInput style={styles.input}
				  onChangeText={text => onChangeText(text)} value={value}
				/>
			</View>

			<Footer />
			<View style={styles.split}></View>
			<StatusBar style="auto" />
		</ScrollView>
	</View>
	);
}
const styles = StyleSheet.create({
	container: {
		height: windowHeight,
		backgroundColor: '#fff',
		margin: 0,
		padding: 0,
		marginTop: Constants.statusBarHeight,
	},
	split: {
		marginBottom: 100,
	},
	filterSort: {
		justifyContent: 'center',
		flexDirection: 'row',
	},
	filter: {
		backgroundColor: 'pink',
		width: '10%',
	},
	sort: {
		backgroundColor: 'tomato',
		width: '80%'
	},
	header: {
		position: 'absolute',
		top: 0,
		height: 60,
		width: '100%',
		padding: 15,
		zIndex: 1,
		backgroundColor: 'darkslateblue',
	},
	input: {
		width: '90%',
		height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 5,
		margin: 0,
	},
	eye: {
		flex: 1,
		height: 60,
		resizeMode: 'contain'
	},
	h1: {
		fontSize: 26,
		textAlign: 'center',
	},
	splash: {
		marginTop: 60,
		backgroundColor: 'pink',
		marginBottom: 10,
		height: windowHeight-60,
	},
	splashText: {
		fontSize: 32,
		color: '#fff',
		fontWeight: '500',
	},
	splashText2: {
		fontSize: 32,
		color: '#000',
		fontWeight: '500',
	},
	logo: {
		position: 'absolute',
		flex: 1,
		height: 80,
		width: 80,
		top: -10,
		left: 10,
		resizeMode: 'contain'
	},
	navCart: {
		position: 'absolute',
		flex: 1,
		right: 20,
	},
	navSearch: {
		position: 'absolute',
		flex: 1,
		right: 55,
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		height: 60,
		width: '100%',
		padding: 15,
		marginTop: 50,
		backgroundColor: 'darkslateblue',
	},
});
