import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationParams} from './NavigationParams';

import {Colors} from '../constants/Color';
import RegisterScreen from '../screens/Register';
import Login from '../screens/Login';
import DrawerMenu from './Drawer/DrawerMenu';
import Home from '../screens/Home';
import ProductList from '../screens/ProductList';
import ProductCheckout from '../screens/ProductCheckout';
import EditProfileScreen from '../screens/EditProfile';
import ForgetPassword from '../screens/ForgetPassword';
import WishList from '../screens/Wishlist';
import Bag from '../screens/Bag';

const Stack = createStackNavigator<NavigationParams>();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    elevation: 10,
  },
  headerTintColor: Colors.black,
};

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Bag"
        component={Bag}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DrawerMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductCheckout"
        component={ProductCheckout}
        options={{
          headerShown: true,
        }}
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
        name="ForgotPassword"
        component={ForgetPassword}
        options={{
          headerShown: true,
          title: 'Forgot Password',
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
