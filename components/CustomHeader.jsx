import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Sử dụng biểu tượng Ionicons hoặc thư viện khác

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Nút quay lại */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Khoảng trống bên phải để cân bằng */}
      <View style={styles.emptySpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Align items to the start (left)
    padding: 16,
    backgroundColor: "#fff", // Màu nền cho header
    elevation: 4, // Đổ bóng cho header
  },
  backButton: {
    marginRight: 16, // Khoảng cách giữa nút quay lại và tiêu đề
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Cho tiêu đề chiếm không gian còn lại
  },
  emptySpace: {
    width: 24, // Khoảng trống bên phải tiêu đề
  },
});

export default CustomHeader;
