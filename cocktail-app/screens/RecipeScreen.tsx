import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Image } from "react-native";
import { RootStackParamList } from "../App";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <View>
            {loading ? (
                <Text>Loading...</Text>
            ) : cocktail ? (
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                        {cocktail.strDrink}
                    </Text>
                    <Image
                        source={{
                            uri: cocktail.strDrinkThumb,
                        }}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
                        Instructions:
                    </Text>
                    {Object.entries(cocktail)
                        .filter(([key]) => key.startsWith("strIngredient") && cocktail[key])
                        .map(([key, value]) => (
                            <Text key={key}>
                                - {value} : {cocktail[`strMeasure${key.slice(13)}`] || ""}
                            </Text>
                        ))}
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
                        Instructions:
                    </Text>
                    <Text>{cocktail.strInstructionsFR}</Text>
                </View>
            ) : (
                <Text>Cocktail not found.</Text>
            )}
        </View>
    );
};
