import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>Profile!</Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.Profile}>This is Profile Screen!</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Profile: {
    fontSize: 20
  }
});