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

            const urlCurrentWeather = `${baseUrl}weather?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;
            const urlForecast = `${baseUrl}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

            try {
                const [currentResponse, forecastResponse] = await Promise.all([
                    axios(urlCurrentWeather),
                    axios(urlForecast),
                ]);

                const currentWeatherData = currentResponse.data;

                if (currentResponse.status === 200) {
                    setCurrentWeather({
                        weatherId: currentWeatherData.weather[0].id,
                        main: currentWeatherData.weather[0].main,
                        description: currentWeatherData.weather[0].description,
                        icon: currentWeatherData.weather[0].icon,
                        temp: currentWeatherData.main.temp,
                        feelsLike: currentWeatherData.main.feels_like,
                        humidity: currentWeatherData.main.humidity,
                        windSpeed: currentWeatherData.wind.speed,
                        windAngle: currentWeatherData.wind.deg,
                        cloudCover: currentWeatherData.clouds.all,
                    });
                } else {
                    setErrorMsg(
                        currentWeatherData.message ||
                            "Failed to fetch current weather data"
                    );
                }

                const forecastData = forecastResponse.data;

                if (forecastResponse.status === 200) {
                    setForecast(forecastData.list);
                } else {
                    setErrorMsg(
                        forecastData.message || "Failed to fetch forecast data"
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
