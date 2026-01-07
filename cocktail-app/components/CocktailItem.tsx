import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const CocktailItem = ({ item }: { item: { [key: string]: any } }) => {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            style={styles.cocktailItem}
            onPress={() =>
                navigation.navigate("Recipe", { recipeId: item.idDrink })
            }
        >
            <Text style={styles.cocktailName}>{item.strDrink}</Text>
            <Text style={styles.cocktailCategory}>{item.strCategory}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cocktailItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    cocktailName: {
        color: "#333",
        fontSize: 18,
        fontWeight: "bold",
    },
    cocktailCategory: {
        fontSize: 14,
        color: "#ccc",
    },
});
