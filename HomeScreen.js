import React, {Component} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class HomeScreen extends Component{
	static navigationOption = {
		header:null
	}

render (){
	return (
		<View style={styles.container}>
		<Button title= "Go To Back Login Screen"
		onPress= {() => this.props.navigation.goBack()}/>

	</View>
	);
	}
}
export default HomeScreen;
const styles =StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center'

	}
});