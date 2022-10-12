import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image, Alert} from 'react-native';
import InputField from '../../components/InputField/InputField';
import {styles} from './ForgetPasswordStyle';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button/Button';
import {normalize} from '../../utils/commonStyles';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <LinearGradient colors={['#FEEDF6', '#FCEEE5']} style={{flex: 1}}>
      <KeyboardAwareScrollView
        enableOnAndroid
        contentContainerStyle={{flex: 1}}
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
            <View style={styles.box}>
              <View style={styles.elContainer}>
                <Text style={styles.elTxt}>Email</Text>
                <InputField
                  value={email}
                  onChange={(email: any) => setEmail(email)}
                  top={10}
                />
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
                        Continue
                      </Text>
                    </View>
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default ForgetPassword;
