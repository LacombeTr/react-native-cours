import {
    Modal,
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
} from "react-native";

export const EditModal = ({
    modalVisible,
    setModalVisible,
    goals,
    setGoals,
    activeObjective,
    setActiveObjective,
    editedObjective,
    setEditedObjective,
}) => {
    const handleCancelEdit = () => {
        setEditedObjective("");
        setActiveObjective(null);
        setModalVisible(false);
    };

    const handleEdit = () => {
        goals[activeObjective] = editedObjective;
        setGoals([...goals]);
        setEditedObjective("");
        setModalVisible(false);
    };

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Éditer l'objectif</Text>

                    <TextInput
                        style={styles.input}
                        value={editedObjective}
                        initialValue={editedObjective}
                        onChangeText={setEditedObjective}
                    ></TextInput>

                    <View
                        style={{ flexDirection: "row", gap: 10, marginTop: 15 }}
                    >
                        <Pressable style={[styles.button]} onPress={handleEdit}>
                            <Text style={styles.textStyle}>Valider</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button]}
                            onPress={handleCancelEdit}
                        >
                            <Text style={styles.textStyle}>Fermer</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000099",
    },
    modalView: {
        width: "80%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: "rgba(194, 71, 46, 1)",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        width: "100%",
        marginBottom: 15,
        textAlign: "center",
        color: "rgba(194, 71, 46, 1)",
        fontWeight: "bold",
        fontSize: 18,
        textTransform: "uppercase",
    },

    input: {
        width: "80%",
        borderColor: "gray",
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
});
