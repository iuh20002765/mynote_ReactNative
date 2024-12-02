import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import NoteCard from "../components/NoteCard";
import Tag from "../components/Tag";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [notes, setNotes] = useState([
    {
      id: "1",
      title: "My favorite person",
      description: "Lorem ipsum...",
      category: "Personal",
      locked: false,
    },
    {
      id: "2",
      title: "My devil",
      description: "Lorem ipsum...",
      category: "UI",
      locked: true,
    },
    {
      id: "3",
      title: "Personal",
      description: "Lorem ipsum...",
      category: "Work",
      locked: false,
    },
    {
      id: "4",
      title: "My work",
      description: "Lorem ipsum...",
      category: "Work",
      locked: false,
    },
    {
      id: "5",
      title: "My favorite person",
      description: "Lorem ipsum...",
      category: "Hobby",
      locked: true,
    },
    {
      id: "6",
      title: "setSearchQuery",
      description: "Lorem ipsum...",
      category: "Work",
      locked: false,
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [showAddButtons, setShowAddButtons] = useState(false);

  const tags = ["All", "Work", "UI", "Personal", "Hobby", "Fitness"];

  // Xử lý tìm kiếm và sắp xếp
  const filteredNotes = notes
    .filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((note) => filter === "All" || note.category === filter);

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    return sortAscending
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  const toggleAddButtons = () => {
    setShowAddButtons(!showAddButtons);
  };

  return (
    <View style={styles.container}>
      {/* Greeting */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Một ngày tốt lành,</Text>
          <Text style={styles.username}>
            Kein <Text style={styles.heart}>❤️</Text>
          </Text>
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filter Tags */}
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {tags.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              active={filter === tag}
              onPress={() => setFilter(tag)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Notes List */}
      <FlatList
        data={sortedNotes}
        renderItem={({ item }) => (
          <NoteCard
            title={item.title}
            description={item.description}
            category={item.category}
            locked={item.locked}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      {/* Add Note Button */}
      <TouchableOpacity style={styles.addButton} onPress={toggleAddButtons}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      {/* Small Add Buttons */}
      {showAddButtons && (
        <View style={styles.smallButtonsContainer}>
          <TouchableOpacity style={styles.smallButton}>
            <Ionicons name="camera" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Ionicons name="mic" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Ionicons name="create" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 18,
    color: "#000",
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  heart: {
    color: "red",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
  },
  filterContainer: {
    marginVertical: 10,
    height: 50,
    justifyContent: "center",
  },
  list: {
    paddingBottom: 80,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#000",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  smallButtonsContainer: {
    position: "absolute",
    bottom: 100,
    right: 20,
    flexDirection: "column", // Sắp xếp theo chiều dọc
  },
  smallButton: {
    marginBottom: 10, // Khoảng cách giữa các nút
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#000",
  },
});
