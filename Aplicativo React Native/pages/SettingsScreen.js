import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>Setting!</Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.Setting}>This is Setting Screen!</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Setting: {
    fontSize: 20
  }
});