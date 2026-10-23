import { StyleSheet, Text, View } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Progress</Text>
      <Text style={styles.text}>Welcome to your dashboard!</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Log in on the web version to track your specific progress and earn
          certificates.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0e27", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  text: { color: "#9aa4bf", fontSize: 16, marginBottom: 24 },
  card: {
    backgroundColor: "#1a2142",
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2a3358",
  },
  cardText: { color: "#fff", fontSize: 16, lineHeight: 24 },
});
