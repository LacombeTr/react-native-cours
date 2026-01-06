import {
    StyleSheet,
    View,
    Item,
    FlatList,
    Text,
    Pressable,
} from "react-native";

export const DisplayZone = ({ goals, handleRemoveGoal, openEditModal }) => {
    const styles = StyleSheet.create({
        list: {
            marginTop: 20,
            width: "80%",
            gap: 5,
        },

        listItem: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "rgba(194, 71, 46, 1)",
            paddingVertical: 2,
            paddingHorizontal: 10,
            borderRadius: 100,
            marginVertical: 3,
        },

        goalText: {
            color: "white",
            fontSize: 12,
        },

        deleteButton: {
            paddingHorizontal: 10,
            paddingVertical: 4,
        },

        deleteButtonText: {
            color: "white",
            fontWeight: "bold",
            border: "0px solid transparent",
        },
    });

    return (
        <FlatList
            style={styles.list}
            data={goals}
            renderItem={({ item, index }) => (
                <Pressable style={styles.listItem} onPress={() => openEditModal(index)}>
                    <Text style={styles.goalText}>- {item}</Text>
                    <Pressable
                        style={styles.deleteButton}
                        onPress={() => handleRemoveGoal(index)}
                    >
                        <Text style={styles.deleteButtonText}>x</Text>
                    </Pressable>
                </Pressable>
            )}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};
