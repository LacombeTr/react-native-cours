/**
 * Hook de traduction des descriptions météo OpenWeather (EN -> FR)
 * Basé sur les descriptions officielles de l'API OpenWeather
 * https://openweathermap.org/weather-conditions
 */

const weatherTranslations = {
    // Thunderstorm (Groupe 2xx)
    "thunderstorm with light rain": "orage avec pluie légère",
    "thunderstorm with rain": "orage avec pluie",
    "thunderstorm with heavy rain": "orage avec forte pluie",
    "light thunderstorm": "orage léger",
    "thunderstorm": "orage",
    "heavy thunderstorm": "orage violent",
    "ragged thunderstorm": "orage irrégulier",
    "thunderstorm with light drizzle": "orage avec bruine légère",
    "thunderstorm with drizzle": "orage avec bruine",
    "thunderstorm with heavy drizzle": "orage avec forte bruine",

    // Drizzle (Groupe 3xx)
    "light intensity drizzle": "bruine légère",
    "drizzle": "bruine",
    "heavy intensity drizzle": "forte bruine",
    "light intensity drizzle rain": "pluie bruineuse légère",
    "drizzle rain": "pluie bruineuse",
    "heavy intensity drizzle rain": "forte pluie bruineuse",
    "shower rain and drizzle": "averses et bruine",
    "heavy shower rain and drizzle": "fortes averses et bruine",
    "shower drizzle": "averses de bruine",

    // Rain (Groupe 5xx)
    "light rain": "pluie légère",
    "moderate rain": "pluie modérée",
    "heavy intensity rain": "pluie intense",
    "very heavy rain": "pluie très forte",
    "extreme rain": "pluie extrême",
    "freezing rain": "pluie verglaçante",
    "light intensity shower rain": "averses légères",
    "shower rain": "averses",
    "heavy intensity shower rain": "fortes averses",
    "ragged shower rain": "averses irrégulières",

    // Snow (Groupe 6xx)
    "light snow": "neige légère",
    "snow": "neige",
    "heavy snow": "forte neige",
    "sleet": "neige fondue",
    "light shower sleet": "légères averses de neige fondue",
    "shower sleet": "averses de neige fondue",
    "light rain and snow": "pluie et neige légères",
    "rain and snow": "pluie et neige",
    "light shower snow": "légères averses de neige",
    "shower snow": "averses de neige",
    "heavy shower snow": "fortes averses de neige",

    // Atmosphere (Groupe 7xx)
    "mist": "brume",
    "smoke": "fumée",
    "haze": "brume sèche",
    "sand/dust whirls": "tourbillons de sable/poussière",
    "fog": "brouillard",
    "sand": "sable",
    "dust": "poussière",
    "volcanic ash": "cendres volcaniques",
    "squalls": "rafales",
    "tornado": "tornade",

    // Clear (Groupe 800)
    "clear sky": "ciel dégagé",

    // Clouds (Groupe 80x)
    "few clouds": "quelques nuages",
    "scattered clouds": "nuages épars",
    "broken clouds": "nuages fragmentés",
    "overcast clouds": "ciel couvert",
};

/**
 * Hook pour traduire les descriptions météo de l'anglais vers le français
 * @param {string} description - Description météo en anglais
 * @returns {string} - Description traduite en français
 */
export const useTranslateWeather = (description) => {
    if (!description) return "";

    const lowerDescription = description.toLowerCase();
    
    // Recherche exacte dans le dictionnaire
    if (weatherTranslations[lowerDescription]) {
        return weatherTranslations[lowerDescription];
    }

    // Recherche partielle si pas de correspondance exacte
    for (const [english, french] of Object.entries(weatherTranslations)) {
        if (lowerDescription.includes(english)) {
            return french;
        }
    }

    // Retourne la description originale si pas de traduction trouvée
    return description;
};

/**
 * Fonction utilitaire (non-hook) pour traduire une description
 * Utile pour les cas où on ne peut pas utiliser un hook
 */
export const translateWeatherDescription = (description) => {
    if (!description) return "";

    const lowerDescription = description.toLowerCase();
    
    if (weatherTranslations[lowerDescription]) {
        return weatherTranslations[lowerDescription];
    }

    for (const [english, french] of Object.entries(weatherTranslations)) {
        if (lowerDescription.includes(english)) {
            return french;
        }
    }

    return description;
};
