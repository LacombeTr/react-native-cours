import { useState, useEffect } from "react";
import * as Location from "expo-location";

export const UseLocation = () => {
    const [location, setLocation] = useState(null);
    const [adress, setAddress] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        async function getCurrentLocation() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }

        getCurrentLocation();
    }, []);

    useEffect(() => {
        async function getCityFromCoords(latitude, longitude) {
            const result = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            if (result.length > 0) {
                const place = result[0];

                setAddress({
                    city: place.city,
                    region: place.region,
                    country: place.country,
                    postalCode: place.postalCode,
                });
            }
        }

        if (location && location.coords) {
            getCityFromCoords(
                location.coords.latitude,
                location.coords.longitude
            );
        }
    }, [location]);

    return {
        location,
        errorMsg,
        adress,
    };
};
