import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UseLocation } from "./hooks/useLocation";

export default function App() {
    const { location, errorMsg, adress } = UseLocation();

    console.log(adress)

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>
                Location:{" "}
                {location ?  `adress: ${adress.city}, ${adress.region}, ${adress.country}` : "Fetching location..."}
            </Text>
            {/* <Text>Your API key is: {process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY}</Text> */}
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
