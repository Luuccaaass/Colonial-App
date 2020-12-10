import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { Constants } from 'expo';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      height: 10,
    };
  }
  
  render() {
    return (
      <View style={styles.root }>
        <ScrollView contentContainerStyle={{ flex: 1}}>
          <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
      }}>
        <View style={{height: 70, backgroundColor: '#962624'}}>
          <Image style={{height: 64, width: 64, alignSelf: 'center'}} source={require('./src/imagens/logo.png')}/>
        </View>
          </View>
          {/*
            adicionar aqui um for, para cada evento adicionar um bloco de informações
          */}
          <View style={{backgroundColor:'lightgray', height: 150, justifyContent: 'top', marginLeft: 10, marginRight: 10, borderRadius: 20, marginTop: 90 }}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={{fontSize: 15, marginLeft: 8, marginTop: 2}}>EVENTO: N/A</Text>
              <Text style={{fontSize: 10, marginLeft: 8, marginTop: 5}}>INFORMAÇÕES: N/A</Text>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 12, marginLeft: 8, marginBottom: 5}}>DATA: N/A</Text>
              </View>
            </View>
          </View>
                    <View style={{backgroundColor:'lightgray', height: 150, justifyContent: 'top', marginLeft: 10, marginRight: 10, borderRadius: 20, marginTop: 10 }}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={{fontSize: 15, marginLeft: 8, marginTop: 2}}>EVENTO: N/A</Text>
              <Text style={{fontSize: 10, marginLeft: 8, marginTop: 5}}>INFORMAÇÕES: N/A</Text>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 12, marginLeft: 8, marginBottom: 5}}>DATA: N/A</Text>
              </View>
            </View>
          </View>
          <View style={{backgroundColor:'lightgray', height: 150, justifyContent: 'top', marginLeft: 10, marginRight: 10, borderRadius: 20, marginTop: 10 }}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={{fontSize: 15, marginLeft: 8, marginTop: 2}}>EVENTO: N/A</Text>
              <Text style={{fontSize: 10, marginLeft: 8, marginTop: 5}}>INFORMAÇÕES: N/A</Text>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 12, marginLeft: 8, marginBottom: 5}}>DATA: N/A</Text>
              </View>
            </View>
          </View>
          <View style={{backgroundColor:'lightgray', height: 150, justifyContent: 'top', marginLeft: 10, marginRight: 10, borderRadius: 20, marginTop: 10 }}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={{fontSize: 15, marginLeft: 8, marginTop: 2}}>EVENTO: N/A</Text>
              <Text style={{fontSize: 10, marginLeft: 8, marginTop: 5}}>INFORMAÇÕES: N/A</Text>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 12, marginLeft: 8, marginBottom: 5}}>DATA: N/A</Text>
              </View>
            </View>
          </View>
          <View style={{backgroundColor:'lightgray', height: 150, justifyContent: 'top', marginLeft: 10, marginRight: 10, borderRadius: 20, marginTop: 10 }}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={{fontSize: 15, marginLeft: 8, marginTop: 2}}>EVENTO: N/A</Text>
              <Text style={{fontSize: 10, marginLeft: 8, marginTop: 5}}>INFORMAÇÕES: N/A</Text>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 12, marginLeft: 8, marginBottom: 5}}>DATA: N/A</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
