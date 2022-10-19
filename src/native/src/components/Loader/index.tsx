import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import { Colors } from '../../utils/Color';

const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 9999,
      }}>
      <View
        style={{
          width: 120,
          height: 110,
          borderRadius: 6,
          backgroundColor: Colors.loaderColor,
          zIndex: 999,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          shadowColor: Colors.black,
          shadowOffset: {
            width: 2,
            height: 2,
          },
          elevation: 3,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}>
        <ActivityIndicator size="large" color="#3c5468" style={{zIndex: 100}} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'Arial',
            textAlign: 'center',
            padding: 5,
            marginVertical: 5,
          }}>
          {'Loading'}
        </Text>
      </View>
    </View>
  );
};

export default Loader;
