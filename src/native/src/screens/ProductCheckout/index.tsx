import React, { useState } from "react";
import { Dimensions, ScrollView, Text, View, Image, FlatList, TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements";
import ImageSlider from "../../components/ImageSlider";
import InputField from "../../components/InputField/InputField";
import { Colors } from "../../constants/Color";
import { normalize } from "../../utils/commonStyles";
import { styles } from "./ProductCheckoutStyle";

const ProductCheckout = () => {
    const imgData: any = [
        {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4Lcvy_nwdAo3hqsZ6z7U49pvgbvsiVzRaqq-n9b3vRXqUGuEDJggVPXkcxgszq1mg8w&usqp=CAU"
        },
        {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4Lcvy_nwdAo3hqsZ6z7U49pvgbvsiVzRaqq-n9b3vRXqUGuEDJggVPXkcxgszq1mg8w&usqp=CAU"
        },
        {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4Lcvy_nwdAo3hqsZ6z7U49pvgbvsiVzRaqq-n9b3vRXqUGuEDJggVPXkcxgszq1mg8w&usqp=CAU"
        },
        {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4Lcvy_nwdAo3hqsZ6z7U49pvgbvsiVzRaqq-n9b3vRXqUGuEDJggVPXkcxgszq1mg8w&usqp=CAU"
        },
        {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4Lcvy_nwdAo3hqsZ6z7U49pvgbvsiVzRaqq-n9b3vRXqUGuEDJggVPXkcxgszq1mg8w&usqp=CAU"
        }
    ]
    const sizes = [
        {
            size: "S"
        },
        {
            size: "M"
        },
        {
            size: "L"
        },
        {
            size: "XL"
        },
        {
            size: "XXL"
        }
    ]

    const [pinCode, setPinCode] = useState("")

    const descriptionData = [
        {
            desc: "Applicable on: Orders above Rs. 3999 (only on first purchase)"
        },
        {
            desc: "Coupon code: MYNTRA10"
        },
        {
            desc: "Coupon Discount: 10% off upto Rs. 600 (check cart for final savings)"
        }
    ]

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: normalize(20) }}>
                <ImageSlider
                    children={imgData}
                />
                <View style={styles.center}>
                    <Text style={styles.titleTxt}>HERE & NOW</Text>
                    <Text style={styles.descTxt}>Tropical Printed Pure Cotton T-shirt</Text>
                    <Text style={styles.descTxt}>₹1099{" "} <Text style={styles.titleTxt}>₹439</Text><Text style={{ fontSize: normalize(14), color: Colors.accent }}>{"  "}(60% OFF)</Text></Text>
                    <Text style={styles.desc2}>inclusive of all taxes</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.subContainer}>
                    <Text style={styles.titleTxt}>SELECT SIZE</Text>
                    <View style={{ flexDirection: "row" }}>
                        {
                            sizes.map((item, index) => (

                                <TouchableOpacity style={styles.sizeContainer}>
                                    <Text style={styles.sizeTxt}>{item.size}</Text>
                                </TouchableOpacity>

                            ))
                        }
                    </View>
                    <View style={styles.addContainer}>
                        <View style={{ width: "46%" }}>
                            <TouchableOpacity style={styles.addTouch}>
                                <Icon name="shopping-bag" type="entypo" size={normalize(20)} color={Colors.white} tvParallaxProperties={undefined} />
                                <Text style={styles.addTxt}>ADD TO BAG</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "46%" }}>
                            <TouchableOpacity style={styles.wishTouch}>
                                <Icon name="hearto" type="antdesign" size={normalize(20)} color={Colors.black} tvParallaxProperties={undefined} />
                                <Text style={styles.wishTxt}>WISHLIST</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.deliveryContainer}>
                        <Text style={styles.deliveryTxt}>DELIVERY OPTIONS</Text>
                        <Icon name="truck-outline" type="material-community" size={normalize(25)} style={{ marginLeft: normalize(10) }} tvParallaxProperties={undefined} />
                    </View>
                    <View style={styles.input}>
                        <InputField
                            value={pinCode}
                            onChange={(pinCode: string) => setPinCode(pinCode)}
                            placeholder="Enter Pincode"
                        />
                    </View>
                    <Text style={{ ...styles.txt, paddingTop: normalize(10) }}>100% Original Products</Text>
                    <Text style={{ ...styles.txt, paddingTop: normalize(5) }}>Pay on delivery might be available</Text>
                    <Text style={{ ...styles.txt, paddingTop: normalize(5) }}>Easy 30 days returns and exchanges</Text>
                    <Text style={{ ...styles.txt, paddingTop: normalize(5) }}>Try & Buy might be available</Text>
                    <View style={styles.deliveryContainer}>
                        <Text style={styles.titleTxt1}>BEST OFFERS</Text>
                        <Icon name="local-offer" type="material" size={normalize(20)} color={Colors.grey} style={{ marginLeft: normalize(10) }} tvParallaxProperties={undefined} />
                    </View>
                    <View style={{ marginTop: normalize(10) }}>
                        <Text style={styles.titleTxt1}>Best Price{"  "}<Text style={{ fontSize: normalize(14), color: "#ee9c20", fontWeight: "bold" }}>Rs.579</Text></Text>
                    </View>
                    {
                        descriptionData.map((item, index) => (
                            <View key={index} style={styles.row}>
                                <Icon name="dot-single" type="entypo" size={normalize(20)} tvParallaxProperties={undefined} />
                                <Text style={{ fontSize: normalize(12), color: Colors.black }}>{item.desc}</Text>
                            </View>
                        ))
                    }
                    <Text style={styles.txt2}>View Eligible Products</Text>
                    <Text style={{...styles.titleTxt1, paddingTop : normalize(8)}}>EMI option available</Text>
                    <View style={{ marginTop: normalize(5), flexDirection: "row" }}>
                        <Icon name="dot-single" type="entypo" size={normalize(20)} tvParallaxProperties={undefined} />
                        <Text style={{ fontSize: normalize(12), color: Colors.black }}>{"EMI starting from Rs.154 / month"}</Text>
                    </View>
                    <Text style={styles.planTxt}>View Plans</Text>
                </View>

            </ScrollView>

        </View>
    )
}

export default ProductCheckout