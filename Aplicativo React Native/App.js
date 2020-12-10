import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import ProfileScreen from './pages/ProfileScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {height: 0, backgroundColor: ''
        
      },
      headerTintColor: '#FFFFFF',
      title: '',
    },
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen }
  },
  {
  defaultNavigationOptions: {
    headerStyle: {height: 0, backgroundColor: ''
        
    },
    headerTintColor: '#FFFFFF',
    title: '',
  },
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen }
  },
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Atividades: { screen: ProfileStack},
    Links: { screen: SettingsStack },
    Perfil: { screen: ProfileStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Atividades') {
          iconName = `ios-clipboard`;
        } else if (routeName === 'Links') {
          iconName = `ios-globe`;
        }else if (routeName === 'Perfil') {
          iconName = `ios-contact`;
        }
          
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#962624',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(App);