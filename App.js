import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddSymptoms from "./screen/AddSymptoms";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <AddSymptoms />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
