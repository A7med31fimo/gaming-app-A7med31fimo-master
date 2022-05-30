
import { ActivityIndicator, Button, ScrollView, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from "./components/HomeScreen"
import TrackScreen from './components/TrackScreen';
import GameScreen from './components/GameScreen';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName={"WelcomeScreen"} >
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="HomeSreen" component={HomeScreen} />
                <Stack.Screen name="TrackScreen" component={TrackScreen} />
                <Stack.Screen name="GameScreen" component={GameScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
