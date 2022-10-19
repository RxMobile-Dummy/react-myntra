import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/InputField/InputField';
import { normalize } from '../../utils/commonStyles';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { confirmPasswordValidation, emailValidation, passwordValidation, ResetForgotPasswordState, ResetPassword, RootState } from "core"
import showToast from '../../components/Toast';
import Loader from '../../components/Loader';
import { styles } from "./ChangePasswordStyle"
import { Colors } from '../../constants/Color';

const ChangePassword = (props: any) => {

    const dispatch = useDispatch()

    let { resetData, resetError } = useSelector(
        (state: RootState) => state.resetPasswordReducer
      );

    useEffect(() => {
        console.log("Change password", resetData)
        if(resetData !== undefined){
            if(resetData){
                props.navigation.navigate("Login")
            }
        }
    }, [resetData])

    const [otp, setOTP] = useState("");
    const [password, setPassword] = useState('');
    const [passwordChange, setPasswordChange] = useState('');
    const [isLoading, setIsLoading] = useState(false)


    const onChangePassword = async () => {
        setIsLoading(true)
        let email = props.route.params.email
        if (emailValidation(email)) {
            showToast({ type: "error", message: emailValidation(email) })
            setIsLoading(false)
            return
        }
        else if (passwordValidation(password)) {
            showToast({ type: "error", message: passwordValidation(password) })
            setIsLoading(false)
            return
        }
        else if (confirmPasswordValidation(passwordChange, password)) {
            showToast({ type: "error", message: confirmPasswordValidation(passwordChange, password) })
            setIsLoading(false)
            return
        }
        else {
            let resetReq = {
                email: props.route.params.email,
                role: "user",
                otp: otp,
                newPassword: password,
            }
            dispatch<any>(ResetPassword(resetReq));
            showToast({type : "success", message : "Password changed, Login to continue"})
            setIsLoading(false)
        }
    }

    return (
        <LinearGradient colors={['#FEEDF6', '#FCEEE5']} style={{ flex: 1 }}>
            {
                isLoading && <Loader />
            }
            <KeyboardAwareScrollView
                enableOnAndroid
                contentContainerStyle={{ flex: 1, width: '100%' }}
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
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.lgTxt}>Enter the code we just sent on your email</Text>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.elContainer}>
                                <Text style={styles.elTxt}>OTP</Text>
                                <InputField
                                    value={otp}
                                    onChange={(otp: string) => setOTP(otp)}
                                    top={10}
                                />
                            </View>

                            <View style={styles.elContainer}>
                                <Text style={styles.elTxt}>New Password</Text>
                                <InputField
                                    value={password}
                                    onChange={(password: string) => setPassword(password)}
                                    top={10}
                                />
                            </View>
                            <View style={styles.elContainer}>
                                <Text style={styles.elTxt}>Confirm New Password</Text>
                                <InputField
                                    value={passwordChange}
                                    onChange={(ChangePassword: string) => setPasswordChange(ChangePassword)}
                                    top={10}
                                />
                            </View>
                            {/* Add button */}
                            <View style={styles.top}>
                                <Button
                                    height={normalize(45)}
                                    onPress={() => onChangePassword()}
                                    bgColor="#ff3f6c"
                                    children={
                                        <View style={styles.lgContainer}>
                                            <Text style={{ ...styles.lg, fontWeight: 'bold' }}>
                                                Login
                                            </Text>
                                        </View>
                                    }
                                />
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.elTxt}>Don't receive a code?{" "}<Text style={styles.txtR}>Resend</Text> </Text>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}

export default ChangePassword