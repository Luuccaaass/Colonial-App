import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
{/*
Quando conectar ao servidor adicionar aqui uma funcionalidade que apresente uma tela 
*/}


export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{height: 70, backgroundColor: '#962624'}}>
          <Image style={{height: 64, width: 64, alignSelf: 'center'}} source={require('./src/imagens/logo.png')}/>
        </View>
        <Image style={{width: 200, height: 200, borderRadius: 10, alignSelf: 'center', marginTop: 20}} source={require('./src/imagens/unnamed.jpg')}/>
        <Text style={{fontSize: 25, marginLeft: 15, marginRight: 15, marginTop: 10}}>Nome: N/A</Text>
        <Text style={{fontSize: 25, marginLeft: 15, marginRight: 15, marginTop: 10}}>Número: N/A</Text>
        <Text style={{fontSize: 25, marginLeft: 15, marginRight: 15, marginTop: 10}}>Série: N/A</Text>
        <Text style={{fontSize: 25, marginLeft: 15, marginRight: 15, marginTop: 10}}>RA: N/A</Text>
        <Text style={{fontSize: 25, marginLeft: 15, marginRight: 15, marginTop: 10}}>Escola: N/A</Text>
      </View>
    );
  }
}
