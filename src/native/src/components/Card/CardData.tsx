import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Color';
import {String} from '../../constants/String';

export type Props = {
  data: string;
  index: number;
  isSelected?: boolean;
  onPressEdit?: (index: number) => void;
  onPressRemove?: (index: number) => void;
};

const CardData: React.FC<Props> = ({
  data,
  index,
  isSelected = false,
  onPressEdit = () => null,
  onPressRemove = () => null,
}) => {
  const {
    cardName,
    bankName,
    card,
    cardType,
    cardNumber,
    expiryMonth,
    expiryYear,
  } = data;
  return (
    <View style={styles.container}>
      <View style={{padding: 20}}>
        <View>
          <Text style={styles.title}>{String.cardNumber}</Text>
          <Text style={styles.textData}>{cardNumber}</Text>
        </View>
        <View style={styles.secondRow}>
          <View>
            <Text style={styles.title}>{String.nameOnCard}</Text>
            <Text style={styles.textData}>{cardName}</Text>
          </View>
          <View>
            <Text style={styles.title}>{String.validity}</Text>
            <Text
              style={styles.textData}
            >{`${expiryMonth}/${expiryYear}`}</Text>
          </View>
        </View>
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
  );
};

export default CardData;

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
    fontWeight: '600',
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
