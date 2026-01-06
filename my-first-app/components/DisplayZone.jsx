import { StyleSheet, FlatList, Text } from "react-native";
import { Objective } from "./Objective";

export const DisplayZone = ({
    goals,
    setGoals,
    handleRemoveGoal,
    openEditModal,
}) => {
    return (
        <>
            <Text style={styles.subtitle}>Objectifs en cours:</Text>
            <FlatList
                style={styles.list}
                data={goals.filter(goal => !goal.done)}
                renderItem={({ item, index }) => (
                    <Objective
                        objective={item}
                        setGoals={setGoals}
                        goals={goals.filter(goal => !goal.done)}
                        handleRemoveGoal={() => handleRemoveGoal(index)}
                        openEditModal={() => openEditModal(index)}
                        index={index}
                    />
                )}
                keyExtractor={(_, index) => index.toString()}
            />
            <Text style={styles.subtitle}>Objectifs réalisés:</Text>
            <FlatList
                style={styles.list}
                data={goals.filter(goal => goal.done)}
                renderItem={({ item, index }) => (
                    <Objective
                        objective={item}
                        setGoals={setGoals}
                        goals={goals.filter(goal => goal.done)}
                        handleRemoveGoal={() => handleRemoveGoal(index)}
                        openEditModal={() => openEditModal(index)}
                        index={index}
                    />
                )}
                keyExtractor={(_, index) => index.toString()}
            />
        </>
    );
};

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
        width: "80%",
        gap: 5,
    },

    subtitle: {
        fontWeight: "bold",
        marginTop: 15,
        color: "rgba(194, 71, 46, 1)",
    }
});
