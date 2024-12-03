import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GioiThieu3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Hàng biểu tượng và tên ứng dụng */}
      <View style={styles.header}>
        <Ionicons name="book" size={40} color="#C8A1E0" />
        <Text style={styles.appName}>mynote</Text>
      </View>

      {/* Hình ảnh */}
      <Image
        source={require("../assets/gioithieu3.png")} // Đường dẫn tới hình ảnh của bạn
        style={styles.image}
      />

      {/* Tiêu đề và mô tả */}
      <Text style={styles.title}>Lưu giữ kỉ niệm</Text>
      <Text style={styles.description}>
        Lưu giữ từ hình ảnh đến ghi chú văn bản, dễ dàng truy cập và chia sẻ
        những khoảnh khắc đáng nhớ.
      </Text>

      <View style={styles.buttonRow}>
        {/* Nút Đăng nhập */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>

        {/* Nút Đăng ký */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>

      {/* Nút Tiếp tục với tài khoản khách */}
      <TouchableOpacity
        style={styles.guestButton}
        onPress={() => navigation.navigate("Guest")}
      >
        <Text style={styles.guestButtonText}>Tiếp tục với tài khoản khách</Text>
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
    width: 300, // Kích thước hình ảnh
    height: 220,
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
  buttonRow: {
    flexDirection: "row", // Đặt nút nằm ngang
    justifyContent: "space-between", // Phân bổ khoảng cách giữa các nút
    width: "90%", // Chiều rộng của hàng nút
    marginBottom: 20, // Khoảng cách giữa hàng nút và nút khách
  },
  loginButton: {
    backgroundColor: "#C8A1E0", // Màu nền cho nút Đăng nhập
    paddingVertical: 12,
    flex: 1, // Tự động điều chỉnh kích thước theo không gian
    borderRadius: 25,
    marginRight: 10, // Khoảng cách giữa hai nút
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#C8A1E0", // Màu nền cho nút Đăng ký
    paddingVertical: 12,
    flex: 1, // Tự động điều chỉnh kích thước theo không gian
    borderRadius: 25,
    alignItems: "center",
  },
  guestButton: {
    borderWidth: 1,
    borderColor: "#C8A1E0", // Màu viền cho nút
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    width: "90%", // Chiều rộng của nút
    alignItems: "center",
    backgroundColor: "transparent", // Nền trong suốt
  },
  buttonText: {
    color: "#fff", // Màu chữ cho nút Đăng nhập và Đăng ký
    fontWeight: "bold",
  },
  guestButtonText: {
    color: "#C8A1E0", // Màu chữ cho nút Tiếp tục với tài khoản khách
    fontWeight: "bold",
  },
});

export default GioiThieu3;
