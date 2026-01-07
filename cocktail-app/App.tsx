import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen";
import { RecipeScreen } from "./screens/RecipeScreen";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";

export type RootStackParamList = {
    Home: undefined;
    Recipe: { recipeId: string };
    Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const [loaded, error] = useFonts({
        Moonshine: require("./assets/fonts/Moonshine.otf"),
        "Moonshine-Bold": require("./assets/fonts/Moonshine-Bold.otf"),
    });

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: { backgroundColor: "transparent" },
                    headerStyle: { backgroundColor: "transparent" },
                    headerTransparent: true,
                    headerTintColor: "#fff",
                }}
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Recipe' component={RecipeScreen} />
                <Stack.Screen name='Search' component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        paddingTop: 64,
        paddingBottom: 32,
    },
});
