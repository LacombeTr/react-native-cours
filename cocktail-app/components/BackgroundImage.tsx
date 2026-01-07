import React from "react";
import { ImageBackground, StyleSheet, ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface BackgroundImageProps extends ViewProps {
    children: React.ReactNode;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, style }) => {
    return (
        <LinearGradient
            colors={["#1a0a0a", "#2d1810", "#4a1c1c", "#d43131"]}
            locations={[0, 0.3, 0.6, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.gradient, style]}
        >
            {children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
});
