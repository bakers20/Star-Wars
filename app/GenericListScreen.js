import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

export default function GenericListScreen({ apiUrl, titleKey }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        // Some endpoints have json.result, some have json.results
        const list = json.results || json.result ? [json.result || json.results].flat() : [];
        setData(list);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uid || item.url}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item[titleKey] || item.properties?.[titleKey] || "No name"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  itemText: { fontSize: 18 },
});
