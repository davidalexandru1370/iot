import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../.expo/assets/images/logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const on_forgot_password_pressed = () => {
    console.warn("Forgot password!");
  };

  const on_sign_in_with_facebook = () => {
    console.warn("Sign in with facebook!");
  };

  const on_sign_in_with_google = () => {
    console.warn("Sign in with google!");
  };

  const on_create_account = () => {
    console.warn("Create an account");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain"></Image>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={set_username}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={set_password}
          secureText={true}
        />

        <CustomButton
          text={"Sign in"}
          onPress={onSignInPressed}
          type={"primary"}
        />
        <CustomButton
          text={"Forgot Password"}
          onPress={on_forgot_password_pressed}
          type="tertiary"
        />

        <CustomButton
          text={"Sign In with Facebook"}
          onPress={on_sign_in_with_facebook}
          bgColor="#e7eaf4"
          fgColor="#4765A9"
        />

        <CustomButton
          text={"Sign In with Google"}
          onPress={on_sign_in_with_google}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />

        <CustomButton
          text="Create an account"
          onPress={on_create_account}
          type="tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: 100,
    height: 100,
  },
});

export default SignInScreen;
