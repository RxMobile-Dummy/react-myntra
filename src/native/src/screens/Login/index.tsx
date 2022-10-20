import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import {styles} from './LoginStyle';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputField/InputField';
import {normalize} from '../../utils/commonStyles';
import {Props} from './ILogin';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {emailValidation, isLoggedIn, Login, passwordValidation, RootState, userData} from "core"
import showToast from '../../components/Toast';
import Loader from '../../components/Loader';

const LoginScreen: React.FC<Props> = props => {
  const dispatch = useDispatch()

  const { loginData, error, token } = useSelector((state: RootState) => state.auth);
  const { logoutData, logoutError, logoutState } = useSelector(
    (state: RootState) => state.logoutReducer
  );


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [isToken, setIsToken] = useState(false)

  const onLogin = async () =>{
    console.log("Inside login")
    setIsLoading(true)
    if(emailValidation(email)){
      showToast({type : "error", message : emailValidation(email)})
      setIsLoading(false)
        return
    }
    else if(passwordValidation(password)){
      showToast({type : error, message : passwordValidation(password)})
      setIsLoading(false)
      return
    }
    else{
      let userParams = {
        email : email,
        password : password,
        fcmToken : "",
        deviceId : "",
        role : "user"
      }

     await dispatch<any>(Login(userParams)).then((result: any)=>{
      console.log("result", result)
      if(result.status){
        showToast({type : "success", message : "User login successfully"})
        setIsLoading(false)
        dispatch<any>(userData(result.data))
        dispatch<any>(isLoggedIn(true))
        props.navigation.navigate("Dashboard")
      }
      else{
        setIsLoading(false)
      }
     })
    //  console.log("", response)

    }
  }

  const onRegisterPress = () => {
    props.navigation.navigate('Register');
  };

  const onForgotPasswordClick = () => {
    props.navigation.navigate('ForgotPassword');
  };
  return (
    <LinearGradient colors={['#FEEDF6', '#FCEEE5']} style={{flex: 1}}>
      {
        isLoading && <Loader/>
      }
      <KeyboardAwareScrollView
        enableOnAndroid
        contentContainerStyle={{flex: 1, width: '100%'}}
      >
        <View style={styles.subContainer}>
          <Image
            source={{
              uri: 'https://constant.myntassets.com/pwa/assets/img/banner_login_landing_300.jpg',
            }}
            style={styles.img}
            resizeMode="cover"
          />
          <View style={styles.header}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.lgTxt}>Login</Text>
            </View>
            <View style={styles.box}>
              <View style={styles.elContainer}>
                <Text style={styles.elTxt}>Email</Text>
                <InputField
                  value={email}
                  onChange={(email: any) => setEmail(email)}
                  top={10}
                />
              </View>

              <View style={styles.elContainer}>
                <Text style={styles.elTxt}>Pasword</Text>
                <InputField
                  value={password}
                  onChange={(email: any) => setPassword(email)}
                  top={10}
                />
              </View>
              <View style={styles.footer}>
                <Text style={styles.txt}>
                  By Continuing, I agree to the
                  <Text style={styles.subTxt}>{'  '}Terms of</Text>
                </Text>
                <Text style={styles.subTxt}>
                  Usage <Text style={styles.txt}> &</Text>
                  <Text style={styles.subTxt}>{'  '}Privcay Policy</Text>
                </Text>
              </View>
              {/* Add button */}
              <View style={styles.top}>
                <Button
                  height={normalize(45)}
                  onPress={() => onLogin()}
                  bgColor="#ff3f6c"
                  children={
                    <View style={styles.lgContainer}>
                      <Text style={{...styles.lg, fontWeight: 'bold'}}>
                        Login
                      </Text>
                    </View>
                  }
                />
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View style={{justifyContent : "center"}}>
              <Text style={styles.bottomTxt}>
                Don't have an account?{' '}
                  <Text onPress={onRegisterPress} style={styles.boldTxt}>Register</Text>
              </Text>
              </View>

              <Text
                style={{
                  ...styles.bottomTxt,
                  paddingTop: normalize(5),
                }}
              >
                Forget Password?{' '}
                {/* <TouchableOpacity onPress={onForgotPasswordClick}> */}
                  <Text
                    onPress={onForgotPasswordClick}
                    style={{
                      ...styles.boldTxt,
                      paddingTop: normalize(5),
                    }}
                  >
                    Change Password
                  </Text>
                {/* </TouchableOpacity> */}
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;
