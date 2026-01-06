import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { ForecastCard } from "../ForecastCard";

export const ForecastWeather = ({ forecast }) => {
    return (
        <View style={styles.container}>
            {!forecast ? (
                <ActivityIndicator size='large' color='#ffe100ff' />
            ) : (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContainer}
                >
                    {forecast.map((instant, index) => (
                        <ForecastCard instant={instant} key={index} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingTop: 64,
        width: "100%",
    },

    scrollContainer: {
        paddingHorizontal: 16,
        gap: 12,
    },
});
