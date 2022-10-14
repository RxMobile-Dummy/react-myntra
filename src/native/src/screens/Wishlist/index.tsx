import React, { useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View, Image, } from "react-native"
import { Icon } from "react-native-elements";
import { Colors } from "../../constants/Color";
import { APPBAR_HEIGHT, commonStyles, normalize } from "../../utils/commonStyles";
import { IWishlist } from "./IWishlist";
import { styles } from "./WishlistStyle";

const WishList = (props: IWishlist) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const numberOfColumn = 2;
    const treandingList = [
        {
            title: "Urbano Fashion",
            desc: "T-shirt",
            price: "750",
            discount: "30",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU"
        },
        {
            title: "Urbano Fashion",
            desc: "T-shirt",
            price: "750",
            discount: "30",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU"
        },
        {
            title: "Urbano Fashion",
            desc: "T-shirt",
            price: "750",
            discount: "30",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU"
        },
        {
            title: "Urbano Fashion",
            desc: "T-shirt",
            price: "750",
            discount: "30",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU"
        },
        {
            title: "Urbano Fashion",
            desc: "T-shirt",
            price: "750",
            discount: "30",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU"
        }
    ]
    const wishlist = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU",
            name: "Roadster",
            price: "750",
            percent: "60",
            empty: false
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU",
            name: "Roadster",
            price: "750",
            percent: "60",
            empty: false
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU",
            name: "Roadster",
            price: "750",
            percent: "60",
            empty: false
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU",
            name: "Roadster",
            price: "750",
            percent: "60",
            empty: false
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU",
            name: "Roadster",
            price: "750",
            percent: "60",
            empty: false
        }
    ]
    if (isEmpty) {
        return (
            <View style={styles.container}>
                <ScrollView style={{ marginBottom: normalize(20) }} nestedScrollEnabled={true} >
                    <View style={styles.subContainer}>
                        <Text style={styles.titleTxt}>YOUR WISHLIST IS EMPTY</Text>
                        <Text style={{ ...styles.descTxt, paddingTop: normalize(15) }}>Save items that you like in your wishlist.</Text>
                        <Text style={{ ...styles.descTxt, paddingTop: normalize(5) }}>Review them anytime and easily move</Text>
                        <Text style={{ ...styles.descTxt, paddingTop: normalize(5) }}>them to the bag</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={styles.touch}>
                            <Text style={styles.touchTxt}>SHOP NOW</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.center}>
                        <Text style={styles.subHeader}>TREANDING ON MYNTRA</Text>
                        <FlatList
                            data={treandingList}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => props.navigation.navigate("ProductCheckout")} key={"trending_" + index} style={styles.trContainer}>
                                    <Image source={{ uri: item.img }} style={styles.img} resizeMode="cover" />
                                    <View style={{ padding: normalize(8) }}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.descTxt2}>{item.desc}</Text>
                                        <Text style={{ ...styles.descTxt2, fontWeight: "bold" }}>₹ {item.price}</Text>
                                        <Text style={styles.descTxt3}>{item.discount}% OFF</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: normalize(10) }}
                        />
                    </View>
                    <View style={styles.plContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={{ ...styles.subHeader }}>POPULAR ON MYNTRA</Text>
                        </View>
                        <FlatList
                            data={treandingList}
                            renderItem={({ item, index }) => (
                                <>
                                    <TouchableOpacity onPress={() => props.navigation.navigate("ProductCheckout")} key={"Popular_" + index} style={styles.trSubContainer}>
                                        <View style={styles.firstDiv}>
                                            <Image source={{ uri: item.img }} style={styles.trImg} />
                                            <View style={{ paddingLeft: normalize(15) }}>
                                                <Text style={{ ...styles.title, }}>{"Roadster"}</Text>
                                                <Text style={{ ...styles.descTxt, paddingTop: normalize(3) }}>{"T-shirt"}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.secondDiv}>
                                            <Icon name="chevron-right" type="feather" size={normalize(20)} color={Colors.grey} tvParallaxProperties={undefined} />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.line} />
                                </>
                            )}
                            style={{ marginTop: normalize(10) }}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
    else {
        const formateData = (data: any, numColums: number) => {
            const totalRows = Math.floor(data.length / numColums)
            let lastRows = data.length - (totalRows * numColums)
            while (lastRows !== 0 && lastRows !== numColums) {
                data.push({
                    name: "",
                    icon_name: "",
                    type: "",
                    empty: true
                })
                lastRows++
            }
            return data
        }
        return (
            <View style={styles.container}>
                {/* Header Component */}
                <View style={{ height: APPBAR_HEIGHT + 15, width: "100%", backgroundColor: Colors.white, borderBottomColor: Colors.lightGrey, borderBottomWidth: 1 }}>
                    <View style={{ marginTop: APPBAR_HEIGHT - 35, width: "90%", alignSelf: "center", alignItems: "flex-start", flexDirection: "row", }}>
                        <View style={{ alignItems: "center", flexDirection: "row", width: "78%" }}>
                            <Icon name="arrowleft" type="antdesign" size={normalize(20)} tvParallaxProperties={undefined} />
                            <View style={{ marginLeft: normalize(15) }}>
                                <Text style={{ fontSize: normalize(14), color: Colors.black }}>Wishlist</Text>
                                <Text style={{ fontSize: normalize(12), color: Colors.grey }}>1 item</Text>
                            </View>
                        </View>
                        <View style={{ width: "22%", flexDirection: "row", marginTop: normalize(5), justifyContent: "space-between" }}>
                            <Icon name="mode-edit" type="material" size={normalize(20)} tvParallaxProperties={undefined} />
                            <Icon name="handbag" type="simple-line-icon" size={normalize(20)} color={Colors.black} tvParallaxProperties={undefined} />
                        </View>
                    </View>
                </View>
                {/* end */}
                <ScrollView style={{ marginBottom: normalize(20) }}>
                    <View style={styles.wlContainer}>
                        <FlatList
                            data={formateData(wishlist, numberOfColumn)}
                            renderItem={({ item, index }) => {
                                if (item.empty) {
                                    return (
                                        <View style={[styles.item, styles.blankDiv]} />
                                    )
                                }
                                else {
                                    return (
                                        <View key={"WL_" + index} style={styles.item}>
                                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU" }} style={styles.wlImg} />
                                            <View style={{ padding: normalize(10) }}>
                                                <Text style={styles.wlTxt}>{item.name}</Text>
                                                <Text style={{ color: Colors.black, ...styles.wlSubTxt }}>₹ 750<Text style={{ color: Colors.accent, ...styles.wlSubTxt }}>{"  "}(60% OFF)</Text></Text>
                                            </View>
                                            <TouchableOpacity style={styles.wlTouch}>
                                                <Text style={styles.wlTouchTxt}>MOVE TO BAG</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                            }}
                            numColumns={numberOfColumn}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default WishList