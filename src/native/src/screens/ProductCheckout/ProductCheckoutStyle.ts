import {StyleSheet, PixelRatio} from 'react-native'
import { Colors } from '../../constants/Color'
import { normalize } from '../../utils/commonStyles'

export const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.white
    },
    imageStyle: {
        height: PixelRatio.getPixelSizeForLayoutSize(160),
        width: '100%',
    },
    center : {
        width : "90%",
        alignSelf : "center",
        marginTop : normalize(20)
    },
    titleTxt : {
        fontSize: normalize(16),
        color: Colors.black,
        fontWeight: "bold"
    },
    titleTxt1 : {
        fontSize: normalize(14),
        color: Colors.black,
        fontWeight: "bold"
    },
    descTxt : {
        fontSize: normalize(14),
        color: Colors.grey,
        paddingTop: normalize(5)
    },
    desc2 : {
        fontSize: normalize(12),
        color: Colors.grey,
        paddingTop: normalize(5)
    },
    line : {
        borderBottomColor: Colors.grey,
        borderBottomWidth: .5,
        marginTop: normalize(10)
    },
    subContainer : {
        marginTop: normalize(15),
        alignSelf: "center",
        width: "90%"
    },
    sizeContainer : {
        marginTop: normalize(8),
        marginRight: normalize(10),
        height: normalize(35),
        width: normalize(35),
        borderRadius: normalize(35),
        borderWidth: 1,
        borderColor: Colors.grey,
        justifyContent: "center",
        alignItems: "center"
    },
    sizeTxt : {
        fontSize: normalize(13),
        color: Colors.black,
    },
    addContainer : {
        marginTop: normalize(15),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    addTouch : {
        height: normalize(45),
        width: "100%",
        backgroundColor: Colors.accent,
        borderRadius: normalize(8),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    addTxt : {
        fontSize: normalize(14),
        color: Colors.white,
        fontWeight: "bold",
        paddingLeft: normalize(10)
    },
    wishTouch : {
        height: normalize(45),
        width: "100%",
        borderWidth: .5,
        borderColor: Colors.grey,
        borderRadius: normalize(8),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    wishTxt : {
        fontSize: normalize(14),
        color: Colors.black,
        paddingLeft: normalize(10)
    },
    deliveryContainer : {
        marginTop: normalize(15),
        flexDirection: "row",
        alignItems: "center"
    },
    deliveryTxt : {
        fontSize: normalize(14),
        color: Colors.black
    },
    input : {
        marginTop: normalize(15),
        width: "60%"
    },
    txt : {
        fontSize: normalize(14),
        color: Colors.grey,
    },
    row : {
        marginTop: normalize(5),
        flexDirection: "row"
    },
    txt2 : {
        fontSize: normalize(14),
        color: Colors.accent,
        paddingTop: normalize(10),
        fontWeight: "bold"
    },
    planTxt : {
        fontSize: normalize(14),
        color: Colors.accent,
        paddingTop: normalize(10),
        fontWeight: "bold"
    }
})