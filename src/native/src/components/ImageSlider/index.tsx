import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, Dimensions, StatusBar, Image, StyleSheet, PixelRatio, FlatList } from "react-native"
import { Colors } from "../../utils/Color";
import { normalize } from "../../utils/commonStyles";

type IImageSlider = {
    children: any
}

const ImageSlider = (props: IImageSlider) => {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');

    const setSliderPage = (event: any) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };

    const { currentPage: pageIndex } = sliderState;

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1 }}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(event: any) => {
                        setSliderPage(event);
                    }}
                >
                    {
                        props.children.map((item: any, index : number) => (
                            <View key={index} style={{ height: "55%", width: width, flexDirection: "row" }}>
                                <Image
                                    source={{ uri: item.uri }}
                                    style={styles.imageStyle}
                                />
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={styles.paginationWrapper}>
                    {Array.from(Array(5).keys()).map((key, index) => (
                        <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
                    ))}
                </View>
            </SafeAreaView>
        </>
    );
};

export default ImageSlider

const styles = StyleSheet.create({
    imageStyle: {
        height: PixelRatio.getPixelSizeForLayoutSize(160),
        width: '100%',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
    },
    paginationWrapper: {
        // position: 'absolute',
        // bottom: "40%",
        // left: 0,
        // right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop : normalize(15)
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: Colors.pink,
        marginLeft: 10,
    },
});