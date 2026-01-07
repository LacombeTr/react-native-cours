import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Image, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackgroundImage } from "../components/BackgroundImage";

type RecipeScreenProps = NativeStackScreenProps<RootStackParamList, "Recipe">;

export const RecipeScreen = ({ route }: RecipeScreenProps) => {
    const { recipeId } = route.params;
    const [cocktail, setCocktail] = useState<{ [key: string]: any }>();
    const [loading, setLoading] = useState(false);

    const fetchCocktailById = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`
            );
            if (response.data.drinks && response.data.drinks.length > 0) {
                setCocktail(response.data.drinks[0]);
            }
        } catch (error) {
            console.error("Error fetching cocktail by ID:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCocktailById();
    }, [recipeId]);

    return (
        <BackgroundImage>
            <View style={styles.container}>
                {loading ? (
                    <Text style={styles.text}>Loading...</Text>
                ) : cocktail ? (
                    <View style={styles.recipeContainer}>
                        <Text style={styles.title}>
                            {cocktail.strDrink}
                        </Text>
                        <Image
                            source={{
                                uri: cocktail.strDrinkThumb,
                            }}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={styles.boldText}>
                            Ingredients:
                        </Text>
                        {Object.entries(cocktail)
                            .filter(([key]) => key.startsWith("strIngredient") && cocktail[key])
                            .map(([key, value]) => (
                                <Text key={key} style={styles.text}>
                                    - {value} : {cocktail[`strMeasure${key.slice(13)}`] || ""}
                                </Text>
                            ))}
                        <Text style={styles.boldText}>
                            Instructions:
                        </Text>
                        <Text style={styles.text}>{cocktail.strInstructionsFR}</Text>
                    </View>
                ) : (
                    <Text style={styles.text}>Cocktail not found.</Text>
                )}
            </View>
        </BackgroundImage>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingBottom: 32,
        alignContent: "center",
    },
    title: {
        fontFamily: "Dechora",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 48,
        marginBottom: 10,
        textTransform: "uppercase",
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        paddingBottom: 10,
    },
    recipeContainer: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 16,
        alignItems: "center",
    },
    text: {
        color: "#fff",
    },
    boldText: {
        marginTop: 10,
        fontSize: 18,
        fontFamily: "mooshine-bold",
        color: "#fff",
    },
});