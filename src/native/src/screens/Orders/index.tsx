import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './OrdersStyle';
import {Props} from './IOrders';
import {Images} from '../../assets/images';
import {String} from '../../constants/String';
import TransButton from '../../components/Button/TransButton';
import Modal from 'react-native-modal';
import {Colors} from '../../constants/Color';
import {SearchInputField} from '../../components/text_input/SearchInputField';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {OrdersDummy} from '../../constants/OrdersDummy';
import OrdersData from '../../components/Orders/OrdersData';

const OrdersScreen: React.FC<Props> = ({navigation}) => {
  const [isOrdersAvailable, setOrdersAvailable] = useState(true);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const [text, setText] = useState('');

  const toggleRemoveModal = () => {
    setEditModalVisible(!isEditModalVisible);
  };

  const onPressEdit = (index: any) => {
    console.log('onPressEdit', index);
  };
  const onPressRemove = (index: any) => {
    console.log('onPressEdit', index);
    toggleRemoveModal();
  };

  function removeDialog() {
    return (
      <Modal isVisible={isEditModalVisible} animationOut="fadeOutDown">
        <View style={styles.dialogStyle}>
          <View style={styles.dialogCon}>
            <Text style={styles.dialogTitle}>{String.removeCard}</Text>
            <Text style={styles.textData}>{String.deleteCardMsg}</Text>
          </View>
          <View style={styles.bottomCon}>
            <TouchableOpacity
              onPress={toggleRemoveModal}
              style={styles.bottomBtn}
            >
              <Text style={styles.cancelBtnText}>{String.Cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleRemoveModal}
              style={[
                styles.bottomBtn,
                {borderLeftColor: Colors.lightGrey, borderLeftWidth: 1},
              ]}
            >
              <Text style={styles.deleteBtnText}>{String.Delete}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  if (!isOrdersAvailable) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.addCardCon}>
          <Image
            style={{height: 120}}
            resizeMode="contain"
            source={Images.delieveryBoy}
          />
          <Text style={styles.title}>{String.ordersTitle}</Text>
          <Text style={styles.subTitle}>{String.ordersSubTitle}</Text>
          <TransButton
            containerStyle={{borderColor: Colors.btnPink}}
            textStyle={{color: Colors.btnPink}}
            onPress={() => {}}
            text={String.startShopping}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <SearchInputField
          value={text}
          onTextChange={setText}
          onBlur={setText}
          placeholder={String.searchInOrder}
        />
        <TouchableOpacity style={styles.filterIcon}>
          <FontAwesome name="sliders" size={20} color="black" />
          <Text style={[styles.textData]}>{String.filter}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          {OrdersDummy.map((card: any, index: any) => {
            return (
              <OrdersData
                data={card}
                key={index}
                index={index}
                onPressEdit={onPressEdit}
              />
            );
          })}
        </View>
      </ScrollView>
      {removeDialog()}
    </SafeAreaView>
  );
};

export default OrdersScreen;
