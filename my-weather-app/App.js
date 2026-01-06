import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl,
    ActivityIndicator,
} from "react-native";
import { useState, useCallback } from "react";
import { UseLocation } from "./hooks/useLocation";
import { UseWeather } from "./hooks/useWeather";
import { GradientBg } from "./components/GradientBg";
import { CurrentWeather } from "./components/views/CurrentWeather";
import { ForecastWeather } from "./components/views/ForecastWeather";

export default function App() {
    const [refreshing, setRefreshing] = useState(false);

    const { location, adress } = UseLocation();
    const {
        currentWeather,
        forecast,
    } = UseWeather(location?.coords.latitude, location?.coords.longitude);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <GradientBg />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor='#fff'
                    />
                }
            >
                <Text style={styles.appTitle}>MeteoSky</Text>

                {currentWeather && adress && forecast ? (
                    <>
                        <CurrentWeather
                            currentWeather={currentWeather}
                            adress={adress}
                        />
                        <ForecastWeather forecast={forecast} />
                    </>
                ) : <ActivityIndicator size='large' color='#ffe100ff' />}
            </ScrollView>

            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
    },

    scrollContent: {
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
    },

    appTitle: {
        fontSize: 64,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#fff",
    },
});
