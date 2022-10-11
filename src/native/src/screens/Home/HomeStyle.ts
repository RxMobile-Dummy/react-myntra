import {StyleSheet, NativeModules, StatusBar, Platform, Dimensions} from 'react-native'
import { Colors } from '../../constants/Color';
import { commonStyles, normalize } from '../../utils/commonStyles';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const APPBAR_HEIGHT = Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 40  : STATUSBAR_HEIGHT;

export const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    statusBar : {
       height : APPBAR_HEIGHT,
       flexDirection : "row",
       backgroundColor : "#f5dce2",
    },
    touch : {
        width: Dimensions.get("window").width / 2.2,
        backgroundColor: Colors.white,
        ...commonStyles.shadow,
        margin: normalize(8),
        borderRadius: normalize(6)
    },
    div : {
        padding: normalize(10),
    },
    txt : {
        fontSize: normalize(14),
        color: Colors.black
    },
    titleTxt : {
        fontSize: normalize(16),
        color: Colors.black,
        fontWeight: "bold"
    }
})
