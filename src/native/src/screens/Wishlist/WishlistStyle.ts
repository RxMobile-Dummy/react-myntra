import {Dimensions, StyleSheet} from "react-native"
import { Colors } from "../../constants/Color"
import { commonStyles, normalize } from "../../utils/commonStyles"

export const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.white
    },
    subContainer : {
        marginTop : "15%",
        width : "90%",
        alignSelf : "center",
        alignItems : "center"
    },
    titleTxt : {
        fontSize: normalize(16),
        fontWeight : "bold",
        color : Colors.black
    },
    descTxt : {
        fontSize : normalize(14),
        color : "#94989E",
    },
    touch : {
        height : normalize(35),
        width : "40%",
        backgroundColor : Colors.white,
        borderWidth : 2,
        borderColor : Colors.accent,
        borderRadius : normalize(4),
        justifyContent : "center",
        alignItems : "center",
        marginTop : normalize(20)
    },
    touchTxt : {
        fontSize : normalize(14),
        color : Colors.accent,
        fontWeight : "bold"
    },
    subHeader : {
        fontSize : normalize(14),
        color : Colors.black,
        fontWeight : "bold"
    },
    title : {
        fontSize : normalize(14),
        color : Colors.black
    },
    descTxt2 : {
        fontSize : normalize(12),
        color : Colors.black,
        paddingTop : normalize(3)
    },
    descTxt3 : {
        fontSize : normalize(12),
        color : Colors.accent,
        paddingTop : normalize(3)
    },
    center : {
        marginTop: "18%",
        width: "90%",
        alignSelf: "center"
    },
    trContainer : {
        height: normalize(225),
        borderRadius: normalize(10),
        backgroundColor: Colors.white,
        ...commonStyles.shadow,
        margin: normalize(8)
    },
    img : {
        height: normalize(140),
        width: Dimensions.get("window").width / 2,
        borderTopLeftRadius: normalize(10),
        borderTopRightRadius: normalize(10)
    },
    plContainer : {
        marginTop: "8%",
        width: "100%",
        alignSelf: "center"
    },
    titleContainer : {
        width: "90%",
        alignSelf: "center"
    },
    trSubContainer : {
        height: normalize(70),
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    firstDiv : {
        width: "90%",
        flexDirection: "row",
        alignItems: "center"
    },
    trImg : {
        height: normalize(50),
        width: normalize(50),
        borderRadius: normalize(30)
    },
    secondDiv : {
        width: "10%",
        justifyContent: "center",
        alignItems: "center"
    },
    line : {
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        width: "100%"
    },
    blankDiv : {
        backgroundColor: 'transparent'
    },
    item : {
        height: normalize(240),
        width: "46%",
        backgroundColor: Colors.white,
        ...commonStyles.shadow,
        borderRadius: normalize(6),
        marginTop : normalize(10),
        marginLeft : normalize(5),
        marginRight : normalize(10),
        marginBottom : normalize(10)
    },
    wlContainer : {
        width: "96%",
        alignSelf: "center",
        marginTop: normalize(20)
    },
    wlImg : {
        height: normalize(150),
        width: "100%",
        borderRadius : normalize(6)
    },
    wlTxt : {
        fontSize: normalize(14),
        color: Colors.black
    },
    wlSubTxt : {
        fontSize: normalize(12),
        paddingTop: normalize(4)
    },
    wlTouch : {
        position: "absolute",
        bottom: 0,
        height: normalize(30),
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: Colors.lightGrey,
        justifyContent: "center",
        alignItems: "center"
    },
    wlTouchTxt : {
        fontSize: normalize(12),
        color: Colors.accent,
        fontWeight: "bold"
    }

})