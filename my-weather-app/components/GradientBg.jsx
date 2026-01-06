import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export const GradientBg = () => {
    return (
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0.6 }}
            colors={["rgba(255, 255, 255, 1)","rgba(150, 216, 245, 1)"]}
            style={styles.background}
        />
    );
};

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
});
