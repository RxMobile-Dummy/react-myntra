import React, { useState } from "react";
import { Text, TouchableOpacity, FlatList, View, Image, Dimensions, } from "react-native"
import { BottomSheet, Icon } from "react-native-elements";
import { Colors } from "../../constants/Color";
import { commonStyles, normalize } from "../../utils/commonStyles";
import { styles } from "./ProductListStyle";
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const product = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9-D-fJjvpIrCbQXvHNvvP207LZIWBBdq0Q&usqp=CAU",
        brand: "GUCCI",
        price: "2550",
        empty: false
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN0cAh0mrgsMMhuX9wDpFj9zh0SxcKpsM0g&usqp=CAU",
        brand: "GUCCI",
        price: "2550",
        empty: false
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN0cAh0mrgsMMhuX9wDpFj9zh0SxcKpsM0g&usqp=CAU",
        brand: "GUCCI",
        price: "2550",
        empty: false
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN0cAh0mrgsMMhuX9wDpFj9zh0SxcKpsM0g&usqp=CAU",
        brand: "GUCCI",
        price: "2550",
        empty: false
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN0cAh0mrgsMMhuX9wDpFj9zh0SxcKpsM0g&usqp=CAU",
        brand: "GUCCI",
        price: "2550",
        empty: false
    }
]

const FilterData = [
    {
        name: "CATEGORIES"
    },
    {
        name: "BRAND"
    },
    {
        name: "PRICE"
    }
]

const shirtTypes = [
    {
        type: "Shirt"
    },
    {
        type: "Lounge Tshort"
    }
]

const sortBy = [
    {
        title: "What's new"
    },
    {
        title: "Popularity"
    },
    {
        title: "Better Discount"
    },
    {
        title: "Price: High to Low"
    },
    {
        title: "Price: Low to High"
    },
    {
        title: "Customer Rating"
    }
]

const ProductList = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isFilter, setIsFilter] = useState(0)
    const [isProduct, setIsProduct] = useState(0)
    const [isSortBy, setIsSortBy] = useState(false)
    const [sortTitle, setSortByTitle] = useState("Sort By : Recommended")

    const numberOfColumn = 2

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
    const renderItem = (item: any, index: number) => {
        if (item.empty) {
            return (
                <View style={[styles.item, styles.blankDiv]} />
            )
        }
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.item}>
                <Image source={{ uri: item.img }} style={styles.img} />
                <View style={{ padding: normalize(8) }}>
                    <Text style={styles.titleTxt}>{item.brand}</Text>
                    <Text style={{ ...styles.titleTxt, fontWeight: "bold", paddingTop: normalize(5) }}>RS. {item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const openMenu = () => setIsSortBy(true);

    const closeMenu = () => setIsSortBy(false);

    const onSortBy = (name: string) => {
        setSortByTitle(name)
        setIsSortBy(false)
    }

    return (
        <View style={styles.container}>

            <View style={styles.center}>
                <View style={styles.menuContainer}>
                    <Menu
                        visible={isSortBy}
                        onDismiss={closeMenu}
                        anchor={
                            <TouchableOpacity onPress={openMenu} style={styles.touchMenu}>
                                <Text style={styles.sortTitle}>{sortTitle}</Text>
                                <Icon name="caretdown" type="antdesign" size={normalize(15)} color={Colors.black} style={{ paddingLeft: normalize(10) }} tvParallaxProperties={undefined} />
                            </TouchableOpacity>
                        }>
                        <View style={styles.sortContainer}>
                            <FlatList
                                data={sortBy}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity key={index} onPress={() => onSortBy(item.title)} style={styles.sortTouch}>
                                        <Text style={{ paddingLeft: normalize(8), ...styles.titleTxt }}>{item.title}</Text>
                                    </TouchableOpacity>
                                )}
                            />

                        </View>
                    </Menu>
                    <Icon name="filter" type="antdesign" size={normalize(25)} onPress={() => setIsVisible(!isVisible)} tvParallaxProperties={undefined} />
                </View>
                <FlatList
                    data={formateData(product, numberOfColumn)}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    numColumns={numberOfColumn}
                    style={styles.flat}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <BottomSheet isVisible={isVisible}>
                <View style={styles.bottomSheet}>
                    <View style={styles.titleDiv}>
                        <Text style={styles.title}>Filters</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.firstDiv}>
                            <FlatList
                                data={FilterData}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity onPress={() => setIsFilter(index)} key={index} style={{ backgroundColor: isFilter == index ? Colors.white : "#f5f2f2", ...styles.firstTouch }}>
                                        <Text style={styles.titleTxt}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                                nestedScrollEnabled={true}
                            />
                        </View>
                        <View style={styles.secondDiv}>
                            <View style={styles.row}>
                                <View style={{ width: "100%", marginLeft: normalize(15) }}>
                                    <FlatList
                                        data={shirtTypes}
                                        renderItem={({ item, index }) => (
                                            <TouchableOpacity key={index} onPress={() => setIsProduct(index)} style={styles.secondTouch}>
                                                <Icon name="check" type="antdesign" size={normalize(15)} color={index === isProduct ? Colors.accent : Colors.grey} tvParallaxProperties={undefined} />
                                                <Text style={{ paddingLeft: normalize(8), fontSize: normalize(14), color: index === isProduct ? Colors.accent : Colors.black }}>T-shirt</Text>
                                            </TouchableOpacity>
                                        )}
                                        nestedScrollEnabled={true}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.bottomTouch}>
                        <Text style={styles.titleTxt}>Close</Text>
                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity style={styles.bottomTouch}>
                        <Text style={styles.titleTxt}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
    )
}

export default ProductList