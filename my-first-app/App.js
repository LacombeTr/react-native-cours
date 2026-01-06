import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { CreateZone } from "./components/CreateZone";
import { DisplayZone } from "./components/DisplayZone";
import { EditModal } from "./components/EditModal";

export default function App() {
    const [newObjective, setNewObjective] = useState(null);
    const [activeObjective, setActiveObjective] = useState(null);
    const [editedObjective, setEditedObjective] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);

    const [goals, setGoals] = useState([]);

    const handleChange = (text) => {
        setNewObjective({ objective: text, done: false });
    };

    const handleAddGoal = () => {
        if (newObjective.objective.trim()) {
            setGoals([...goals, newObjective]);
            setNewObjective("");
        }
    };

    const handleRemoveGoal = (index) => {
        const updatedGoals = goals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    const handleEditGoal = (index) => {
        setActiveObjective(index);
        setEditedObjective(goals[index]);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require("./assets/background-image.jpg")}
            />
            <Text style={styles.title}>Mes buts 2026</Text>
            <Text>Ajouter un nouvel objectif:</Text>

            <CreateZone
                newObjective={newObjective}
                handleChange={handleChange}
                handleAddGoal={handleAddGoal}
            />

            <DisplayZone
                goals={goals}
                setGoals={setGoals}
                handleRemoveGoal={handleRemoveGoal}
                openEditModal={handleEditGoal}
            />

            <EditModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                goals={goals}
                setGoals={setGoals}
                activeObjective={activeObjective}
                setActiveObjective={setActiveObjective}
                editedObjective={editedObjective}
                setEditedObjective={setEditedObjective}
            />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 128,
        overflow: "hidden",
        backgroundColor: "white",
    },

    background: {
        position: "absolute",
        width: "110%",
        height: "auto",
        aspectRatio: 0.5,
        zIndex: -1,
        opacity: 0.3,
    },

    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 24,
        textTransform: "uppercase",
        color: "rgba(194, 71, 46, 1)",
        fontFamily: "Arial",
        fontWeight: "bold",
    },
});
