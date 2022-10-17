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
import React, {useState} from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';
import Toast, {ErrorToast} from 'react-native-toast-message';
import styles from './styles';
import {Props} from './ISignUp';
import {TextInputField} from '../../components/text_input/TextInputField';
import {String} from '../../constants/String';
import CountryPicker from 'react-native-country-picker-modal';
import CutomButton from '../../components/Button/CutomButton';

const RegisterScreen: React.FC<Props> = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [isPicker, setCountryPicker] = useState(false);
  const [country, setCountry] = useState('');

  const toastConfig = {
    error: (props: any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 13,
        }}
        text1NumberOfLines={3}
      />
    ),
  };

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
  const onSelect = (country: any) => {
    // setCountryCode(country.cca2)
    // setCountry(country)
    setCountryPicker(false);
    console.log(country);
    setCountry(country.name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View>
              {/* <Animated.View
                style={{
                  opacity: fadeAnim,
                }}
              >
                <Image
                  source={Images.appIcon}
                  style={[styles.logo]}
                  resizeMode={'contain'}
                />
              </Animated.View> */}
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
                  // handleSignUp(values);
                }}
                // validationSchema={validationSchema}
              >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <View style={styles.formStyle}>
                    <TextInputField
                      placeholder="Full Name"
                      onTextChange={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                    />
                    <TextInputField
                      placeholder="Email"
                      onTextChange={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setCountryPicker(true);
                      }}
                      style={{width: '100%', alignItems: 'center'}}
                    >
                      <TextInputField
                        placeholder="County"
                        value={country}
                        disabled={true}
                      />
                    </TouchableOpacity>
                    <TextInputField
                      placeholder="Mobile Number"
                      onTextChange={handleChange('mobileNumber')}
                      onBlur={handleBlur('mobileNumber')}
                      value={values.mobileNumber}
                    />
                    <TextInputField
                      placeholder="DOB (DD/MM/YYYY)"
                      onTextChange={handleChange('dob')}
                      onBlur={handleBlur('dob')}
                      value={values.dob}
                    />
                    <TextInputField
                      placeholder="Password"
                      onTextChange={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      isSecure={true}
                    />
                    <TextInputField
                      placeholder="Confirm Password"
                      onTextChange={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      isSecure={true}
                    />
                    <TextInputField
                      placeholder="Mobile Number"
                      onTextChange={handleChange('mobileNumber')}
                      onBlur={handleBlur('mobileNumber')}
                      value={values.mobileNumber}
                    />
                    <CutomButton
                      containerStyle={{alignSelf: 'center'}}
                      onPress={handleSubmit}
                      text={String.SignUp}
                      disabled={isLoading}
                      showLoader={isLoading}
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
      <Toast config={toastConfig} />
      <CountryPicker
        {...{
          onSelect,
          onClose: () => {
            setCountryPicker(false);
          },
        }}
        containerButtonStyle={{display: 'none'}}
        visible={isPicker}
        withFilter
        onClose={() => {
          setCountryPicker(false);
        }}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
