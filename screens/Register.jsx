import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Modal,
  Image,
} from "react-native";
import OrSeparator from "../components/OrSeparator";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Import biểu tượng từ thư viện
import { useAuth } from "./AuthContext";

const Register = ({ navigation }) => {
  const { addUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password) {
      console.error("Please fill out all fields.");
      return;
    }
    if (!agree) {
      console.error("You must agree to the terms.");
      return;
    }

    // Tạo thông tin người dùng mới
    const newUser = {
      email,
      password,
      name,
      avatar: require("../assets/Kein.jpg"), // Avatar mặc định
      joinDate: new Date(),
    };

    // Thêm người dùng mới
    addUser(newUser);
    setModalVisible(true);
  };

  const handleLogin = () => {
    setModalVisible(false); // Ẩn modal
    const newUser = { email, password, name };
    addUser(newUser); // Thêm người dùng mới vào mảng
    navigation.navigate("Login"); // Điều hướng đến trang đăng nhập
  };
  return (
    <View style={styles.container}>
      {/* Các nút đăng ký */}
      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => console.log("Đăng ký với Google")}
      >
        <View style={styles.buttonContent}>
          <Ionicons name="logo-google" size={24} color="#C8A1E0" />
          <Text style={styles.socialButtonText}>Đăng ký với Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => console.log("Đăng ký với Facebook")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="facebook" size={24} color="#C8A1E0" />
          <Text style={styles.socialButtonText}>Đăng ký với Facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => console.log("Đăng ký với Zalo")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.zalo}>Zalo</Text>
          <Text style={styles.socialButtonText}>Đăng ký với Zalo</Text>
        </View>
      </TouchableOpacity>

      {/* Hoặc */}
      <OrSeparator />
      {/* Trường nhập Tên */}
      <TextInput
        style={styles.input}
        placeholder="Tên bạn là gì?"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
      />
      {/* Trường nhập Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Trường nhập Mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Checkbox Đồng ý */}
      <View style={styles.re}>
        <CheckBox value={agree} onValueChange={setAgree} />
        <Text style={styles.rememberMeText}>
          Tôi đồng ý với Điều khoản Dịch Vụ và Chính sách Bảo Mật của mynote
        </Text>
      </View>

      {/* Nút Đăng ký */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Đăng ký</Text>
      </TouchableOpacity>

      {/* Liên kết Đăng ký */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.registerLinkText}>Đăng nhập thôi</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require("../assets/yay.png")} // Thay đổi với đường dẫn đúng tới hình ảnh
              style={styles.modalImage}
            />
            <Text style={styles.modalTitle}>Đăng ký tài khoản thành công</Text>
            <Text style={styles.modalText}>
              Ngày mới tốt lành, Kein! Bây giờ bạn có thể đăng nhập vào mynote
              với tài khoản của bạn rồi.
            </Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  socialButton: {
    borderColor: "#C8A1E0",
    borderWidth: 1, // Màu nền cho nút xã hội
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginVertical: 5,
    width: "100%", // Chiều rộng của nút
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row", // Sắp xếp biểu tượng và chữ theo hàng
    alignItems: "center", // Giữa hàng theo chiều dọc
  },
  socialButtonText: {
    color: "#000", // Màu chữ
    marginLeft: 12, // Khoảng cách giữa biểu tượng và chữ
  },
  zalo: {
    fontFamily: "Helvetica",
    fontSize: 12,
    fontWeight: "light",
    color: "#C8A1E0",
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
  registerButton: {
    backgroundColor: "#C8A1E0", // Màu nền cho nút Đăng nhập
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginVertical: 20,
    width: "100%", // Chiều rộng của nút
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registerText: {
    fontSize: 16,
  },
  registerLinkText: {
    color: "#C8A1E0",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 5,
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Bo viền hình tròn
    borderWidth: 2,
    borderColor: "#C8A1E0", // Màu viền
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center", // Căn giữa tiêu đề
    marginBottom: 10,
  },
  modalText: {
    textAlign: "center",
    marginBottom: 18,
  },
  loginButton: {
    backgroundColor: "#C8A1E0",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20, // Bo tròn nút
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Register;
