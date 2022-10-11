import React from "react"
import { View, Text, StyleSheet, NativeModules, Platform } from "react-native"
import { normalize } from "../../utils/commonStyles";
import { Icon } from "react-native-elements"

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const APPBAR_HEIGHT = Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 40 : STATUSBAR_HEIGHT;

const AppHeader = () => {
    const listIcon = [
        {
            name: "search1",
            type: "antdesign"
        },
        {
            name: "bells",
            type: "antdesign"
        },
        {
            name: "hearto",
            type: "antdesign"
        },

    ]
    return (
        <View style={styles.statusBar}>
            <View style={{ width: "100%", paddingRight: normalize(20), marginTop: normalize(30), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ width: "15%" }}>
                    <Icon name="arrow-back" type="ionicon" size={normalize(28)} tvParallaxProperties />
                </View>

                <View style={{ width: "40%", flexDirection: "row", justifyContent: "space-between" }}>
                    {
                        listIcon.map((item: any, index: number) => (
                            <View style={{ width: "18%", }} key={index}>
                                <Icon name={item.name} type={item.type} size={normalize(20)} tvParallaxProperties />
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: APPBAR_HEIGHT,
        flexDirection: "row",
        backgroundColor: "#f5dce2",
    },
})

export default AppHeader