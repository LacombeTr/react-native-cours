import axios from "axios";
import { useEffect, useState } from "react";

export const UseWeather = (latitude, longitude) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        async function fetchWeather(latitude, longitude) {
            const apiKey = process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY;
            const baseUrl = process.env.EXPO_PUBLIC_WEATHER_API_BASE_URL;

            const url = `${baseUrl}weather?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

            try {
                const response = await axios(url);
                const data = response.data;

                if (response.status === 200) {
                    setCurrentWeather({
                        weatherId: data.weather[0].id,
                        main: data.weather[0].main,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                        temp: data.main.temp,
                        feelsLike: data.main.feels_like,
                        humidity: data.main.humidity,
                        windSpeed: data.wind.speed,
                        windAngle: data.wind.deg,
                        cloudCover: data.clouds.all,
                    });
                } else {
                    setErrorMsg(
                        data.message || "Failed to fetch current weather data"
                    );
                }
            } catch (error) {
                setErrorMsg(error.message);
            }
        }

        if (latitude && longitude) {
            fetchWeather(latitude, longitude);
        }
    }, [latitude, longitude]);

    return {
        currentWeather,
        forecast,
        errorMsg,
    };
};
