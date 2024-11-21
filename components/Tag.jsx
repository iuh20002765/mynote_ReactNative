import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Tag = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.tag, active && styles.activeTag]}
      onPress={onPress}
    >
      <Text style={[styles.tagText, active && styles.activeTagText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    justifyContent: "center", // Giữ text ở giữa
    alignItems: "center", // Giữ text ở giữa
  },
  activeTag: {
    backgroundColor: "#E8E8FF",
    borderColor: "#C8A1E0",
    // Không thay đổi padding/margin khi active
  },
  tagText: {
    fontSize: 14,
    color: "#999",
  },
  activeTagText: {
    color: "#C8A1E0",
  },
});

export default Tag;
