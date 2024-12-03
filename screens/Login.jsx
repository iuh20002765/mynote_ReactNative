import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  CheckBox,
  ActivityIndicator,
} from "react-native";
import OrSeparator from "../components/OrSeparator";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Import biểu tượng từ thư viện
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const defaultDataUser = [
    {
      email: "user@example.com",
      password: "password123",
      name: "Kein",
      avatar: require("../assets/Kein.jpg"),
      joinDate: new Date("2024-09-18"),
    },
    {
      email: "admin@example.com",
      password: "admin123",
      name: "Admin",
      avatar: require("../assets/Kein.jpg"),
      joinDate: new Date("2024-09-18"),
    },
  ];
  const { dataUser = defaultDataUser, setCurrentUser } = route.params || {};

  console.log("Received dataUser in Login:", dataUser); // Kiểm tra giá trị

  const handleLogin = async () => {
    if (!Array.isArray(dataUser)) {
      console.error("dataUser is not an array or undefined:", dataUser);
      setErrorMessage("Lỗi dữ liệu người dùng!");
      setModalVisible(true);
      return;
    }
    console.log("Login started");
    console.log("Email:", email, "Password:", password);

    setErrorMessage("");
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Vui lòng nhập đủ thông tin.");
      setModalVisible(true);
      return;
    }

    setLoading(true);

    try {
      console.log("Searching for user...");
      const user = dataUser.find(
        (user) =>
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === password
      );
      console.log("User found:", user);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (user) {
        console.log("Saving user...");
        if (typeof setCurrentUser === "function") {
          setCurrentUser(user);
        } else {
          console.warn("setCurrentUser is not defined, skipping user set.");
        }
        // Điều hướng đến màn hình chính

        if (rememberMe) {
          await AsyncStorage.setItem(
            "rememberedUser",
            JSON.stringify({ email: user.email, password: user.password })
          );
        } else {
          await AsyncStorage.removeItem("rememberedUser");
        }
        console.log("Navigating to Main...");
        navigation.navigate("Main", { currentUser: user });
      } else {
        setErrorMessage("Email hoặc mật khẩu không đúng.");
        setModalVisible(true);
      }
    } catch (error) {
      console.log("Login error:", error);
      setErrorMessage("Đã xảy ra lỗi, vui lòng thử lại.");
      setModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => navigation.navigate("ForgotPassword");

  useEffect(() => {
    const fetchRememberedUser = async () => {
      try {
        const rememberedUser = await AsyncStorage.getItem("rememberedUser");
        if (rememberedUser) {
          const { email, password } = JSON.parse(rememberedUser);
          setEmail(email);
          setPassword(password);
          setRememberMe(true); // Đánh dấu checkbox
        }
      } catch (error) {
        console.log("Error fetching remembered user:", error);
      }
    };

    fetchRememberedUser();
  }, []);

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
        accessibilityLabel="Enter your email address"
      />

      {/* Trường nhập Mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        autoCompleteType="password"
        secureTextEntry
      />

      {/* Checkbox Nhớ tôi */}
      <View style={styles.rememberMeContainer}>
        <View style={styles.re}>
          <CheckBox value={rememberMe} onValueChange={setRememberMe} />
          <Text style={styles.rememberMeText}>Nhớ tôi</Text>
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>

      {/* Nút Đăng nhập */}
      {loading ? (
        <ActivityIndicator size="large" color="#C8A1E0" />
      ) : (
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading} // Vô hiệu hóa nút khi đang xử lý
        >
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
      )}

      {/* Liên kết Đăng ký */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Không có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerLinkText}>Đăng ký thôi</Text>
        </TouchableOpacity>
      </View>
      {/* Modal thông báo thất bại */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Image
              source={require("../assets/forbidden.png")}
              style={styles.modalImage}
            />

            <Text style={styles.modalText}>Đăng nhập thất bại</Text>

            <Text style={styles.modalDescription}>
              {errorMessage ||
                "Email hoặc mật khẩu không đúng. Hãy thử lại nhé."}
            </Text>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Đóng</Text>
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
  // Styles cho Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Nền mờ tối
  },
  modalView: {
    width: "80%", // Chiều rộng của modal
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#C21839", // Màu sắc nổi bật cho tiêu đề thông báo
  },
  modalDescription: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    color: "#555", // Màu chữ ít nổi bật hơn
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#C8A1E0",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
