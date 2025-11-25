import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TextModal({ visible, text, onClose }) {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>{text}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalInner: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
  modalButton: {
    color: "blue",
    fontWeight: "bold",
  },
});
