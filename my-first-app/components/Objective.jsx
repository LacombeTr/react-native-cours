import Checkbox from "expo-checkbox";
import { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export const Objective = ({
    objective,
    goals,
    setGoals,
    openEditModal,
    handleRemoveGoal,
    index,
}) => {
    const [isChecked, setChecked] = useState(objective.done);

    useEffect(() => {
        goals[index] = { ...objective, done: isChecked };
        setGoals([...goals]);
    }, [isChecked]);

    return (
        <Pressable style={styles.listItem} onPress={() => openEditModal(index)}>
            <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                style={styles.checkbox}
                color={isChecked ? "rgba(194, 71, 46, 1)" : "white"}
            />
            <Text style={styles.goalText}>- {objective.objective}</Text>
            <Pressable
                style={styles.deleteButton}
                onPress={() => handleRemoveGoal(index)}
            >
                <Text style={styles.deleteButtonText}>x</Text>
            </Pressable>
        </Pressable>
    );
};

const styles = StyleSheet.create({
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

    checkbox: {
        marginRight: 10,
    },

    goalText: {
        color: "white",
        fontSize: 12,
        flex: 1,
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
