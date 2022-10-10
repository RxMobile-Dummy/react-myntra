import {View, Text, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Images} from './../../Constants';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../constants/Color';
import CustomDrawer from './CustomDrawer';
import Login from '../../screens/Login';
import RegisterScreen from '../../screens/Register';
import {Props} from '../../screens/Register/ISignUp';

// let screenStyle = null;

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  // const DrawerMenu: React.FC<Props> = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // drawerLabelStyle: {
        //   marginLeft: -25,
        // },
        headerStyle: {
          backgroundColor: Colors.accent,
        },
        headerTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.lightPink,
        drawerActiveTintColor: Colors.black,
      }}
    >
      {/* <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      /> */}
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name="timer-outline" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
