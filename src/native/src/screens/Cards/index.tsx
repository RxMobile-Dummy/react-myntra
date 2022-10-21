import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './CardStyle';
import { Props } from './ICards';
import { String } from '../../constants/String';
import TransButton from '../../components/Button/TransButton';
import CardData from '../../components/Card/CardData';
import Modal from 'react-native-modal';
import { Colors } from '../../constants/Color';
import { CardInputField } from '../../components/text_input/CardInput';
import { Images } from '../../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { AddCardInfo, cardMonthValidation, cardNumberValidation, cardYearValidation, EditCardInfo, GetCardInfoList, nameValidation, RemoveCardInfo, RootState } from 'core';
import showToast from '../../components/Toast';
import Loader from '../../components/Loader';

const CardScreen: React.FC<Props> = (props: any) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth);
  let { getCardListData } = useSelector(
    (state: RootState) => state.getCardInfoListReducer
  );

  const [isCardAvailable, setCardAvailable] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddCardVisible, setAddCardVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [name, setName] = useState("")
  const [exmonth, setExMonth] = useState("")
  const [exYear, setExYear] = useState("")
  const [cardData,setCardData] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [editCardID, setEditCardID] = useState("")

  useEffect(() => {
    fetchCards()
  }, [])

  const onPressEdit = (index: any) => {
      cardData.map((item : any, ind : number) => {
        if(index == ind){
          console.log("Item is", item)
          setName(item.cardName)
          setCardNumber(item.cardNumber)
          setExMonth(item.expiryMonth)
          setExYear(item.expiryYear)
        }
      })
      setIsEdit(true)
      setEditCardID(getCardListData[index]._id)
      setAddCardVisible(true);
  };

  const onAddCardClick = () => {
    setAddCardVisible(true);
    setIsEdit(false)
  };

  const onCancelAddCardPress = () => {
    setAddCardVisible(false);
  };

  const fetchCards = async () => {
    let cardRequest = {
      userId: user._id,
      authToken: user.token
    }
    let cardList = await dispatch<any>(GetCardInfoList(cardRequest))
    if (cardList.status) {
      showToast({ type: "success", message: "Card fetch successfully" })
      if (cardList.resultData.length > 0) {
        setCardAvailable(true)
        setCardData(cardList.resultData)
      }
    }
    else {
      showToast({ type: "false", message: "something went wrong" })
    }
  }

  const AddCardDetails = async () => {
    setIsLoading(true)
    if(cardNumberValidation(cardNumber)){
      showToast({type : "error",message : cardNumberValidation(cardNumber) })
      setIsLoading(false)
      return
    }
    else if(nameValidation("name", name)){
      showToast({type : "error",message : nameValidation("name", name) })
      setIsLoading(false)
      return
    }
    else if(cardMonthValidation(exmonth)){
      showToast({type : "error",message : cardMonthValidation(exmonth) })
      setIsLoading(false)
      return
    }
    else if(cardYearValidation(exYear)){
      showToast({type : "error",message : cardYearValidation(exYear) })
      setIsLoading(false)
      return
    }
    else{
      if(isEdit){
        const reqData = {
          userId: user._id,
          authToken: user.token,
           cardInfoId: editCardID,
          cardName: name,
          cardNumber: cardNumber,
          expiryMonth: exmonth,
          expiryYear: exYear,
        };
        let addCardResponse = await dispatch<any>(EditCardInfo(reqData));
        if(addCardResponse.status){
          showToast({type : "success", message : addCardResponse.resultData})
          setIsLoading(false)
          fetchCards()
          setAddCardVisible(false);
        }
        else{
          showToast({type : "error", message : addCardResponse.resultData})
          setIsLoading(false)
        }
      }
      else{
        const reqData = {
          userId: user._id,
          authToken: user.token,
          cardName: name,
          cardNumber: cardNumber,
          expiryMonth: exmonth,
          expiryYear: exYear,
        };
        let addCardResponse = await dispatch<any>(AddCardInfo(reqData));
        if(addCardResponse.status){
          showToast({type : "success", message : addCardResponse.resultData})
          setIsLoading(false)
          fetchCards()
          setAddCardVisible(false);
        }
        else{
          showToast({type : "error", message : addCardResponse.resultData})
          setIsLoading(false)
        }
      }
    }
  }

  const onRemoveCard = async (ind : any) => {
    setIsLoading(true)
    let removeRequest = {
      userId: user._id,
      authToken: user.token,
      cardInfoId : editCardID,
      paymentMethod : "1",
    }
    let removeCard = await dispatch<any>(RemoveCardInfo(removeRequest))
    if(removeCard.status){
      showToast({type : "success", message : removeCard.resultData})
      fetchCards()
      setIsLoading(false)
      setEditModalVisible(!isEditModalVisible);
    }
    else{
      showToast({type : "success", message : removeCard.resultData})
      setIsLoading(false)
      setEditModalVisible(!isEditModalVisible);
    }
  }

  const onOpenModal = (ind : any) => {
    console.log("Value",ind)
    setEditModalVisible(!isEditModalVisible);
     removeDialog(ind)
     setEditCardID(getCardListData[ind]._id)
    }

  function removeDialog(ind : any) {
    return (
      <Modal isVisible={isEditModalVisible} animationOut="fadeOutDown">
        <View style={styles.dialogStyle}>
          <View style={styles.dialogCon}>
            <Text style={styles.dialogTitle}>{String.removeCard}</Text>
            <Text style={styles.textData}>{String.deleteCardMsg}</Text>
          </View>
          <View style={styles.bottomCon}>
            <TouchableOpacity
               onPress={() => setEditModalVisible(!isEditModalVisible)}
              style={styles.bottomBtn}
            >
              <Text style={styles.cancelBtnText}>{String.Cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() =>  onRemoveCard(ind)}
              style={[
                styles.bottomBtn,
                { borderLeftColor: Colors.lightGrey, borderLeftWidth: 1 },
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
        {
          isLoading && <Loader />
        }
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.cardInputCon}>
            <Text style={styles.title}>{String.addNewCard}</Text>
            <CardInputField
              placeholder="Card Number *"
              onTextChange={setCardNumber}
              onBlur={setCardNumber}
              value={cardNumber}
            />
            <CardInputField
              placeholder="Card Name *"
              onTextChange={setName}
              onBlur={setName}
              value={name}
            />

            <View style={styles.cardInputSecondRow}>
              <CardInputField
                placeholder="Expiry Month (DD) *"
                onTextChange={setExMonth}
                onBlur={setExMonth}
                containerStyle={{ width: '45%' }}
                value={exmonth}
              />
              <CardInputField
                placeholder="Expiry Year (YYYY) *"
                onTextChange={setExYear}
                onBlur={setExYear}
                value={exYear}
                containerStyle={{ width: '45%' }}
              />
            </View>
            <View style={styles.cardInputBottom}>
              <TouchableOpacity
                style={[styles.bottomButtons, { width: '25%' }]}
                onPress={onCancelAddCardPress}
              >
                <Text style={styles.bottomButtonText}>{String.Cancel}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => AddCardDetails()}
                style={[
                  styles.bottomButtons,
                  {
                    width: '65%',
                    backgroundColor: Colors.green,
                    borderColor: Colors.green,
                  },
                ]}
              >
                <Text style={[styles.bottomButtonText, { color: Colors.white }]}>
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
        {
          isLoading && <Loader />
        }
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
          {cardData.map((card: any, index: any) => {
            return (
              <CardData
                data={card}
                key={index}
                index={index}
                onPressEdit={onPressEdit}
                onPressRemove={onOpenModal}
              />
            );
          })}
        </View>
      </ScrollView>
      {removeDialog("")}
    </SafeAreaView>
  );
};

export default CardScreen;
