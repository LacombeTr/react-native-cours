import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl,
    ActivityIndicator,
} from "react-native";
import { useState, useCallback, useEffect } from "react";
import { UseLocation } from "./hooks/useLocation";
import { UseWeather } from "./hooks/useWeather";
import { GradientBg } from "./components/GradientBg";
import { CurrentWeather } from "./components/views/CurrentWeather";
import { ForecastWeather } from "./components/views/ForecastWeather";

export default function App() {
    const [refreshing, setRefreshing] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const [lastUpdate, setLastUpdate] = useState(null);

    const { location, adress } = UseLocation(refreshKey);
    const { currentWeather, forecast } = UseWeather(
        location?.coords.latitude,
        location?.coords.longitude,
        refreshKey
    );

    useEffect(() => {
        if (currentWeather) {
            setLastUpdate(new Date());
        }
    }, [currentWeather]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setRefreshKey((prev) => prev + 1);

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
                        tintColor='#ffe100ff'
                        progressViewOffset={50}
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
                ) : (
                    <ActivityIndicator size='large' color='#ffe100ff' />
                )}

                {lastUpdate && (
                    <Text style={styles.lastUpdate}>
                        Mis à jour à{" "}
                        {lastUpdate.toLocaleTimeString("fr-FR", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </Text>
                )}
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

    lastUpdate: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.7)",
        marginTop: 20,
        marginBottom: 30,
    },
});
