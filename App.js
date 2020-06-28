import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {
    Text
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './android/app/src/main/js/Home';
import Orders from './android/app/src/main/js/Orders';
import Cart from './android/app/src/main/js/Cart';
import Profile from './android/app/src/main/js/Profile';
import Help from './android/app/src/main/js/Help';

import SyncStorage from 'sync-storage';

const Tab = createBottomTabNavigator();

export default class App extends Component
{
    async componentDidMount() {
        await SyncStorage.init();
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                  screenOptions={({route}) => ({
                      tabBarIcon: ({focused, color, size}) => {
                          switch(route.name) {
                              case 'Home': return <MaterialIcons name="home" size={size} />
                              case 'Orders': return <MaterialIcons name="view-list" size={size} />
                              case 'Cart': return <MaterialIcons name="shopping-cart" size={size} />
                              case 'Profile': return <MaterialIcons name="person" size={size} />
                              case 'Help': return <MaterialIcons name="help" size={size} />
                          }
                        }
                    })}
                  tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                  }}>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Orders" component={Orders} />
                    <Tab.Screen name="Cart" component={Cart} />
                    <Tab.Screen name="Profile" component={Profile} />
                    <Tab.Screen name="Help" component={Help} />
                </Tab.Navigator>
            </NavigationContainer>
          );
    }
};
