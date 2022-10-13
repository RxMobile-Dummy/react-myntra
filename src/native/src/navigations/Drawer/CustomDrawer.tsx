import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Images} from '../../assets/images';
import {Colors} from '../../constants/Color';
import {Props} from './IDrawer';
import {ExpandableListView} from 'react-native-expandable-listview';
import {MenuData} from '../../constants/MenuData';

const CustomDrawer = props => {
  // const CustomDrawer: React.FC<Props> = ({props}) => {

  function handleItemClick({index}: any) {
    console.log(index);
  }

  function handleInnerItemClick(itemData: any) {
    const {innerItemIndex, itemIndex, item} = itemData;
    // console.log(itemData);
    console.log(innerItemIndex);
    console.log(itemIndex);
    console.log(item.subCategory[innerItemIndex].id);
    props.navigation.navigate('ProductList');
  }
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.conContainer}
      >
        <TouchableOpacity
          style={styles.imgBg}
          onPress={() => {
            props.navigation.navigate('Login');
          }}
        >
          <View>
            <Image source={Images.ProfileDummy} style={styles.profile} />
            <Text style={styles.userName}>Login / Signup</Text>
          </View>
          <View>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <ExpandableListView
          data={MenuData} // required
          onInnerItemClick={handleInnerItemClick}
          onItemClick={handleItemClick}
          itemContainerStyle={{backgroundColor: Colors.white}}
          innerItemContainerStyle={{
            backgroundColor: Colors.white,
            marginStart: 20,
          }}
          innerItemLabelStyle={{paddingVertical: 3}}
        />
        <View style={styles.drawerItem}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomBar}>
        {/* <TouchableOpacity style={styles.shareBtn}>
          <View style={styles.shareView}>
            <Ionicons
              name="share-social-outline"
              size={22}
              color={Colors.grey}
            />
            <Text style={styles.shareText}>Tell a friend</Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.shareBtn}>
          <View style={styles.shareView}>
            <Ionicons name="exit-outline" size={22} color={Colors.grey} />
            <Text style={styles.shareText}>Signout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  conContainer: {
    backgroundColor: Colors.primary,
  },
  imgBg: {
    padding: 20,
    backgroundColor: '#3f3947',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  profile: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginBottom: 10,
  },
  userName: {
    color: Colors.btnPink,
  },
  drawerItem: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
  },
  bottomBar: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
  },
  shareBtn: {
    paddingVertical: 15,
  },
  shareView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    fontSize: 15,
    marginLeft: 5,
  },
});

export default CustomDrawer;
