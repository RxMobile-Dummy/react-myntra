import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {styles} from './LoginStyle';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputField/InputField';
import {normalize} from '../../utils/commonStyles';
import {Props} from './ILogin';
import Button from '../../components/Button/Button';

const Login: React.FC<Props> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const onRegisterPress = () => {
    props.navigation.navigate('Register');
  };

  const onForgotPasswordClick = () => {
    props.navigation.navigate('ForgotPassword');
  };
  return (
    <LinearGradient colors={['#FEEDF6', '#FCEEE5']} style={{flex: 1}}>
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
                  onPress={() => Alert.alert('Hello')}
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
              <Text style={styles.bottomTxt}>
                Don't have an account?{' '}
                <TouchableOpacity onPress={onRegisterPress}>
                  <Text style={styles.boldTxt}>Register</Text>
                </TouchableOpacity>
              </Text>
              <Text
                style={{
                  ...styles.bottomTxt,
                  paddingTop: normalize(5),
                }}
              >
                Forget Password?{' '}
                <TouchableOpacity onPress={onForgotPasswordClick}>
                  <Text
                    style={{
                      ...styles.boldTxt,
                      paddingTop: normalize(5),
                    }}
                  >
                    Change Password
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Login;
