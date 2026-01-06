import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export const GradientBg = () => {
    return (
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0.4 }}
            colors={["rgba(255, 255, 255, 1)", "rgba(150, 216, 245, 1)"]}
            style={styles.background}
        />
    );
};

const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
});
