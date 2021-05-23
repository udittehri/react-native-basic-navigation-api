// In App.js in a new project

// import * as React from 'react';
// import { View, Text, Button, TextInput } from 'react-native';


// const [text, onChangeText] = React.useState("Useless Text");
// const [number, onChangeNumber] = React.useState(null);

// function LoginScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Username:</Text>
//             <TextInput
//                 style={styles.input}
//                 onChangeText={onChangeNumber}
//                 value={number}
//                 placeholder="useless placeholder"
//                 keyboardType="numeric"
//             />
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }
// function DetailsScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//         </View>
//     );
// }



// function LoginComponent() {
//     return (
//         <LoginScreen />
//     );
// }

// export default LoginComponent;

import React from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

import { API } from './../connections/api-login'

const LoginComponent = ({ navigation }) => {
    const [username, setUserName] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    function getMeIn() {
        navigation.navigate('Details')

        return
    }

    return (
        <SafeAreaView>
            <TextInput
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
            />
            {/* onPress={onPressTitle} */}
            <Text style={styles.titleText} >
                {API.loginURL}
                {"\n"}
                {"\n"}
            </Text>
            <Button
                onPress={getMeIn}
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

export default LoginComponent;