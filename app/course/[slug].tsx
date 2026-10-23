import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function CourseWebView() {
  const { slug } = useLocalSearchParams();

  // This loads your live website's course details page inside the app!
  const url = `https://the-kelvin-ikpeni-dev-bootcamp.onrender.com/course-details?slug=${slug}`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webview}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0e27" },
  webview: { flex: 1 },
});
