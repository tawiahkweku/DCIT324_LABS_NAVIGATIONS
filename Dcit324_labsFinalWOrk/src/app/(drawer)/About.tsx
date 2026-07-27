import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Campus Navigator</Text>
      <Text style={styles.description}>
        A simple app for navigating campus announcements, courses, and events.
      </Text>
      <Text>Gyimah-Mensah Kwaku Tawiah</Text>
      <Text>22027250</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 20,
  },
  appName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
  },
});
