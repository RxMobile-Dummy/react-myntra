import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../utils/Color'
import { APPBAR_HEIGHT, commonStyles, normalize } from '../../utils/commonStyles'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        height: normalize(200),
        flex: 1,
        margin: normalize(5),
        width: "100%",
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    blankDiv: {
        backgroundColor: 'transparent'
    },
    img: {
        height: normalize(150),
    },
    center : {
        marginTop: normalize(20),
        alignSelf: "center",
        width: "96%"
    },
    flat : {
        marginBottom : normalize(20),
        marginTop : normalize(15)
    },
    titleTxt : {
        fontSize : normalize(14),
        color : Colors.black
    },
    bottomSheet : {
        height: Dimensions.get("screen").height,
        width: "100%",
        backgroundColor: Colors.white
    },
    titleDiv : {
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        marginTop: APPBAR_HEIGHT - normalize(30),
    },
    title : {
        fontSize: normalize(16),
        color: Colors.black,
        paddingLeft: normalize(10),
        paddingBottom: normalize(5)
    },
    firstDiv : {
        width: "35%",
        height: Dimensions.get("screen").height,
        backgroundColor: "#f5f2f2"
    },
    firstTouch : {
        height: normalize(45),
        justifyContent: "center",
        paddingLeft: normalize(10),
        borderBottomColor: "#b0a7a7",
        borderBottomWidth: 1,
    },
    secondDiv : {
        width: "65%",
        height: Dimensions.get("screen").height,
        backgroundColor: Colors.white
    },
    row : {
        flexDirection: "row",
        alignItems: "center",
    },
    secondTouch : {
        height: normalize(45),
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
    },
    bottom : {
        position: "absolute",
        bottom: 10,
        width: "100%",
        flexDirection: "row",
        backgroundColor: Colors.white
    },
    bottomTouch : {
        width: "50%",
        height: normalize(45),
        justifyContent: "center",
        alignItems: "center"
    },
    line : {
        height: normalize(45),
        width: 1,
        borderWidth: .7,
        borderColor: Colors.lightGrey
    },
    menuContainer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: normalize(5)
    },
    touchMenu : {
        height: normalize(30),
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingRight: normalize(5)
    },
    sortTitle : {
        fontSize: normalize(14),
        color: Colors.grey,
        paddingLeft: normalize(8)
    },
    sortContainer : {
        width: Dimensions.get("screen").width / 2,
        backgroundColor: Colors.white,
    },
    sortTouch : {
        height: normalize(25),
        width: "100%",
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        justifyContent : "center"
    }
})