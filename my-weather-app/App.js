import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GradientBg } from "./components/GradientBg";
import { CurrentWeather } from "./components/views/CurrentWeather";
import { ForecastWeather } from "./components/views/ForecastWeather";

export default function App() {
    return (
        <View style={styles.container}>
            <GradientBg />
            <Text style={styles.appTitle}>MeteoSky</Text>

            <CurrentWeather />
            <ForecastWeather />

            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    appTitle: {
        fontSize: 64,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#fff",
    },
});
