import { StyleSheet, Text, View } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Progress</Text>
      <Text style={styles.text}>Login and progress tracking coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0e27", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 16 },
  text: { color: "#9aa4bf", fontSize: 16 },
});
