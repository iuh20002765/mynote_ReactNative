import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Thư viện icon Material Design

function DiaryDate() {
  const [selectedTab, setSelectedTab] = useState("Ngày");
  const navigation = useNavigation();

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    if (tab === "Tuần") {
      navigation.navigate("DiaryWeek");
    } else if (tab === "Tháng") {
      navigation.navigate("DiaryMonth");
    }
  };

  const notes = [
    {
      id: "1",
      date: new Date().toLocaleDateString("vi-VN"), // Ngày
      title: "Một ngày xinh đẹp...",
      type: "image",
      time: "13:42 PM",
      tag: "Life Style",
      image: require("../assets/anh1.jpg"), // Đường dẫn ảnh
    },
    {
      id: "2",
      date: new Date().toLocaleDateString("vi-VN"), // Ngày
      title: "Một ngày xinh đẹp...",
      type: "audio",
      time: "14:00 PM",
      tag: "Life Style",
    },
    {
      id: "3",
      date: new Date().toLocaleDateString("vi-VN"), // Ngày
      title: "Một ngày xinh đẹp...",
      type: "image",
      time: "13:42 PM",
      tag: "Life Style",
      image: "https://via.placeholder.com/300x150", // Đường dẫn ảnh
    },
    {
      id: "4",
      date: new Date().toLocaleDateString("vi-VN"), // Ngày
      title: "Một ngày xinh đẹp...",
      type: "audio",
      time: "14:00 PM",
      tag: "Life Style",
    },
  ];
  const stories = [
    {
      id: "1",
      name: "Trích dẫn hôm nay",
      image: require("../assets/anh1.jpg"),
    },
    {
      id: "2",
      name: "Nguyễn Lê Minh Duy",
      image: require("../assets/anh1.jpg"),
    },
    {
      id: "3",
      name: "William Shakespeare",
      image: require("../assets/anh1.jpg"),
    },
    { id: "4", name: "Alex Johnson", image: require("../assets/anh1.jpg") },
    {
      id: "5",
      name: "William Shakespeare",
      image: require("../assets/anh1.jpg"),
    },
    {
      id: "6",
      name: "William Shakespeare",
      image: require("../assets/anh1.jpg"),
    },
    {
      id: "7",
      name: "William Shakespeare",
      image: require("../assets/anh1.jpg"),
    },
  ];

  const renderNote = ({ item }) => {
    return (
      <View>
        <View style={styles.noteTopBar}>
          <Text style={styles.noteDate}>Hôm nay, {item.date}</Text>
          <Icon
            name="more-horiz"
            size={24}
            color="#000"
            style={styles.noteMenuIcon}
          />
        </View>
        <View style={styles.noteCard}>
          <View style={styles.noteHeaderContainer}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteTime}>{item.time}</Text>
          </View>
          {item.type === "image" ? (
            <Image source={{ uri: item.image }} style={styles.noteImage} />
          ) : (
            <View style={styles.audioContainer}>
              <Text>Audio Player Placeholder</Text>
            </View>
          )}
          <View style={styles.noteTagContainer}>
            <Text style={styles.noteTag}>{item.tag}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderStory = ({ item }) => (
    <View style={styles.story}>
      <Image source={{ uri: item.image }} style={styles.storyImage} />
      <Text style={styles.storyName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {["Ngày", "Tuần", "Tháng"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.selectedTabButton,
            ]}
            onPress={() => handleTabPress(tab)}
          >
            <Text
              style={
                selectedTab === tab ? styles.selectedTabText : styles.tabText
              }
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notes List */}
      <FlatList
        data={notes}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.noteList}
      />

      {/* Stories List */}
      <FlatList
        data={stories}
        renderItem={renderStory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storyList}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  selectedTabButton: {
    backgroundColor: "#000",
  },
  tabText: {
    color: "#000",
    fontWeight: "bold",
  },
  selectedTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  noteList: {
    paddingHorizontal: 10,
  },
  noteCard: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  noteTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  noteDate: {
    fontSize: 20,
    color: "#000", // Màu chữ ngày
    fontWeight: "bold",
  },
  noteMenuIcon: {
    marginLeft: 10,
  },
  noteHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  noteImage: {
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  audioContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 10,
  },
  noteTime: {
    marginTop: 10,
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  noteTagContainer: {
    alignSelf: "flex-start", // Để tag không chiếm toàn bộ chiều rộng
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C8A1E0", // Màu đường viền
    marginTop: 10,
  },
  noteTag: {
    marginTop: 5,
    color: "#C8A1E0",
    fontStyle: "italic",
  },
  storyList: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  story: {
    alignItems: "center",
    marginRight: 15,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#000", // Màu đư��ng viền
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    width: 80,
    fontWeight: "bold",
  },
});

export default DiaryDate;
