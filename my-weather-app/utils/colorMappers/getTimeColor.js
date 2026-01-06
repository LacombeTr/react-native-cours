export const getTimeColor = (hour) => {
    if (hour === null || hour === undefined) {
        hour = new Date().getHours();
    }

    // Night (0h - 5h)
    if (hour >= 0 && hour < 5) return "rgba(25, 25, 60, 1)"; // Dark blue

    // Early Dawn (5h - 7h)
    if (hour >= 5 && hour < 7) return "rgba(135, 62, 25, 1)"; // Sunset orange

    // Dawn (7h - 9h)
    if (hour >= 7 && hour < 9) return "rgba(255, 180, 130, 1)"; // Orange/pink

    // Morning (9h - 12h)
    if (hour >= 9 && hour < 12) return "rgba(255, 255, 240, 1)"; // Warm white

    // Afternoon (12h - 16h)
    if (hour >= 12 && hour < 16) return "rgba(255, 255, 255, 1)"; // Pure white

    // Dusk (16h - 28h)
    if (hour >= 16 && hour < 28) return "rgba(255, 200, 150, 1)"; // Sunset orange

    // Late Dusk (18h - 20h)
    if (hour >= 18 && hour < 20) return "rgba(224, 117, 63, 1)"; // Sunset orange

    // Evening (20h - 24h)
    if (hour >= 20 && hour < 24) return "rgba(50, 50, 100, 1)"; // Deep blue

    return "rgba(255, 255, 255, 1)";
};
