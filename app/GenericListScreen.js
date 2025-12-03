import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import TextModal from "../components/TextModal";

export default function GenericListScreen({ apiUrl, titleKey }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        const list = json.results || json.result ? [json.result || json.results].flat() : [];
        setData(list);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [apiUrl]);

  const handleSwipe = (item) => {
    setSelectedItem(item[titleKey] || item.properties?.[titleKey] || "No name");
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextModal
        visible={modalVisible}
        text={selectedItem}
        onClose={() => setModalVisible(false)}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.uid || item.url}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => (
              <TouchableOpacity
                style={styles.swipeAction}
                onPress={() => handleSwipe(item)}
              >
                <Text style={styles.swipeText}>Show</Text>
              </TouchableOpacity>
            )}
          >
            <View style={styles.item}>
              <Text style={styles.itemText}>
                {item[titleKey] || item.properties?.[titleKey] || "No name"}
              </Text>
            </View>
          </Swipeable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ccc", backgroundColor: "#fff" },
  itemText: { fontSize: 18 },
  swipeAction: {
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    marginVertical: 1,
  },
  swipeText: { color: "white", fontWeight: "bold" },
});
