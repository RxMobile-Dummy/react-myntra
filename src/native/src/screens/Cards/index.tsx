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
import styles from './CardStyle';
import {Props} from './ICards';
import {String} from '../../constants/String';
import TransButton from '../../components/Button/TransButton';
import {CardsDummy} from '../../constants/CardsDummy';
import CardData from '../../components/Card/CardData';
import Modal from 'react-native-modal';
import {Colors} from '../../constants/Color';
import {CardInputField} from '../../components/text_input/CardInput';
import {Images} from '../../assets/images';

const CardScreen: React.FC<Props> = ({navigation}) => {
  const [isCardAvailable, setCardAvailable] = useState(true);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddCardVisible, setAddCardVisible] = useState(false);

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

  const onAddCardClick = () => {
    setAddCardVisible(true);
  };

  const onCancelAddCardPress = () => {
    setAddCardVisible(false);
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
  if (isAddCardVisible) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.cardInputCon}>
            <Text style={styles.title}>{String.addNewCard}</Text>

            <CardInputField
              placeholder="Card Number *"
              onTextChange={setText}
              onBlur={setText}
              value={text}
            />
            <CardInputField
              placeholder="Card Name *"
              onTextChange={setText}
              onBlur={setText}
              value={text}
            />

            <View style={styles.cardInputSecondRow}>
              <CardInputField
                placeholder="Expiry Month (DD) *"
                onTextChange={setText}
                onBlur={setText}
                containerStyle={{width: '45%'}}
                value={text}
              />
              <CardInputField
                placeholder="Expiry Year (YYYY) *"
                onTextChange={setText}
                onBlur={setText}
                value={text}
                containerStyle={{width: '45%'}}
              />
            </View>
            <View style={styles.cardInputBottom}>
              <TouchableOpacity
                style={[styles.bottomButtons, {width: '25%'}]}
                onPress={onCancelAddCardPress}
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
                <Text style={[styles.bottomButtonText, {color: Colors.white}]}>
                  {String.Save}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
  if (!isCardAvailable) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.addCardCon}>
          <Image source={Images.CardImage} />
          <Text style={styles.title}>{String.cardTitle}</Text>
          <Text style={styles.subTitle}>{String.cardSubTitle}</Text>
          <TransButton onPress={onAddCardClick} text={String.addCard} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>{String.savedCard}</Text>
        <TransButton onPress={onAddCardClick} text={String.addCard} />
      </View>
      <ScrollView>
        <View>
          {CardsDummy.map((card: any, index: any) => {
            return (
              <CardData
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

export default CardScreen;
