import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import LockWidget from "./src/widgets/ios/lock-widget";

export default function App() {
  useEffect(() => {
    LockWidget.updateSnapshot({
      text: "One two three four five six seven eight nine ten eleven twelve thirteen fourteen",
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Add the lock screen widget to reproduce the lineLimit bug.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
