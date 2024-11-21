import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NoteCard = ({ title, description, category, locked }) => {
  if (locked) {
    return (
      <View style={[styles.card, styles.lockedCard]}>
        <Ionicons name="lock-closed" size={32} color="#fff" />
        <Text style={styles.lockedText}>Đã khóa</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
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
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },
  tag: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#8A2BE2",
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
