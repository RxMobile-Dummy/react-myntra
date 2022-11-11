import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Toast, { ErrorToast } from 'react-native-toast-message';
import styles from './styles';
import { Props, CountryCode, Country } from './ISignUp';
import { TextInputField } from '../../components/text_input/TextInputField';
import { String } from '../../constants/String';
import CountryPicker from 'react-native-country-picker-modal';
import CutomButton from '../../components/Button/CutomButton';
import { normalize } from '../../utils/commonStyles';
import { Colors } from '../../constants/Color';
import { useDispatch, useSelector } from 'react-redux';
import { confirmPasswordValidation, contactNumberValidation, dobValidation, emailValidation, isLoggedIn, isRegister, nameValidation, passwordValidation, Register, RootState, userData } from 'core';
import showToast from '../../components/Toast';
import Loader from '../../components/Loader';

const genderList = [
  {
    name: "Male"
  },
  {
    name: "Female"
  },
  {
    name: "Others"
  }
]

const RegisterScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch()
  const { data, error } = useSelector(
    (state: RootState) => state.registerReducer
  );
  const { loginData, token } = useSelector((state: RootState) => state.auth);
  const { logoutData, logoutError, logoutState } = useSelector(
    (state: RootState) => state.logoutReducer
  );

  const [isLoading, setLoading] = useState(false);
  const [isPicker, setCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('IN')
  const [country, setCountry] = useState<Country>()
  const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(
    false,
  )
  const [withFlag, setWithFlag] = useState<boolean>(true)
  const [withEmoji, setWithEmoji] = useState<boolean>(true)
  const [withFilter, setWithFilter] = useState<boolean>(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false)
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [dob, setDOB] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [gender, setGender] = useState("")

  const initialValue = {
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    country: '',
  };



  const onRegister =  async () => {
    console.log("::::::::Email", email)
    if(nameValidation("Name", fullName)){
        showToast({type : "error", message : nameValidation("Name", fullName)})
        return
    }
    else if(emailValidation(email)){
      showToast({type : "error", message : emailValidation(email)})
        return
    }
    else if(gender == ""){
      showToast({type : "error", message : "Please choose your gender"})
      return
    }
    else if(contactNumberValidation(mobileNo)){
      showToast({type : "error", message : contactNumberValidation(mobileNo)})
        return
    }
    else if(dobValidation(dob)){
      showToast({type : "error", message : dobValidation(dob)})
      return
    }
    else if(passwordValidation(password)){
      showToast({type : "error", message : passwordValidation(password)})
      return
    }
    else if(confirmPasswordValidation(confirmPassword, password)){
      showToast({type : "error", message : confirmPasswordValidation(confirmPassword, password)})
      return
    }
    else{
      console.log("Inside if")
      setLoading(true)
      let registerRequest = {
        customerName: fullName,
        email: email,
        contactNumber: mobileNo,
        gender: gender,
        dob: dob,
        country: country == undefined ? "India" : country.name,
        password: password,
        role: "user",
        isVerified: false,
        fcmToken: "348723784238",
        deviceId: "3243242asdsa",
        platform: Platform.OS
      }
      await dispatch<any>(Register(registerRequest)).then((result : any) => {
        console.log("Result", result)
        if(result.status){
          showToast({type : "success", message : "User Register successfully"})
          setLoading(false)
          dispatch<any>(userData(result.responseData))
          dispatch<any>(isLoggedIn(true))
          dispatch<any>(isRegister(true))
          navigation.navigate("Dashboard")
        }
      })
      setLoading(false)
    }

  }

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  const onGender = (name : string) => {
    setGender(name)
  }


  return (
    <SafeAreaView style={styles.container}>
      {
        isLoading && <Loader/>
      }
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View>
              <Image
                source={{
                  uri: 'https://constant.myntassets.com/pwa/assets/img/banner_login_landing_300.jpg',
                }}
                style={styles.img}
                resizeMode="cover"
              />
              <Formik
                initialValues={initialValue}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={values => {
                  console.log(values);
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <View style={styles.formStyle}>
                    <TextInputField
                      placeholder="Full Name"
                      onTextChange={(fullName: string) => setFullName(fullName)}
                      onBlur={handleBlur('fullName')}
                      value={fullName}
                    />
                    <TextInputField
                      placeholder="Email"
                      onTextChange={(email : string) => setEmail(email)}
                      onBlur={handleBlur('email')}
                      value={email}
                    />
                    <View style={{ width: "80%", marginTop: normalize(5), marginBottom: normalize(5) }}>
                      <Text style={{ fontSize: normalize(14), color: Colors.black }}>Gender</Text>
                      <View style={{ flexDirection: "row", alignItems: "center", marginRight :normalize(10)}}>
                        {
                          genderList.map((item, index) => (
                            <>
                              <TouchableOpacity key={"Gender_" + index} onPress={() => onGender(item.name)} style={{ width: normalize(20), height: normalize(20), borderRadius: normalize(20), marginTop: normalize(8), borderColor: item.name == gender ? Colors.accent : Colors.grey, borderWidth: 1, justifyContent : "center", alignItems : "center" }}>
                             {
                              item.name == gender && <View style={{width : normalize(10), height : normalize(10), borderRadius : normalize(10), backgroundColor : Colors.accent}} />
                             }

                              </TouchableOpacity>
                              <Text style={{ paddingTop: normalize(8), paddingLeft: normalize(6), marginRight : normalize(15),fontSize: normalize(12), color: Colors.black }}>{item.name}</Text>
                            </>
                          ))
                        }

                      </View>
                    </View>
                    <TouchableOpacity style={{ width: "80%", height: normalize(40), borderWidth: .6, borderColor: "#585757", borderRadius: normalize(4), marginTop: 10, justifyContent: "center", paddingLeft: normalize(10) }}>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <CountryPicker
                          {...{
                            countryCode,
                            withFilter,
                            withFlag,
                            withCountryNameButton,
                            withAlphaFilter,
                            withCallingCode,
                            withEmoji,
                            onSelect,
                          }}
                        />
                        {country !== null && (
                          <Text style={{ fontSize: normalize(15), }}>{country == undefined ? "India" : JSON.stringify(country?.name).slice(1, country.name.length - 1)}</Text>
                        )}
                      </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ width: "100%", height: normalize(40), borderWidth: .6, borderColor: "#585757", borderRadius: normalize(4), marginTop: 10, justifyContent: "center", paddingLeft: normalize(10) }}>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <CountryPicker
                          {...{
                            countryCode,
                            withFilter,
                            withFlag,
                            withCountryNameButton,
                            withAlphaFilter,
                            withCallingCode,
                            withEmoji,
                            onSelect,
                          }}
                        />
                        {country !== null && (
                          <Text style={{ fontSize: normalize(15), }}>{country == undefined ? "India" : JSON.stringify(country?.name)}</Text>
                        )}
                      </View>
                    </TouchableOpacity> */}
                    <TextInputField
                      placeholder="Mobile Number"
                      onTextChange={(mobileNo : string) => setMobileNo(mobileNo)}
                      onBlur={handleBlur('mobileNumber')}
                      value={mobileNo}
                    />
                    <TextInputField
                      placeholder="DOB (DD/MM/YYYY)"
                      onTextChange={(dob : string) => setDOB(dob)}
                      onBlur={handleBlur('dob')}
                      value={dob}
                    />
                    <TextInputField
                      placeholder="Password"
                      onTextChange={(password : string) => setPassword(password)}
                      onBlur={handleBlur('password')}
                      value={password}
                      isSecure={true}
                    />
                    <TextInputField
                      placeholder="Confirm Password"
                      onTextChange={(confirmPassword : string) => setConfirmPassword(confirmPassword)}
                      onBlur={handleBlur('confirmPassword')}
                      value={confirmPassword}
                      isSecure={true}
                    />

                    <CutomButton
                      containerStyle={{ alignSelf: 'center' }}
                      onPress={() => onRegister()}
                      text={String.SignUp}
                      // disabled={isLoading}
                      // showLoader={isLoading}
                    />
                  </View>
                )}
              </Formik>
              <View style={styles.bottomView}>
                <Text style={styles.bottomText}>
                  {String.AlreadyRegistered}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                >
                  <Text style={styles.signInBtn}>{String.SignIn}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      {/* <CountryPicker
        {...{
          onSelect,
        }}
        containerButtonStyle={{display: 'none'}}
        visible={isPicker}
        withFilter
        onClose={() => {
          setCountryPicker(!isPicker);
        }}
      /> */}
    </SafeAreaView>
  );
};

export default RegisterScreen;
