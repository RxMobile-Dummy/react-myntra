import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Color';
import {String} from '../../constants/String';

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
    name,
    address,
    locality,
    city,
    pinCode,
    state,
    mobileNo,
    isDefault,
    addressType,
  } = data;
  return (
    <View>
      {isDefault ? (
        <Text style={[styles.title, {marginTop: 15, marginStart: 10}]}>
          {String.defaultAddress}
        </Text>
      ) : (
        <Text style={[styles.title, {marginTop: 15, marginStart: 10}]}>
          {String.otherAddress}
        </Text>
      )}

      <View style={styles.container}>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textData}>{name}</Text>
            <Text style={styles.textData}>{addressType}</Text>
          </View>
          <Text style={[styles.title, {marginTop: 15}]}>{locality}</Text>
          <Text style={styles.title}>{`${city} - ${pinCode}`}</Text>
          <Text style={styles.title}>{`${address} ${state}`}</Text>
          <Text
            style={[styles.title, {marginTop: 15}]}
          >{`Mobile: ${mobileNo}`}</Text>
        </View>
        <View style={styles.bottomCon}>
          <TouchableOpacity
            onPress={() => {
              onPressEdit(index);
            }}
            style={styles.bottomBtn}
          >
            <Text style={styles.btnText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressRemove(index);
            }}
            style={[
              styles.bottomBtn,
              {borderLeftColor: Colors.lightGrey, borderLeftWidth: 1},
            ]}
          >
            <Text style={styles.btnText}>REMOVE</Text>
          </TouchableOpacity>
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
  title: {
    color: Colors.grey,
    fontWeight: '500',
    fontSize: 15,
  },
  textData: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 16,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  bottomCon: {
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
});
