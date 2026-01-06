import { UseLocation } from "../../hooks/useLocation";
import { UseWeather } from "../../hooks/useWeather";
import { useTranslateWeather } from "../../hooks/useTranslateWeather";
import { Text, ActivityIndicator, Image, StyleSheet, View } from "react-native";

export const CurrentWeather = () => {
    const { location, errorMsg: locationError, adress } = UseLocation();
    const { currentWeather, errorMsg: weatherError } = UseWeather(
        location?.coords.latitude,
        location?.coords.longitude
    );
    const translatedDescription = useTranslateWeather(
        currentWeather?.description
    );

    if (location === null || currentWeather === null) {
        return <ActivityIndicator size='large' color='#ffe100ff' />;
    }

    if (locationError) {
        return <Text>Error fetching location: {locationError}</Text>;
    }

    if (weatherError) {
        return <Text>Error fetching weather: {weatherError}</Text>;
    }

    if (adress && currentWeather) {
        return (
            <View style={styles.currentWeatherWidget}>
                <Text style={styles.cityText}>{adress.city}</Text>
                <Text style={styles.areaText}>{adress.region}</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: `https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`,
                    }}
                />
                <Text style={styles.tempText}>
                    {Math.round(currentWeather.temp)}°C
                </Text>
                <Text style={styles.feelsLikeText}>
                    ressenti: {Math.round(currentWeather.feelsLike)}°C
                </Text>
                <Text style={styles.descriptionText}>
                    {translatedDescription}
                </Text>
            </View>
        );
    }

    return <></>;
};

const styles = StyleSheet.create({
    currentWeatherWidget: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    areaText: {
        fontSize: 18,
        color: "#fff",
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    cityText: {
        fontSize: 24,
        color: "#fff",
    },
    tempText: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#fff",
    },
    feelsLikeText: {
        fontSize: 16,
        color: "#fff",
    },
    descriptionText: {
        fontSize: 18,
        color: "#fff",
    },
});
