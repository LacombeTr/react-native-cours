import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export const DisplayZone = ({ goals, handleRemoveGoal }) => {
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
        },

        goalText: {
            color: "white",
            fontSize: 12,
        },

        deleteButton: {
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 50,
        },

        deleteButtonText: {
            color: "white",
            fontWeight: "bold",
        },
    });

    return (
        <View style={styles.list}>
            {goals.map((goal, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.goalText}>- {goal} </Text>
                    <Pressable
                        style={styles.deleteButton}
                        onPress={() => handleRemoveGoal(index)}
                    >
                        <Text style={styles.deleteButtonText}>x</Text>
                    </Pressable>
                </View>
            ))}
        </View>
    );
};
