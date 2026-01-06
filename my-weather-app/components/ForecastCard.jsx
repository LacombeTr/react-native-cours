import { View, StyleSheet, Image, Text } from "react-native";
import { formatDate } from "../utils/dates";

export const ForecastCard = ({ instant }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{formatDate(instant.dt)}</Text>
            <Text style={styles.cardText}>
                {new Date(instant.dt * 1000).getHours()}h00
            </Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: `https://openweathermap.org/img/wn/${instant.weather[0].icon}@2x.png`,
                }}
            />
            <Text style={styles.cardText}>
                {Math.round(instant.main.temp)} °C
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 150,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 12,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    cardText: {
        color: "#fff",
        fontSize: 16,
    },

    tinyLogo: {
        width: 50,
        height: 50,
    },
});
