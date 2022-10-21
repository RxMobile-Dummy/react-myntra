import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Image, FlatList, ScrollView, } from 'react-native'
import { styles } from "./HomeStyle";
import { ImageSlider } from 'react-native-image-slider-banner'
import {  normalize } from "../../utils/commonStyles";
import { useSelector } from "react-redux";
import { RootState } from "core";

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
        <TouchableOpacity style={styles.touch}>
            <Image
                source={{ uri: props.img }}
                style={{ width: "100%", height: normalize(100), borderRadius: normalize(6) }}
            />
            <View style={styles.div}>
                <Text style={styles.txt}>{props.name}</Text>
                <Text style={{ ...styles.txt, paddingTop: normalize(5) }}>{props.desc}</Text>
                <Text style={{ ...styles.txt, paddingTop: normalize(5) }}>{props.discount}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Home = () => {

    const {user} = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        console.log("::::::::::",user)
    },[])

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

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: normalize(20) }}>
                <View style={{ width: "90%", alignSelf: "center", }}>
                    <ImageSlider
                        autoPlay={true}
                        data={imgData}
                        // onItemChanged={(item) => console.log("item", item)}
                        closeIconColor="#fff"
                        caroselImageStyle={{ resizeMode: 'contain' }}

                    />
                    <View style={{ marginTop: normalize(15) }}>
                        <Text style={styles.titleTxt}>DEALS OF THE DAY</Text>
                        <FlatList
                            data={deals}
                            renderItem={({ item, index }) => <Card img={item.img} name={item.name} desc={item.desc} discount={item.discount} />}
                            horizontal={true}
                            style={{ marginTop: normalize(15) }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <Text style={styles.titleTxt}>BEST OF MYNTRA EXCLUSIVE BRANDS</Text>
                        <FlatList
                            data={deals}
                            renderItem={({ item, index }) => <Card img={item.img} name={item.name} desc={item.desc} discount={item.discount} />}
                            horizontal={true}
                            style={{ marginTop: normalize(15) }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ marginTop: normalize(15) }}>
                        <Text style={styles.titleTxt}>TOP PICKS</Text>
                        <FlatList
                            data={deals}
                            renderItem={({ item, index }) => <Card img={item.img} name={item.name} desc={item.desc} discount={item.discount} />}
                            horizontal={true}
                            style={{ marginTop: normalize(15) }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home