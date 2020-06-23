import React from 'react';
import styled from 'styled-components';
import Entypo from 'react-native-vector-icons/Entypo';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import LiveScreen from './components/screens/LiveScreen';
import ProfileScreen from './components/screens/ProfileScreen';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: '#343434',
    borderTopColor: '#343434',
    paddingBottom: 12,
  },
};

Entypo.loadFont();

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focussed}) => {
          let iconName;

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home';
              break;

            default:
              break;
          }

          return (
            <TabBarIconContainer focussed={focussed}>
              <Entypo name={iconName} size={24} color="#ffffff" />
            </TabBarIconContainer>
          );
        },
      })}>
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const TabBarIconContainer = styled.View``;
