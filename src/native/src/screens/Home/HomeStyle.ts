import {StyleSheet, NativeModules, StatusBar, Platform} from 'react-native'
import { normalize } from '../../utils/commonStyles';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const APPBAR_HEIGHT = Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 40  : STATUSBAR_HEIGHT;
console.log("Hei", APPBAR_HEIGHT)

export const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    statusBar : {
       height : APPBAR_HEIGHT,
       flexDirection : "row",
       backgroundColor : "#f5dce2",
    },
})
