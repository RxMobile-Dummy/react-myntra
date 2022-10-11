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
import styles from './AddressStyle';
import {Props} from './IAddress';
import {Images} from '../../assets/images';
import {String} from '../../constants/String';
import TransButton from '../../components/Button/TransButton';
import Modal from 'react-native-modal';
import {Colors} from '../../constants/Color';
import {CardInputField} from '../../components/text_input/CardInput';
import {AddressesDummy} from '../../constants/AddressesDummy';
import AddressData from '../../components/Address/AddressData';
import RadioGroup from 'react-native-radio-buttons-group';
import {CheckBox} from 'react-native-elements';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Home',
    value: 'HOME',
  },
  {
    id: '2',
    label: 'Office',
    value: 'OFFICE',
  },
];

const AddressScreen: React.FC<Props> = ({navigation}) => {
  const [isAddressAvailable, setAddressAvailable] = useState(true);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddAddressVisible, setAddAddressVisible] = useState(false);

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [checked, setChecked] = useState(false);

  function onPressRadioButton(radioButtonsArray: any) {
    setRadioButtons(radioButtonsArray);
  }

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

  const onAddAddressClick = () => {
    setAddAddressVisible(true);
  };

  const onCancelAddAddressPress = () => {
    setAddAddressVisible(false);
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

  if (isAddAddressVisible) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.cardInputCon}>
              <Text style={styles.title}>{String.addNewAddress}</Text>

              <CardInputField
                placeholder="Name *"
                onTextChange={setText}
                onBlur={setText}
                value={text}
              />
              <CardInputField
                placeholder="Mobile *"
                onTextChange={setText}
                onBlur={setText}
                value={text}
              />
              <View style={styles.cardInputSecondRow}>
                <CardInputField
                  placeholder="Pincode *"
                  onTextChange={setText}
                  onBlur={setText}
                  containerStyle={{width: '45%'}}
                  value={text}
                />
                <CardInputField
                  placeholder="State *"
                  onTextChange={setText}
                  onBlur={setText}
                  value={text}
                  containerStyle={{width: '45%'}}
                />
              </View>
              <CardInputField
                placeholder="Address (House No, Building, Street, Area) *"
                onTextChange={setText}
                onBlur={setText}
                value={text}
              />
              <CardInputField
                placeholder="Locality/Town *"
                onTextChange={setText}
                onBlur={setText}
                value={text}
              />
              <CardInputField
                placeholder="City/District *"
                onTextChange={setText}
                onBlur={setText}
                value={text}
              />
              <Text
                style={[
                  styles.title,
                  {marginStart: 10, fontWeight: '400', marginBottom: 10},
                ]}
              >
                {String.typeAddress}
              </Text>

              <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                layout="row"
              />

              <CheckBox
                title="Make this as my default address"
                checked={checked}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <View style={styles.cardInputBottom}>
                <TouchableOpacity
                  style={[styles.bottomButtons, {width: '25%'}]}
                  onPress={onCancelAddAddressPress}
                >
                  <Text style={styles.bottomButtonText}>{String.Cancel}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.bottomButtons,
                    {
                      width: '65%',
                      backgroundColor: Colors.green,
                      borderColor: Colors.green,
                    },
                  ]}
                >
                  <Text
                    style={[styles.bottomButtonText, {color: Colors.white}]}
                  >
                    {String.Save}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
  if (!isAddressAvailable) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.addCardCon}>
          <Image
            style={{height: 120}}
            resizeMode="contain"
            source={Images.AddressImage}
          />
          <Text style={styles.title}>{String.addressTitle}</Text>
          <Text style={styles.subTitle}>{String.addressSubTitle}</Text>
          <TransButton onPress={onAddAddressClick} text={String.addAddress} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>{String.savedAddress}</Text>
        <TransButton onPress={onAddAddressClick} text={String.addAddress} />
      </View>
      <ScrollView>
        <View>
          {AddressesDummy.map((card: any, index: any) => {
            return (
              <AddressData
                data={card}
                key={index}
                index={index}
                onPressEdit={onPressEdit}
                onPressRemove={onPressRemove}
              />
            );
          })}
        </View>
      </ScrollView>
      {removeDialog()}
    </SafeAreaView>
  );
};

export default AddressScreen;
