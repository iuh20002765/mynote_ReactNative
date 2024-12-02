import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomHeader from "../components/CustomHeader";

const Guest = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={navigation}
        title="Đăng nhập với tài khoản khách"
      />
      {/* Hình ảnh */}
      <Image
        source={require("../assets/guest.png")} // Đường dẫn tới hình ảnh của bạn
        style={styles.image}
      />

      {/* Tiêu đề và mô tả */}
      <Text style={styles.title}>Chờ đã!</Text>
      <Text style={styles.description}>Tên của bạn là gì á?</Text>
      <Text style={styles.smallerDescription}>
        mynote cần tên của bạn để tiện xưng hô nè. Hãy chọn một nickname thật
        đẹp và đáng yêu nào~
      </Text>

      {/* Trường nhập Tên */}
      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn đi~"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
      />
      {/* Nút Đăng nhập */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 150, // Kích thước hình ảnh
    height: 150,
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
    color: "#000",
    fontWeight: "light",
    textAlign: "center",
    marginBottom: 20,
  },
  smallerDescription: {
    fontSize: 18,
    color: "#000",
    fontWeight: "light",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#C8A1E0",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: "100%", // Chiều rộng của trường nhập
  },
  re: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    gap: 5,
  },
  rememberMeText: {
    color: "#C8A1E0",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#C8A1E0", // Màu nền cho nút Đăng nhập
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginVertical: 20,
    width: "100%", // Chiều rộng của nút
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
  },
  loginLinkText: {
    color: "#C8A1E0",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Guest;
