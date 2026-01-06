export const getWeatherColor = (weatherId) => {
    if (!weatherId) return "rgba(150, 216, 245, 1)";

    if (weatherId >= 200 && weatherId < 300) return "rgba(75, 75, 100, 1)"; // Thunderstorm
    if (weatherId >= 300 && weatherId < 400) return "rgba(130, 160, 180, 1)"; // Drizzle
    if (weatherId >= 500 && weatherId < 600) return "rgba(100, 130, 160, 1)"; // Rain
    if (weatherId >= 600 && weatherId < 700) return "rgba(200, 220, 240, 1)"; // Snow
    if (weatherId >= 700 && weatherId < 800) return "rgba(160, 160, 160, 1)"; // Fog/Mist
    if (weatherId === 800) return "rgba(135, 206, 250, 1)"; // Clear
    if (weatherId > 800) return "rgba(170, 190, 210, 1)"; // Clouds

    return "rgba(150, 216, 245, 1)";
};