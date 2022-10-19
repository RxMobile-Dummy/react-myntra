import Toast from "react-native-toast-message"

type IToast = {
 type : string,
 message : any
}

const showToast = (props : IToast) => {
    Toast.show({
        type : props.type,
        text1 : props.message
    })
}

export default showToast