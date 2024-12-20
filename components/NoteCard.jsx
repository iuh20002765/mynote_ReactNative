import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import hook

const NoteCard = ({ title, description, category, locked, id, date, time }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    // Khi nhấn vào NoteCard, điều hướng đến màn hình NoteDetail và truyền thông tin của note
    navigation.navigate("NoteDetail", {
      id,
      title,
      description,
      category,
      locked,
      date,
      time,
    });
  };
  if (locked) {
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.card, styles.lockedCard]}>
          <Ionicons name="lock-closed" size={32} color="#fff" />
          <Text style={styles.lockedText}>Đã khóa</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
    position: "relative",
  },
  lockedCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C8A1E0",
    opacity: 0.9,
    borderColor: "#000",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginVertical: 8,
  },
  tag: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#C8A1E0",
    borderColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  lockedText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default NoteCard;
