import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Logo from "../../.expo/assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [username, set_username] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [repeat_password, set_repeat_password] = useState("");

  const navigation = useNavigation();

  const on_create_account_pressed = () => {
    console.warn("Create account");
  };

  const on_sign_in = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain"></Image>

      <Text styles={styles.text}>Username</Text>
      <CustomInput
        value={username}
        setValue={set_username}
        placeholder="Username"
      />

      <Text style={styles.text}>Email address</Text>
      <CustomInput
        value={email}
        setValue={set_email}
        placeholder="Email address"
      ></CustomInput>

      <Text style={styles.text}>Password</Text>
      <CustomInput
        value={password}
        setValue={set_password}
        placeholder="Password"
        secureText={true}
      />

      <Text style={styles.text}>Repeat password</Text>
      <CustomInput
        value={repeat_password}
        setValue={set_repeat_password}
        placeholder="Repeat password"
        secureText={true}
      />

      <CustomButton
        onPress={on_create_account_pressed}
        text="Create account"
        type="primary"
      />

      <CustomButton
        onPress={on_sign_in}
        text="Already have an account? Sign in."
        type="tertiary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
  },

  text: {},

  logo: {
    width: 100,
    height: 100,
  },
});

export default SignUpScreen;
