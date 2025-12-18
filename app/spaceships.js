import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import TextModal from "../components/TextModal";
import GenericListScreen from "./GenericListScreen";

export default function SpaceshipsScreen() {
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Search input at the top */}
      <TextInput
        style={styles.input}
        placeholder="Enter a search term..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => {
          setSubmittedText(searchText);
          setModalVisible(true);
        }}
      />

      {/* Generic list (NOW FILTERED) */}
      <GenericListScreen
        apiUrl="https://www.swapi.tech/api/starships"
        titleKey="name"
        filter={searchText}
      />

      {/* Modal to show submitted text */}
      <TextModal
        visible={modalVisible}
        text={submittedText}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    margin: 10,
    borderRadius: 5,
  },
});
