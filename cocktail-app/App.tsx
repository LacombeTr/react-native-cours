import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen";
import { RecipeScreen } from "./screens/RecipeScreen";

export type RootStackParamList = {
    Home: undefined;
    Recipe: { recipeId: string };
    Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Recipe' component={RecipeScreen} />
                <Stack.Screen name='Search' component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
