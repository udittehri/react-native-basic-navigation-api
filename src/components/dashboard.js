import React from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

import { API } from './../connections/api-login'

const DashboardComponent = ({ navigation }) => {
    const [username, setUserName] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    function hello() {
        navigation.navigate('Details')

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
            <Text style={styles.titleText} >
                "Haan Bhai "
                {"\n"}
                {"\n"}
            </Text>
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
});

export default DashboardComponent;