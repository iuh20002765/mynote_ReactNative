import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NoteDetail = ({ route }) => {
  const { title, description, category, locked, date, time } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.datetime}>{time}</Text>
      <Text style={styles.datetime}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.locked}>{locked ? "Locked" : "Unlocked"}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          padding: 20,
          justifyContent: "center",
        }}
      >
        <Ionicons name="color-palette" size={30} color="gray" />
        <Ionicons name="trash" size={30} color="gray" />
        <Ionicons name="lock" size={30} color="gray" />
        <Ionicons name="share" size={30} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  datetime: {
    fontSize: 16,
    margin: 8,
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
  },
  locked: {
    fontSize: 14,
    color: "red",
  },
});

export default NoteDetail;
