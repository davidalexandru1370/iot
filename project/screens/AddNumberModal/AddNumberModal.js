import React from "react";
import { View, StyleSheet } from "react-native";
import ReactDOM from "react-dom";
import CustomInput from "../../components/CustomInput";

const Addnumbermodal = ({ isOpen, parent, close }) => {
  if (isOpen == false) {
    return false;
  }
  return ReactDOM.createPortal(
    <View style={styles.container}>
      <CustomInput placeholder="Name contact" />
      <CustomInput placeholder="Phone number" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "90%",
    flex: 1,
  },
});

export default Addnumbermodal;
