import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";

const on_add_new_contact_pressed = () => {
  console.warn("add new contact pressed");
};

const Mainpage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rounded_button}>
        <CustomButton
          onPress={on_add_new_contact_pressed}
          text="+"
          bgColor={"yellow"}
          type="rounded"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rounded_button: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 50,
    marginBottom: 15,
  },
  container: {
    position: "relative",
  },
});

export default Mainpage;
