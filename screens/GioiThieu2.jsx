import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GioiThieu2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Hàng biểu tượng và tên ứng dụng */}
      <View style={styles.header}>
        <Ionicons name="book" size={40} color="#C8A1E0" />
        <Text style={styles.appName}>mynote</Text>
      </View>

      {/* Hình ảnh */}
      <Image
        source={require("../assets/gioithieu2.png")} // Đường dẫn tới hình ảnh của bạn
        style={styles.image}
      />

      {/* Tiêu đề và mô tả */}
      <Text style={styles.title}>Ghi chú nhóm</Text>
      <Text style={styles.description}>
        Cùng nhau tạo, chỉnh sửa và chia sẻ ghi chú theo thời gian thực, tăng
        cường sự hợp tác và hiệu quả làm việc.
      </Text>

      {/* Nút "Tiếp tục" */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("GioiThieu3")}
      >
        <Text style={styles.continueButtonText}>Tiếp tục</Text>
      </TouchableOpacity>

      {/* Nút "Bỏ qua" */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("GioiThieu3")}
      >
        <Text style={styles.skipButtonText}>Bỏ qua</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#C8A1E0",
  },
  image: {
    width: 331, // Kích thước hình ảnh
    height: 256,
    marginBottom: 20, // Khoảng cách
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 24,
    color: "#666",
    fontWeight: "light",
    textAlign: "center",
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "#C8A1E0", // Màu nền cho nút "Tiếp tục"
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25, // Bo tròn nút
    marginVertical: 10,
    alignItems: "center",
    width: "90%", // Chiều rộng của nút
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  skipButton: {
    borderWidth: 1,
    borderColor: "#C8A1E0", // Màu viền cho nút "Bỏ qua"
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25, // Bo tròn nút
    marginVertical: 10,
    alignItems: "center",
    width: "90%", // Chiều rộng của nút
    backgroundColor: "transparent", // Nền trong suốt
  },
  skipButtonText: {
    color: "#C8A1E0", // Màu chữ cho nút "Bỏ qua"
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default GioiThieu2;
