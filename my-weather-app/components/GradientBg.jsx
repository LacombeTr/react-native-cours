import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { UseLocation } from "../hooks/useLocation";
import { UseWeather } from "../hooks/useWeather";
import { getWeatherColor } from "../utils/colorMappers/getWeatherColor";
import { getTimeColor } from "../utils/colorMappers/getTimeColor";

export const GradientBg = () => {
    const { location } = UseLocation();
    const { currentWeather } = UseWeather(
        location?.coords?.latitude,
        location?.coords?.longitude
    );

    const weatherColor = getWeatherColor(currentWeather?.weatherId);
    const timeColor = getTimeColor();

    return (
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0.4 }}
            colors={[timeColor, weatherColor]}
            style={styles.background}
        />
    );
};

const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
});
