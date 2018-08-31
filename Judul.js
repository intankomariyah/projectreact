import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
	render(){
		return (
			<Text style={salon.judul}>BIODATA</Text>
		)
	}
}
const salon = {
	judul: {
		color: '#f00',
		fontSize: 30,
		fontWeight: 'bold',
		backgroundColor: '#26ACDB'
	}
}
export default Judul;