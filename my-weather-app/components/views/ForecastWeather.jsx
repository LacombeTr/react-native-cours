import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { UseLocation } from "../../hooks/useLocation";
import { UseWeather } from "../../hooks/useWeather";
import { ForecastCard } from "../ForecastCard";

export const ForecastWeather = () => {
    const { location, errorMsg: locationError } = UseLocation();
    const { forecast, errorMsg: weatherError } = UseWeather(
        location?.coords.latitude,
        location?.coords.longitude
    );

    return (
        <View style={styles.container}>
            {!location || !forecast ? (
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
