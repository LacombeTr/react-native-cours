import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export const CreateZone = ({ newObjective, handleChange, handleAddGoal }) => {
    
    const styles = StyleSheet.create({
    
        input: {
            height: "100%",
            width: "50%",
            borderColor: "gray",
            borderRadius: 2,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 2,
        },
    
        addButtonText: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
        },
    
        addButton: {
            backgroundColor: "rgba(194, 71, 46, 1)",
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 4,
        },
    });
    
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: 10,
            }}
        >
            <TextInput
                style={styles.input}
                value={newObjective}
                onChangeText={handleChange}
                placeholder='Entrez un nouvel objectif'
            />
            <Pressable
                style={styles.addButton}
                title='Ajouter'
                onPress={handleAddGoal}
            >
                <Text style={styles.addButtonText}>Ajouter</Text>
            </Pressable>
        </View>
    );
};
