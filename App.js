/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  	'Shake or Press menu button for dev menu',
    
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    	<View style={styles.container}>
		<Image style={{width: 200, height: 250}} 
        source={require('./intan.jpg')} />
        <Text style={styles.instructions}>
        Nama : Intan Komariyah
        </Text>
        <Text style={styles.instructions}>
        Kelas : XI RPL 1
        </Text>
        <Text style={styles.instructions}>
        No Absen : 16
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0070B3',
  },
  welcome: {
  	fontSize: 25,
  	textAlign: 'center',
  	margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: 'red',
	fontSize: 18,
    marginBottom: 5,
  },
 
});
