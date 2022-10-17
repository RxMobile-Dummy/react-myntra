import React, { useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements";
import InputField from "../../components/InputField/InputField";
import { Colors } from "../../constants/Color";
import { APPBAR_HEIGHT, normalize } from "../../utils/commonStyles";
import { styles } from "./BagStyle";

const cartItems = [
    {
        title: "Roadster",
        desc: "Men Rust Brown Solid Pure...",
        vendorName: "Radixweb",
        price: "750",
        discount: "70"
    },
    {
        title: "Roadster",
        desc: "Men Rust Brown Solid Pure...",
        vendorName: "Radixweb",
        price: "750",
        discount: "70"
    },
    {
        title: "Roadster",
        desc: "Men Rust Brown Solid Pure...",
        vendorName: "Radixweb",
        price: "750",
        discount: "70"
    },
    {
        title: "Roadster",
        desc: "Men Rust Brown Solid Pure...",
        vendorName: "Radixweb",
        price: "750",
        discount: "70"
    },
    {
        title: "Roadster",
        desc: "Men Rust Brown Solid Pure...",
        vendorName: "Radixweb",
        price: "750",
        discount: "70"
    }
]

const address = [
    {
        name: "Home"
    },
    {
        name: "Office"
    }
]

const Bag = () => {
    const [isBag, setIsBag] = useState(false)
    const [isAddress, setIsAddress] = useState(true)
    const [isPayment, setIsPayment] = useState(false)
    const [name, setName] = useState("")
    const [addressFound, setAddressFound] = useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.apContainer}>
                <View style={styles.apSub}>
                    <View style={styles.apFirst}>
                        <Icon name="arrowleft" type="antdesign" size={normalize(20)} tvParallaxProperties={undefined} />
                        <Text style={styles.apText}>{isBag ? "SHOPPING BAG" : isAddress ? addressFound ? "ADDRESS" : "ADD NEW ADDRESS" : "PAYMENT"}</Text>
                    </View>
                    <View style={styles.apSecond}>
                        <Icon name="hearto" type="antdesign" size={normalize(20)} color={Colors.black} tvParallaxProperties={undefined} />
                    </View>
                </View>
            </View>
            <ScrollView style={{ marginBottom: normalize(10) }}>
                {
                    isBag ?

                        <View>
                            <View style={styles.ckContainer}>
                                <View style={styles.ckSub}>
                                    <View style={{ width: "60%" }}>
                                        <Text style={styles.titleTxt}>Check delivery time & service</Text>
                                    </View>
                                    <View style={{ width: "40%", alignItems: "flex-end" }}>
                                        <Text style={styles.pinkTxt}>ENTER PIN CODE</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.ofContainer}>
                                <View style={styles.ofSub}>
                                    <View style={styles.ofFirst}>
                                        <Icon name="brightness-percent" type="material-community" size={normalize(20)} color={Colors.black} tvParallaxProperties={undefined} />
                                        <Text style={styles.ofTxt}>Available Offers</Text>
                                    </View>
                                    <View style={styles.ofSecond}>
                                        <Icon name="dot-single" type="entypo" size={normalize(22)} color={Colors.grey} tvParallaxProperties={undefined} />
                                        <Text style={styles.greyTxt}>10% Instant Discount up to Rs 1,000 on HDFC Bank Credit Cards on a min spend of Rs 4,000. TCA</Text>
                                    </View>
                                    <View style={styles.mrContainer}>
                                        <Text style={styles.pinkTxt}>See More</Text>
                                        <Icon name="chevron-down" type="entypo" color={Colors.accent} size={normalize(20)} tvParallaxProperties={undefined} />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.ctContainer}>
                                <View style={styles.center}>
                                    <View style={styles.checkContainer}>
                                    </View>
                                    <Text style={{ ...styles.greyTxt, marginLeft: normalize(8) }}>0/{cartItems.length} ITEMS SELECTED</Text>
                                </View>
                                <View style={styles.dlContainer}>
                                    <Icon name="delete" type="antdesign" size={normalize(20)} color={Colors.black} tvParallaxProperties={undefined} />
                                </View>
                            </View>
                            <FlatList
                                data={cartItems}
                                renderItem={({ item, index }) => (
                                    <View style={styles.crContainer}>
                                        <View style={styles.img}>
                                            <TouchableOpacity style={styles.touch}>
                                            </TouchableOpacity>
                                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU" }} style={styles.Timg} />
                                        </View>
                                        <View style={styles.crSub}>
                                            <Text style={styles.crTxt}>{item.title}</Text>
                                            <Text style={{ ...styles.greyTxt, paddingTop: normalize(5) }}>{item.desc}</Text>
                                            <Text style={{ ...styles.greyTxt, paddingTop: normalize(5) }}>Sold By: {item.vendorName}</Text>
                                            <View style={{ paddingTop: normalize(8), flexDirection: "row" }}>
                                                <TouchableOpacity style={styles.szTouch}>
                                                    <Text style={styles.szTxt}>Size: XL</Text>
                                                    <Icon name="caretdown" type="antdesign" size={normalize(8)} color={Colors.black} tvParallaxProperties={undefined} style={{ paddingTop: normalize(2), paddingLeft: normalize(3) }} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.qtTouch}>
                                                    <Text style={styles.szTxt}>Qty: 1</Text>
                                                    <Icon name="caretdown" type="antdesign" size={normalize(8)} color={Colors.black} tvParallaxProperties={undefined} style={{ paddingTop: normalize(2), paddingLeft: normalize(3) }} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.prContainer}>
                                                <Text style={styles.titleTxt1}>₹ {item.price}</Text>
                                                <Text style={{ ...styles.pinkTxt, paddingLeft: normalize(6) }}>{item.discount}% OFF</Text>
                                            </View>
                                        </View>
                                        <View style={{ position: "absolute", right: normalize(8), top: normalize(8) }}>
                                            <Icon name="close" type="antdesign" size={normalize(15)} color={Colors.black} tvParallaxProperties={undefined} />
                                        </View>
                                    </View>
                                )}
                            />
                            <View style={styles.cpContainer}>
                                <Text style={{ ...styles.greyTxt, fontWeight: "bold" }}>COUPONS</Text>
                            </View>
                            <View style={styles.alContainer}>
                                <TouchableOpacity style={styles.alTouch}>
                                    <View style={styles.alSub}>
                                        <Icon name="local-offer" type="material" size={normalize(20)} color={Colors.black} tvParallaxProperties={undefined} style={{ marginTop: normalize(5) }} />
                                        <Text style={{ ...styles.titleTxt1, marginLeft: normalize(10), fontWeight: "700" }}>Apply Coupon</Text>
                                    </View>
                                    <View style={{ width: "5%", justifyContent: "center", alignItems: "center" }}>
                                        <Icon name="chevron-right" type="feather" size={normalize(20)} color={Colors.grey} tvParallaxProperties={undefined} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.pdContainer}>
                                <View style={styles.pdSub}>
                                    <Text style={{ ...styles.titleTxt1, fontWeight: "700" }}>PRODUCT DETAILS (0 item)</Text>
                                    <View style={styles.line} />
                                    <View style={styles.mpContainer}>
                                        <Text style={styles.titleTxt1}>Total MRP</Text>
                                        <Text style={styles.titleTxt1}>₹ 750</Text>
                                    </View>
                                    <View style={{ borderBottomColor: "#F2F3F4", borderBottomWidth: 1.5, paddingTop: normalize(10) }} />
                                    <View style={styles.mpContainer}>
                                        <Text style={{ ...styles.titleTxt1, fontWeight: "bold" }}>Total Amount</Text>
                                        <Text style={styles.titleTxt1}>₹ 750</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        :
                        isAddress ?
                        addressFound ?
                        <View>
                        <View style={styles.adContainer}>
                            <Text style={styles.titleTxt1}>Radixweb<Text style={styles.greyTxt}> (Default)</Text></Text>
                            <Text style={{paddingTop : normalize(8), ...styles.greyTxt}}>B/H Nirma University, Ekyarth</Text>
                            <Text style={{paddingTop : normalize(3), ...styles.greyTxt}}>Near Vandemataram Fabula</Text>
                            <Text style={{paddingTop : normalize(3), ...styles.greyTxt}}>Chharodi, Gujarat 395002</Text>
                             <Text style={{paddingTop : normalize(10), ...styles.greyTxt}}>Mobile : <Text style={styles.titleTxt1}>8980386001</Text></Text>
                           <TouchableOpacity style={styles.adTouch}>
                                <Text style={styles.titleTxt}>CHANGE OR ADD ADDRESS</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.pdSub}>
                                <Text style={{ ...styles.greyTxt, fontWeight: "bold" }}>DELIVERY ESTIMATES</Text>
                            </View>
                            <View style={styles.dhContainer}>
                                <View style={styles.dhSub}>
                                    <Image source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6x3QooURvgQy6HOA5PTRPi930FWN4fcAoA&usqp=CAU"}} style={styles.dhImg} />
                                    <Text style={styles.titleTxt1}>{"  "}Delivery between<Text style={styles.titleTxt}>{"  "}Thu, 20 oct - Sun, 23 oct</Text></Text>
                                </View>
                            </View>
                        </View>
                        :
                            <View>
                                <View style={styles.pdContainer}>
                                    <Text style={styles.titleTxt}>CONTACT DETAILS</Text>
                                </View>
                                <View style={styles.input}>
                                    <InputField
                                        value={name}
                                        onChange={(name: string) => setName(name)}
                                        placeholder="Name"
                                    />
                                    <InputField
                                        value={name}
                                        onChange={(name: string) => setName(name)}
                                        placeholder="Mobile No"
                                        top={normalize(12)}
                                    />
                                </View>
                                <View style={styles.pdContainer}>
                                    <Text style={styles.titleTxt}>ADDRESS</Text>
                                </View>
                                <View style={styles.input}>
                                    <InputField
                                        value={name}
                                        onChange={(name: string) => setName(name)}
                                        placeholder="Name"
                                    />
                                    <InputField
                                        value={name}
                                        onChange={(name: string) => setName(name)}
                                        placeholder="Mobile No"
                                        top={normalize(12)}
                                    />
                                    <InputField
                                        value={name}
                                        onChange={(name: string) => setName(name)}
                                        placeholder="Mobile No"
                                        top={normalize(12)}
                                    />
                                    <View style={styles.row}>
                                        <View style={{ width: "48%" }}>
                                            <InputField
                                                value={name}
                                                onChange={(name: string) => setName(name)}
                                                placeholder="Mobile No"
                                            />
                                        </View>
                                        <View style={{ width: "48%" }}>
                                            <InputField
                                                value={name}
                                                onChange={(name: string) => setName(name)}
                                                placeholder="Mobile No"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.pdContainer}>
                                    <Text style={styles.titleTxt}>SAVE ADDRESS AS</Text>
                                </View>
                                <View style={styles.addContainer}>
                                    {
                                        address.map((item, index) => (
                                            <TouchableOpacity key={"address_"+ index} style={styles.addSub}>
                                                <Text style={styles.pinkTxt}>{item.name}</Text>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>
                                <View style={styles.subTouch}>
                                    <TouchableOpacity style={styles.checkTouch}>
                                    </TouchableOpacity>
                                    <Text style={{...styles.greyTxt, paddingLeft : normalize(8)}}>Make this my default address</Text>
                                </View>
                            </View>
                            :
                            <View style={{ width: "90%", alignSelf: "center" }}>
                                <Text>Payment</Text>
                            </View>
                }
            </ScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.touchTxt}>{isBag ? "PLACE ORDER" : isAddress ? addressFound ? "CONTINUE" : "ADD ADDRESS" : "PAYMENT"} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Bag