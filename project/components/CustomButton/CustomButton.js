import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type, bgColor, fgColor }) => {
  return (
    <Pressable
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: "#f8f8f8",
  },

  container_primary: {
    backgroundColor: "#3B71f3",
  },

  container_tertiary: {},

  text: {
    fontSize: 15,
  },

  text_tertiary: {
    color: "#444",
  },
});

export default CustomButton;
