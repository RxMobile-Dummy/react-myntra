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
import React, {useEffect, useState} from 'react';
import styles from './AddressStyle';
import {Props} from './IAddress';
import {Images} from '../../assets/images';
import {String} from '../../constants/String';
import TransButton from '../../components/Button/TransButton';
import Modal from 'react-native-modal';
import {Colors} from '../../constants/Color';
import AddressData from '../../components/Address/AddressData';
import RadioGroup from 'react-native-radio-buttons-group';
import {CheckBox} from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { AddAddress, contactNumberValidation, EditAddress, GetAddressList, isEmpty, nameValidation, pincodeValidation, RemoveAddress, RootState } from 'core';
import showToast from '../../components/Toast';
import InputField from '../../components/InputField/InputField';
import { normalize } from '../../utils/commonStyles';
import Loader from '../../components/Loader';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Home',
    value: 'HOME',
    selected : false
  },
  {
    id: '2',
    label: 'Office',
    value: 'OFFICE',
    selected : false
  },
];

const AddressScreen: React.FC<Props> = (props : any) => {

  const dispatch = useDispatch()

  const {user} = useSelector((state: RootState) => state.auth);

  let { addressListData, addressListError } = useSelector(
    (state: RootState) => state.getAddressListReducer
  );

  const [isAddressAvailable, setAddressAvailable] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddAddressVisible, setAddAddressVisible] = useState(false);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [checked, setChecked] = useState(false);
  let allInfo = {
    name : "",
    mobileNo : "",
    pincode : "",
    adState : "",
    address : "",
    city : "",
    location : "",
    type : ""
  }
  const [info , setInfo] = useState([allInfo])
  const [name, setName] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [pincode, setPincode] = useState("")
  const [adState, setAdState] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  const [type, setType] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [allAddress, setAllAddress] = useState([])
  const [addressId, setAddressId] = useState("")
  const [isEdit , setIsEdit] = useState(false)

  const getAddressList = () => {
    let addressReq = {
      userId : user._id,
      authToken : user.token
    }
    dispatch<any>(GetAddressList(addressReq)).then((res : any) => {
      if(res.status){
        showToast({type : "success", message : "Address fetch successfully"})
        if(res.resultData.length > 0){
          setAddressAvailable(true)
          setAllAddress(res.resultData)
        }
      }
    })
  }

  useEffect(() => {
    getAddressList()
  },[])

  function onPressRadioButton(radioButtonsArray: any) {
    console.log("Radio button is", radioButtonsArray)
    radioButtonsArray.map((item : any) => {
      if(item.selected){
        setType(item.label)
        return item.label
      }
    })
    setRadioButtons(radioButtonsArray);
  }


  const onPressEdit = (index: any) => {

    let allAddressData = allAddress.map((item : any, ind) => {
      console.log("Valeu eueueururr",item.type)
      if(index == ind){
        setName(item.name)
        setMobileNo(item.mobileNo)
        setPincode(item.pinCode)
        setLocation(item.shippingAddress)
        setCity(item.city)
        setAdState(item.state)
        // setType(item.type)
        setAddress(item.billingAddress)
       let radioData = radioButtonsData.map((cur : any) => {
          if(cur.label === item.type){
            console.log("Inside is")
            setType(item.type)
            cur.selected = true
          }
          return cur
        })
        console.log("radioData", radioData)
         setRadioButtons(radioData)
      }
    })
   setAddressId(addressListData[index]._id)
    setIsEdit(true)
    setAddAddressVisible(true)
  };

  const onAddAddressClick = () => {
    setIsEdit(false)
    setAddAddressVisible(true);
  };

  const onCancelAddAddressPress = () => {
    setAddAddressVisible(false);
  };

  const onAddressSave = async () => {
    if(nameValidation("Name",name)){
      showToast({type : "error", message : nameValidation("Name", name)})
      return
    }
    else if(contactNumberValidation(mobileNo)){
      showToast({type : "error", message : contactNumberValidation(mobileNo)})
      return
    }
    else if(isEmpty(pincode)){
      showToast({type : "error", message : "Please enter your pincode"})
      return
    }
    else if(pincodeValidation(pincode)){
      showToast({type : "error", message : pincodeValidation(pincode)})
      return
    }
    else if(adState == ""){
      showToast({type : "error", message : "Please enter state name"})
      return
    }
    else if(address == ""){
      showToast({type : "error", message : "Please enter your address"})
      return
    }
    else if(location == ""){
      showToast({type : "error", message : "Please enter location"})
      return
    }
    else if(city == ""){
      showToast({type : "error", message : "Please enter your city"})
      return
    }
    else if(type == ""){
      showToast({type : "error", message : "Please select your address"})
      return
    }
    else{
      setIsLoading(true)
      console.log("Edit is called")
      if(isEdit){
        let addressRequest = {
          userId: user._id,
          authToken: user.token,
          addressId : addressId,
          name: name,
          mobileNo: mobileNo,
          pinCode: pincode,
          country: user.country,
          state: adState,
          city: city,
          billingAddress: address,
          shippingAddress: location,
          locality: location,
          isDefault: checked,
          type: type
        }
        console.log("Request is", addressRequest)
        await dispatch<any>(EditAddress(addressRequest)).then((res : any) => {
          if(res.status){
            showToast({type : "success", message : "Address updated"})
            setAddAddressVisible(false)
            getAddressList()
          }
          else{
            showToast({type : "error", message : "Please fill correct information"})
          }
        })
      }
      else{
        setIsLoading(true)
        let addressRequest = {
          userId: user._id,
          authToken: user.token,
          name: name,
          mobileNo: mobileNo,
          pinCode: pincode,
          country: user.country,
          state: adState,
          city: city,
          billingAddress: address,
          shippingAddress: location,
          locality: location,
          isDefault: checked,
          type: type
        }
        await dispatch<any>(AddAddress(addressRequest)).then((res : any) => {
          if(res.status){
            console.log("Value of user dataatatataa", res.resultData._id)
            showToast({type : "success", message : "Address added successfully"})
             setAddAddressVisible(false)
             getAddressList()
            setIsLoading(false)
          }
          else{
            showToast({type : "error", message : "Please fill correct data"})
            setIsLoading(false)
          }
        })
      }
     }
  }

 const onOpenModal = (ind : any) => {
  console.log("Value",ind)
  setEditModalVisible(!isEditModalVisible);
   removeDialog(ind)
   setAddressId(addressListData[ind]._id)
  }

  const onDeleteAddress = async (ind : any) => {
    setEditModalVisible(!isEditModalVisible);
    setIsLoading(true)
     const reqData = {
       userId: user._id,
       authToken: user.token,
       addressId : addressId,
     };
     console.log("Messageeee", reqData)
    let removeAddress = await dispatch<any>(RemoveAddress(reqData))
    console.log("Remove address response", removeAddress)
    if(removeAddress.status){
     showToast({type : "success", message : removeAddress.resultData})
     getAddressList()
     setIsLoading(false)
    }
    else{
     showToast({type : "error", message : removeAddress.resultData})
     setIsLoading(false)
    }

 }

  function removeDialog(ind: any) {
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
              onPress={() => onDeleteAddress(ind)}
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
        {
          isLoading && <Loader/>
        }
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.cardInputCon}>
              <Text style={styles.title}>{String.addNewAddress}</Text>
            <View style={{...styles.elContainer,  width : "90%", alignSelf : "center"}}>
                <Text style={styles.elTxt}>Name</Text>
                <InputField
                  value={name}
                  onChange={(name: any) => setName(name)}
                  top={10}
                  placeholder = "Name"
                />
              </View>
              <View style={{...styles.elContainer,  width : "90%", alignSelf : "center"}}>
                <Text style={styles.elTxt}>Mobile</Text>
                <InputField
                  value={mobileNo}
                  onChange={(mobileNo: any) => setMobileNo(mobileNo)}
                  top={10}
                  placeholder = "Mobile No"
                />
              </View>
              <View style={styles.cardInputSecondRow}>
              <View style={{...styles.elContainer,  width : "44%", alignSelf : "center"}}>
                <Text style={styles.elTxt}>Pincode</Text>
                <InputField
                  value={pincode}
                  onChange={(pincode: any) => setPincode(pincode)}
                  top={10}
                  placeholder = "Pincode"
                />
              </View>
              <View style={{...styles.elContainer,  width : "44%", alignSelf : "center"}}>
                <Text style={styles.elTxt}>State</Text>
                <InputField
                  value={adState}
                  onChange={(adState: any) => setAdState(adState)}
                  top={10}
                  placeholder = "State"
                />
              </View>
              </View>
              <View style={{...styles.elContainer,  width : "90%", alignSelf : "center"}}>
                <Text style={styles.elTxt}>Address</Text>
                <InputField
                  value={address}
                  onChange={(address: any) => setAddress(address)}
                  top={10}
                  placeholder = "Address (House No, Building, Street, Area)"
                />
              </View>
              <View style={{...styles.elContainer,  width : "90%", alignSelf : "center"}}>
                <Text style={styles.elTxt}>Locality</Text>
                <InputField
                  value={location}
                  onChange={(location: any) => setLocation(location)}
                  top={10}
                  placeholder = "Locality/town"
                />
              </View>
              <View style={{...styles.elContainer,  width : "90%", alignSelf : "center"}}>
                <Text style={styles.elTxt}>City</Text>
                <InputField
                  value={city}
                  onChange={(city: any) => setCity(city)}
                  top={10}
                  placeholder = "City"
                />
              </View>
              <Text
                style={[
                  styles.title,
                  {marginStart: 20, fontWeight: '400', marginTop: 15, marginBottom : 10},
                ]}
              >
                {String.typeAddress}
              </Text>
                <View style={{marginLeft : normalize(10), marginBottom : normalize(10)}}>

              <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                layout="row"
                // containerStyle={}
              />
                </View>

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
                  onPress={() => onAddressSave()}
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
        {
          isLoading && <Loader/>
        }
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
          {allAddress.map((card: any, index: any) => {
            return (
              <AddressData
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

export default AddressScreen;
