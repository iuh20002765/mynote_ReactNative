import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import OrSeparator from "../components/OrSeparator";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Import biểu tượng từ thư viện

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} title="Đăng ký" />
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
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => console.log("Đăng ký")}
      >
        <Text style={styles.registerButtonText}>Đăng ký</Text>
      </TouchableOpacity>

      {/* Liên kết Đăng ký */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.registerLinkText}>Đăng nhập thôi</Text>
        </TouchableOpacity>
      </View>
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
});

export default Register;
