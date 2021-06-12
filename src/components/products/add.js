import React from "react";
import { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, Text, View, FlatList, StatusBar, Image } from "react-native";
import { color } from "react-native-reanimated";
import axios from 'axios'

import { API } from './../connections/api-login'
import { callGetPolice } from './../connections/backendPowerHouse'

const AddProductComponent = ({ navigation }) => {
    const [products, setProducts] = React.useState({});

    function hello() {
        // navigation.navigate('Details')
        getAllProducts();
        return

        alert("What")
        fetch(API.loginURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contact_number: username,
                isAdmin: false,
                password: password,
                platform: "web"
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert(json)
                // this.setState({ data: json.movies });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                // this.setState({ isLoading: false });
            });
    }
    const getAllProducts = async () => {
        callGetPolice(API.getProducts)
            .then((res) => {
                console.log(res.data, "lololl")
                let data = res.data?.data
                setProducts(data)
            })
        // console.log(r, "qwe");
    }

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            left: 23
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            left: 45
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            left: 41

        },
    ];
    const renderItem = ({ item }) => (
        <Item title={item.name} itemLeft={item.name} />
    );
    const Item = ({ title, itemLeft }) => (
        <View style={styles.item}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text style={styles.title}>{title} </Text>
            <ItemsLeft itemsleft={itemLeft} />
        </View>
    );

    const ItemsLeft = ({ itemsleft }) => {
        return (
            <View>
                <Text style={styles.itemsleft}>{itemsleft}</Text>
            </View>
        )

    }


    return (
        <SafeAreaView>
            {/* <TextInput
                style={styles.input}
                onChangeText={setUserName}
                placeholder="Email"
                value={username}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
                placeholder="useless placeholder"
            /> */}
            {/* onPress={onPressTitle} */}
            <View style={styles.header}>
                <Text style={styles.titleText} > All Products </Text>
                <Text style={styles.addButton}> + </Text>
            </View>
            <View style={styles.productList}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <Button
                onPress={hello}
                title="Login"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>
    );
};
// keyboardType="text"    for number only 

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    header: {
        flexDirection: "row",
        height: 40,
        padding: 10,
        backgroundColor: '#B8d8d8',
        margin: 0,
        marginBottom: 6,
        borderRadius: 1,
        // justifyContent: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        // textAlign: 'center',
        flex: 2
    },
    addButton: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: 'right',
        marginEnd: 10,
        flex: 1,
        color: '#FE5F55',
        // borderWidth: 1
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#e2ebeb',
        padding: 9,
        marginVertical: 3,
        marginHorizontal: 1,
        flexDirection: 'row',
        textAlignVertical: 'bottom',
        alignItems: 'center', // Centered horizontally
        flex: 1,
    },
    title: {
        fontSize: 22,
        color: '#4F6367',
        marginLeft: 10
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    itemsleft: {
        textAlign: 'right',
        marginEnd: 10,
        // flex: ,
        color: '#FE5F55'
    }
});
// const styles = StyleSheet.create({
//     baseText: {
//         fontFamily: "Cochin"
//     },

// });

export default AddProductComponent;