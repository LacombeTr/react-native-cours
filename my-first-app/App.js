import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { CreateZone } from "./components/CreateZone";
import { DisplayZone } from "./components/DisplayZone";

export default function App() {
    const [newObjective, setNewObjective] = useState("");
    const [goals, setGoals] = useState([
        "Faire les courses",
        "Aller à la salle de sport 3 fois par semaine",
        "Monter à plus de 5000m d altitude",
        "Acheter mon premier appartement",
        "Perdre 5 kgs",
        "Gagner en productivité",
        "Apprendre un nouveau langage",
        "Faire une mission en freelance",
        "Organiser un meetup autour de la tech",
        "Faire un triathlon",
    ]);

    const handleChange = (text) => {
        setNewObjective(text);
    };

    const handleAddGoal = () => {
        if (newObjective.trim()) {
            setGoals([...goals, newObjective]);
            setNewObjective("");
        }
    };

    const handleRemoveGoal = (index) => {
        const updatedGoals = goals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.background}
                source={require("./assets/background-image.jpg")}
                resizeMode="cover"
            />
            <Text style={styles.title}>Mes buts 2026</Text>
            <Text>Ajouter un nouvel objectif:</Text>

            <CreateZone
                newObjective={newObjective}
                handleChange={handleChange}
                handleAddGoal={handleAddGoal}
            />

            <DisplayZone goals={goals} handleRemoveGoal={handleRemoveGoal} />

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
