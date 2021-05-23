// In App.js in a new project

import * as React from 'react';
import LoginComponent from './../components/login'
import DashboardComponent from '././../components/dashboard'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function App() {
    const [isLogin, setIsLogin] = React.useState(false);
    return (

        <NavigationContainer>
            <Stack.Navigator>
                {/* {
                    isLogin ? (
                        <Stack.Screen name="Home" component={LoginComponent} />

                    ) : (

                        <Stack.Screen name="Details" component={DashboardComponent} />

                    )
                } */}

                <Stack.Screen name="Home" component={LoginComponent} />
                <Stack.Screen name="Details" component={DashboardComponent} />
            </Stack.Navigator>
        </NavigationContainer>

        // <LoginComponent />
    );
}

export default App;