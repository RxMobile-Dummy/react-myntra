import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Color';
import {String} from '../../constants/String';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

export type Props = {
  data: string;
  index: number;
  isSelected?: boolean;
  onPress?: (index: number) => void;
  onPressEdit?: (index: number) => void;
  onPressRemove?: (index: number) => void;
};

const AddressData: React.FC<Props> = ({
  data,
  index,
  isSelected = false,
  onPress = () => null,
  onPressEdit = () => null,
  onPressRemove = () => null,
}) => {
  const {
    iconName,
    orderStatus,
    onDate,
    productImage,
    brandName,
    productName,
    size,
    closedOnDate,
  } = data;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <View style={styles.circle}>
            <Ionicons name={iconName} size={20} color="white" />
          </View>
          <View>
            <Text style={styles.statusText}>{orderStatus}</Text>
            <Text style={styles.textData}>{`On ${onDate}`}</Text>
          </View>
        </View>
        <View style={styles.bottomCon}>
          <View style={styles.nameBrandContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.imageContainer}>
                <FastImage
                  style={{width: 50, height: 80}}
                  source={{
                    uri: productImage,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View>
                <Text style={styles.brandName}>{brandName}</Text>
                <Text style={styles.productName}>{productName}</Text>
                <Text style={styles.productName}>{`Size: ${size}`}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.grey} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddressData;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    margin: 10,
  },
  textData: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: 14,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  bottomCon: {
    padding: 10,
    backgroundColor: Colors.transparentGrey,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  bottomBtn: {
    paddingVertical: 12,
    width: '50%',
  },
  btnText: {
    color: Colors.lightBlue,
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginEnd: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  firstContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: Colors.green,
    fontWeight: '600',
    marginBottom: 3,
    fontSize: 15,
  },
  imageContainer: {},
  nameBrandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandName: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: 15,
  },
  productName: {
    color: Colors.black,
    fontWeight: '300',
    fontSize: 14,
  },
});
