import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CustomButton from "../../components/CustomButton";
import { selectContactPhone } from "react-native-select-contact";
import AddNumberModal from "../../screens/AddNumberModal";
import ContactElement from "../../components/contactElement/ContactElement";

const my_data = [
  {
    name: "david",
    phone: "0756761294",
    id: 1,
  },
  {
    name: "alexandru",
    phone: "0756761294",
    id: 2,
  },
];

const Mainpage = () => {
  const [accounts, setaccount] = useState(my_data);
  const [isShown, setisShown] = useState(false);
  const on_add_new_contact_pressed = () => {
    setisShown(true);
  };

  const renderItem = ({ item }) => (
    <ContactElement name={item.name} phone={item.phone} />
  );
  return (
    <View style={styles.container}>
      <FlatList data={accounts} renderItem={renderItem} />
      {isShown ? <AddNumberModal /> : null}
      <View style={styles.rounded_button}>
        <CustomButton
          onPress={on_add_new_contact_pressed}
          text="+"
          bgColor={"yellow"}
          type="rounded"
          style={styles.rounded_button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rounded_button: {
    width: 50,
    bottom: 0,
    margin: 20,
    position: "absolute",
    right: 0,
  },
  container: {
    marginTop: 25,
    position: "relative",
    height: "100%",
  },
});

export default Mainpage;
