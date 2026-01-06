import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UseLocation } from "./hooks/useLocation";
import { UseWeather } from "./hooks/useWeather";

export default function App() {
    const { location, errorMsg: locationError, adress } = UseLocation();
    const {
        currentWeather,
        forecast,
        errorMsg: weatherError,
    } = UseWeather(location?.coords.latitude, location?.coords.longitude);

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>
                Location:{" "}
                {location && adress
                    ? `adress: ${adress.city}, ${adress.region}, ${adress.country}`
                    : "Fetching location..."}
            </Text>
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
