import React, { useEffect, useState } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Images} from '../../assets/images';
import {Colors} from '../../constants/Color';
import {ExpandableListView} from 'react-native-expandable-listview';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategoryListActionCreator, isLoggedIn, Logout, RootState, userData } from 'core';
import Loader from '../../components/Loader';
import showToast from '../../components/Toast';
import { CommonActions, useNavigation } from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const CustomDrawer = (props : any) => {
    const dispatch = useDispatch()
    const { loginData, user, token} = useSelector((state: RootState) => state.auth);

    const [isLoading, setIsLoading] = useState(false)
    const [mnCategory, setMnCategory] = useState([])

  function handleItemClick({index}: any) {
    console.log(index);
  }

  const allMainCategory = async () => {
    setIsLoading(true)
    let userRequest = {
      authToken : user.token
    }
    let allMainResponse = await dispatch<any>(GetCategoryListActionCreator(userRequest))
    if(allMainResponse.status){
      showToast({type : "success", message : "Main category fetch successfully"})
     let arrayObj = allMainResponse.resultData.map((item:any) => {
      if(item.category.length <= 0){
        let obj = {
          id : item._id,
          categoryName : item.mainCategory,
          subCategory: item.category.concat({
            name : "",
            id : ""
          })
        }
        return obj
      }
      else{
        return {
          id : item._id,
          categoryName : item.mainCategory,
          subCategory: item.category.map((cur : any) => {
            return {
              name : cur.Categoryname,
              id : cur._id
            }
          })
        };
      }
      });
      setMnCategory(arrayObj)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    allMainCategory()
  },[])

  function handleInnerItemClick(itemData: any) {
    const {innerItemIndex, itemIndex, item} = itemData;
     console.log(":Item",itemData);
    console.log(innerItemIndex);
    console.log(itemIndex);
    console.log(item.subCategory[innerItemIndex].id);
    props.navigation.navigate('ProductList');
  }

  const onSignout = async () => {
    setIsLoading(true)
    let signoutParams = {
      userId : user._id,
      authToken : user.token
    }
    dispatch<any>(Logout(signoutParams)).then((result : any) => {
      if(result.status){
        showToast({type : "success", message : "User logout successfully"})
        dispatch<any>(isLoggedIn(false))
        dispatch<any>(userData({}))
        props.navigation.dispatch(
          CommonActions.reset({
            routes: [
              { name: 'Login' },
            ],
          })
        );
      }
    })
    setIsLoading(false)
  }

  return (
    <View style={styles.mainContainer}>
      {
        isLoading && <Loader/>
      }
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.conContainer}
      >
        <TouchableOpacity
          style={styles.imgBg}
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
        >
          <View>
            <Image source={Images.ProfileDummy} style={styles.profile} />
            <Text style={styles.userName}>{user.fullName}</Text>
          </View>
        </TouchableOpacity>
        <ExpandableListView
          data={mnCategory} // required
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
        <TouchableOpacity onPress={() => onSignout()} style={styles.shareBtn}>
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
