import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Images} from './../../Constants';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../../constants/Color';
import CustomDrawer from './CustomDrawer';
import Login from '../../screens/Login';
import RegisterScreen from '../../screens/Register';
import {Props} from '../../screens/Register/ISignUp';
import Home from '../../screens/Home';
import CardScreen from '../../screens/Cards';
import AddressScreen from '../../screens/Address';
import ProfileScreen from '../../screens/Profile';
import OrdersScreen from '../../screens/Orders';

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
          backgroundColor: 'transparent',
          borderBottomColor: Colors.lightGrey,
          borderBottomWidth: 1,
        },
        headerTintColor: Colors.black,
        drawerActiveBackgroundColor: Colors.lightPink,
        drawerActiveTintColor: Colors.black,
        headerRight: () => (
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconStyle}>
              <AntDesign name="search1" size={26} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconStyle}>
              <SimpleLineIcons name="heart" size={24} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => {
                console.log('drawer');
              }}
            >
              <SimpleLineIcons name="bell" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => {
                console.log('drawer');
              }}
            >
              <SimpleLineIcons name="bag" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ),
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
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
          headerRight: () => {
            return <></>;
          },
        }}
      />
      <Drawer.Screen
        name="Cards"
        component={CardScreen}
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name="card-outline" size={size} color={color} />;
          },
          headerRight: () => {
            return <></>;
          },
        }}
      />
      <Drawer.Screen
        name="Addresses"
        component={AddressScreen}
        options={{
          drawerIcon: ({color, size}) => {
            return (
              <Ionicons name="location-outline" size={size} color={color} />
            );
          },
          headerRight: () => {
            return <></>;
          },
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          drawerIcon: ({color, size}) => {
            return (
              <Ionicons
                name="md-reorder-four-outline"
                size={size}
                color={color}
              />
            );
          },
          headerRight: () => {
            return <></>;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {marginHorizontal: 5},
  iconContainer: {flexDirection: 'row', marginEnd: 10},
});

export default DrawerMenu;
