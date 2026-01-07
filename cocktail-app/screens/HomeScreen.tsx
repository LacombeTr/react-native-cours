import {
    View,
    Button,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { UseCocktails } from "../hooks/UseCocktails";
import { CocktailItem } from "../components/CocktailItem";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const { cocktailList, loading, loadMore, loadingMore, hasMore } =
        UseCocktails();

    const renderFooter = () => {
        if (!loadingMore) return null;
        return (
            <View style={styles.footer}>
                <ActivityIndicator size='small' color='#0000ff' />
            </View>
        );
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        );
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Cocktail App</Text>
                <FlatList
                    data={cocktailList}
                    renderItem={(item) => <CocktailItem item={item.item} />}
                    keyExtractor={(item) => item.idDrink}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={renderFooter}
                    contentContainerStyle={styles.listContent}
                />
                <Button
                    title='Go to Search'
                    onPress={() => navigation.navigate("Search")}
                />
                <Button
                    title='Go to Recipe'
                    onPress={() =>
                        navigation.navigate("Recipe", { recipeId: "123" })
                    }
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textTransform: "uppercase",
        textAlign: "center",
    },
    count: {
        textAlign: "center",
        marginBottom: 10,
        color: "#666",
    },
    listContent: {
        paddingHorizontal: 16,
    },
    cocktailItem: {
        backgroundColor: "#f9f9f9",
        padding: 16,
        marginVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#eee",
    },
    cocktailName: {
        fontSize: 16,
        fontWeight: "600",
    },
    cocktailCategory: {
        fontSize: 12,
        color: "#666",
        marginTop: 4,
    },
    footer: {
        padding: 20,
        alignItems: "center",
    },
});
