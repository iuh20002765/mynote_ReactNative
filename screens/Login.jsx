import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import OrSeparator from "../components/OrSeparator";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Import biểu tượng từ thư viện

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      {/* Các nút đăng nhập */}
      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => console.log("Đăng nhập với Google")}
      >
        <View style={styles.buttonContent}>
          <Ionicons name="logo-google" size={24} color="#C8A1E0" />
          <Text style={styles.socialButtonText}>Đăng nhập với Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => console.log("Đăng nhập với Facebook")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="facebook" size={24} color="#C8A1E0" />
          <Text style={styles.socialButtonText}>Đăng nhập với Facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => console.log("Đăng nhập với Zalo")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.zalo}>Zalo</Text>
          <Text style={styles.socialButtonText}>Đăng nhập với Zalo</Text>
        </View>
      </TouchableOpacity>

      {/* Hoặc */}
      <OrSeparator />
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

      {/* Checkbox Nhớ tôi */}
      <View style={styles.rememberMeContainer}>
        <View style={styles.re}>
          <CheckBox value={rememberMe} onValueChange={setRememberMe} />
          <Text style={styles.rememberMeText}>Nhớ tôi</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>

      {/* Nút Đăng nhập */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* Liên kết Đăng ký */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Không có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerLinkText}>Đăng ký thôi</Text>
        </TouchableOpacity>
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
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%", // Chiều rộng của container
    marginVertical: 10,
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
  forgotPasswordText: {
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

export default Login;
