import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationParams} from './NavigationParams';

import {Colors} from '../constants/Color';
import RegisterScreen from '../screens/Register';
import {String} from '../constants/String';
import Login from '../screens/Login';
import DrawerMenu from './Drawer/DrawerMenu';
import Home from '../screens/Home';
import ProductList from '../screens/ProductList';
import EditProfileScreen from '../screens/EditProfile';

const Stack = createStackNavigator<NavigationParams>();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.accent,
  },
  headerTintColor: Colors.primary,
};

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Dashboard"
        component={DrawerMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerShown: true,
          title: 'Product List',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: true,
          title: 'Edit Profile',
        }}
      />
    </Stack.Navigator>
  );
}
