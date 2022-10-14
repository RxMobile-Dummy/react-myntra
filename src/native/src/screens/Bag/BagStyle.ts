import { StyleSheet } from "react-native"
import { Colors } from "../../constants/Color"
import { APPBAR_HEIGHT, normalize } from "../../utils/commonStyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F3F4"
    },
    subContainer: {
        //marginTop : normalize(80),
        height: APPBAR_HEIGHT + 15,
        width: "100%",
        backgroundColor: Colors.white,
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1
    },
    timeline: {
        width: "96%",
        alignSelf: "center",
        marginTop: APPBAR_HEIGHT - 35
    },
    //App header style
    apContainer: {
        height: APPBAR_HEIGHT,
        width: "100%",
        backgroundColor: Colors.white,
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1
    },
    apSub: {
        marginTop: APPBAR_HEIGHT - 35,
        width: "90%",
        alignSelf: "center",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    apFirst: {
        alignItems: "center",
        flexDirection: "row",
        width: "88%"
    },
    apText: {
        marginLeft: normalize(15),
        fontSize: normalize(14),
        color: Colors.black
    },
    apSecond: {
        alignItems: "center",
        flexDirection: "row",
        width: "12%"
    },
    ckContainer: {
        height: normalize(40),
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center"
    },
    ckSub: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "96%",
        alignSelf: "center",
    },
    titleTxt: {
        fontSize: normalize(12),
        color: Colors.black,
        fontWeight: "bold"
    },
    pinkTxt: {
        fontSize: normalize(12),
        color: Colors.accent
    },
    ofContainer: {
        marginTop: normalize(10),
        backgroundColor: Colors.white
    },
    ofSub: {
        padding: normalize(8),
        width: "96%",
        alignSelf: "center",
    },
    ofFirst: {
        alignItems: "center",
        flexDirection: "row"
    },
    ofTxt: {
        fontSize: normalize(14),
        marginLeft: normalize(8),
        color: Colors.black
    },
    ofSecond: {
        flexDirection: "row",
        marginTop: normalize(15),
        width: "98%"
    },
    greyTxt: {
        fontSize: normalize(12),
        color: Colors.grey
    },
    mrContainer: {
        flexDirection: "row",
        marginTop: normalize(10),
        alignItems: "center"
    },
    ctContainer: {
        width: "92%",
        alignSelf: "center",
        marginTop: normalize(15),
        flexDirection: "row"
    },
    center: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center"
    },
    checkContainer: {
        height: normalize(20),
        width: normalize(20),
        borderRadius: normalize(2),
        borderWidth: 1,
        borderColor: Colors.grey
    },
    dlContainer: {
        width: "10%",
        flexDirection: "row",
        alignItems: "center"
    },
    crContainer: {
        height: normalize(160),
        width: "100%",
        backgroundColor: Colors.white,
        flexDirection: "row",
        marginTop: normalize(15),
    },
    img: {
        justifyContent: "center",
        alignItems: "center",
        padding: normalize(8),
        width: "40%"
    },
    touch: {
        height: normalize(16),
        width: normalize(16),
        borderWidth: .5,
        borderColor: Colors.black,
        zIndex: 999,
        borderRadius: normalize(2),
        position: "absolute",
        top: normalize(15),
        left: normalize(13)
    },
    Timg: {
        height: normalize(140),
        width: "100%"
    },
    crSub: {
        paddingLeft: normalize(5),
        paddingTop: normalize(15),
        width: "60%"
    },
    crTxt: {
        fontSize: normalize(14),
        color: Colors.black,
    },
    szTouch: {
        height: normalize(20),
        width: "35%",
        backgroundColor: Colors.lightGrey,
        borderRadius: normalize(2),
        flexDirection: "row",
        paddingTop: normalize(3)
    },
    szTxt: {
        fontSize: normalize(11),
        color: Colors.black,
        fontWeight: "bold",
        paddingLeft: normalize(5)
    },
    qtTouch: {
        marginLeft: normalize(8),
        height: normalize(20),
        width: "30%",
        backgroundColor: Colors.lightGrey,
        borderRadius: normalize(2),
        flexDirection: "row",
        paddingTop: normalize(3)
    },
    prContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: normalize(8)
    },
    titleTxt1: {
        fontSize: normalize(12),
        color: Colors.black
    },
    cpContainer: {
        marginTop: normalize(15),
        width: "90%",
        alignSelf: "center"
    },
    alContainer: {
        marginTop: normalize(10),
        backgroundColor: Colors.white,
        height: normalize(40),
        alignItems: "center",
        justifyContent: "center"
    },
    alTouch: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        alignItems: "center"
    },
    alSub : {
        width: "95%",
        flexDirection: "row",
        alignItems: "center"
    },
    pdContainer : {
        marginTop: normalize(10),
        height: normalize(120),
        backgroundColor: Colors.white
    },
    pdSub : {
        width: "90%",
        alignSelf: "center",
        paddingTop: normalize(15)
    },
    line : {
        borderBottomColor: "#F2F3F4",
        borderBottomWidth: 1.5,
        paddingTop: normalize(15)
    },
    mpContainer : {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: normalize(10)
    },
    adContainer : {
        backgroundColor : Colors.white,
        marginTop : normalize(15),
        padding : normalize(12)
    },
    adTouch : {
        height : normalize(35),
        width : "100%",
        marginTop : normalize(15),
        alignSelf : "center",
        borderWidth : 1,
        borderColor : Colors.black,
        borderRadius : normalize(4),
        justifyContent : "center",
        alignItems : "center"
    },
    dhContainer : {
        backgroundColor : Colors.white,
        width : "100%",
        marginTop : normalize(15)
    },
    dhSub : {
        paddingLeft : normalize(15),
        flexDirection : "row",
        alignItems : "center",
        paddingTop : normalize(15),
        paddingBottom : normalize(15)
    },
    dhImg : {
        height : normalize(40),
        width : normalize(30)
    },
    input : {
        backgroundColor: Colors.white,
        marginTop: normalize(10),
        padding: normalize(12)
    },
    row : {
        flexDirection: "row",
        marginTop: normalize(12),
        width: "100%",
        justifyContent: "space-between"
    },
    addContainer : {
        backgroundColor: Colors.white,
        alignItems: "center",
        height: normalize(50),
        marginTop: normalize(10),
        flexDirection: "row",
        paddingLeft: normalize(15)
    },
    addSub : {
        height: normalize(25),
        width: normalize(60),
        marginRight : normalize(10),
        borderWidth: 1,
        borderColor: Colors.accent,
        borderRadius: normalize(20),
        justifyContent: "center",
        alignItems: "center"
    },
    subTouch : {
        backgroundColor: Colors.white,
        marginTop: normalize(10),
        height : normalize(40),
        alignItems : "center",
        flexDirection : "row",
        paddingLeft : normalize(15)
    },
    checkTouch : {
        height : normalize(18),
        width : normalize(18),
        borderWidth : 1,
        borderColor : Colors.grey,
    },
    bottom : {
        height: normalize(80),
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center"
    },
    btnContainer : {
        height: normalize(45),
        backgroundColor: Colors.accent,
        width: "90%",
        borderRadius: normalize(5),
        justifyContent: "center",
        alignItems: "center"
    },
    touchTxt : {
        fontSize: normalize(14),
        color: Colors.white,
        fontWeight: "bold"
    }

})