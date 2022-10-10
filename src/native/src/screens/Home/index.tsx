import React from "react";
import { Text, View, TouchableOpacity, Dimensions, Image, FlatList, ScrollView, } from 'react-native'
import { styles } from "./HomeStyle";
import { ImageSlider } from 'react-native-image-slider-banner'
import { commonStyles, normalize } from "../../utils/commonStyles";
import { Colors } from "../../utils/Color";
import { Icon } from "react-native-elements"
import AppHeader from "../../components/Header";

const deals = [
    {
        name: "Brand",
        desc: "Season Favorite",
        discount: "40-70%",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5oIW-bOGe4GidCH-FJeCIOIu9ST6lQv_lg&usqp=CAU"
    },
    {
        name: "Brand",
        desc: "Season Favorite",
        discount: "40-70%",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5oIW-bOGe4GidCH-FJeCIOIu9ST6lQv_lg&usqp=CAU"
    },
    {
        name: "Brand",
        desc: "Season Favorite",
        discount: "40-70%",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5oIW-bOGe4GidCH-FJeCIOIu9ST6lQv_lg&usqp=CAU"
    }
]

type ICard = {
    img: string,
    name: string,
    desc: string,
    discount: string
}

const Card = (props: ICard) => {
    return (
        <TouchableOpacity style={{ width: Dimensions.get("window").width / 2.2, backgroundColor: Colors.white, ...commonStyles.shadow, margin: normalize(8), borderRadius: normalize(6) }}>
            <Image
                source={{ uri: props.img }}
                style={{ width: "100%", height: normalize(100), borderRadius: normalize(6) }}
            />
            <View style={{ padding: normalize(10), }}>
                <Text style={{ fontSize: normalize(14), color: Colors.black }}>{props.name}</Text>
                <Text style={{ fontSize: normalize(14), color: Colors.black, paddingTop: normalize(5) }}>{props.desc}</Text>
                <Text style={{ fontSize: normalize(14), color: Colors.black, paddingTop: normalize(5) }}>{props.discount}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Home = () => {

    const imgData: any = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5oIW-bOGe4GidCH-FJeCIOIu9ST6lQv_lg&usqp=CAU"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4Lcvy_nwdAo3hqsZ6z7U49pvgbvsiVzRaqq-n9b3vRXqUGuEDJggVPXkcxgszq1mg8w&usqp=CAU"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU"
        }
    ]

    const listIcon = [
        {
            name : "search1",
            type : "antdesign"
        },
        {
            name : "bells",
            type : "antdesign"
        },
        {
            name : "hearto",
            type : "antdesign"
        },

    ]

    return (
        <View style={styles.container}>
            {/* <View style={styles.statusBar}>
                <View style={{ width: "100%",  paddingRight: normalize(20), marginTop: normalize(30), flexDirection: "row", alignItems: "center", justifyContent : "space-between" }}>
                    <View style={{ width: "15%" }}>
                        <Icon name="arrow-back" type="ionicon" size={normalize(28)} />
                    </View>

                    <View style={{ width: "40%", flexDirection: "row", justifyContent : "space-between"  }}>
                        {
                            listIcon.map((item,index) => (
                                <View style={{ width: "18%", }}>
                                <Icon name={item.name} type={item.type} size={normalize(20)} />
                            </View>
                            ))
                        }
                    </View>
                </View>
            </View> */}
            <AppHeader/>
            <ScrollView style={{marginBottom : normalize(20)}}>
                <View style={{ width: "90%", alignSelf: "center", }}>
                    <ImageSlider
                        data={imgData}
                        autoPlay={false}
                        // onItemChanged={(item) => console.log("item", item)}
                        closeIconColor="#fff"
                        caroselImageStyle={{ resizeMode: 'contain' }}
                    />
                    <View style={{ marginTop: normalize(15) }}>
                        <Text style={{ fontSize: normalize(16), color: Colors.black, fontWeight: "bold" }}>DEALS OF THE DAY</Text>
                        <FlatList
                            data={deals}
                            renderItem={({ item, index }) => <Card img={item.img} name={item.name} desc={item.desc} discount={item.discount} />}
                            horizontal={true}
                            style={{ marginTop: normalize(15) }}
                        />
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <Text style={{ fontSize: normalize(16), color: Colors.black, fontWeight: "bold" }}>BEST OF MYNTRA EXCLUSIVE BRANDS</Text>
                        <FlatList
                            data={deals}
                            renderItem={({ item, index }) => <Card img={item.img} name={item.name} desc={item.desc} discount={item.discount} />}
                            horizontal={true}
                            style={{ marginTop: normalize(15) }}
                        />
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <Text style={{ fontSize: normalize(16), color: Colors.black, fontWeight: "bold" }}>TOP PICKS</Text>
                        <FlatList
                            data={deals}
                            renderItem={({ item, index }) => <Card img={item.img} name={item.name} desc={item.desc} discount={item.discount} />}
                            horizontal={true}
                            style={{ marginTop: normalize(15) }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home