import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ContactElement = ({ name, phone }) => {
  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "column",
    alignContent: "flex-start",
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default ContactElement;
