import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import SignInScreen from "./screens/SignInScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen></SignInScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fbfc",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
