import {
    View,
    Button,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Pressable,
} from "react-native";
import { UseCocktails } from "../hooks/UseCocktails";
import { CocktailItem } from "../components/CocktailItem";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BackgroundImage } from "../components/BackgroundImage";

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
        <BackgroundImage>
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
                <Pressable
                    onPress={() => navigation.navigate("Search")}
                    style={styles.searchButton}
                >
                    <Ionicons name='search' size={30} color='#fff' />
                </Pressable>
            </View>
        </BackgroundImage>
    );
};

const styles = StyleSheet.create({
    searchButton: {
        position: "absolute",
        top: 20,
        right: 20,
        marginTop: 10,
    },
    container: {
        flex: 1,
        paddingTop: 96,
        paddingBottom: 32,
        paddingHorizontal: 32,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    listContent: {
        paddingHorizontal: 16,
    },
    footer: {
        padding: 20,
        alignItems: "center",
    },
});
