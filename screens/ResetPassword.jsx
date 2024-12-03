import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";

const ResetPassword = () => {
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleResetPassword = () => {
    // Logic để gửi yêu cầu đặt lại mật khẩu
    setModalVisible(true);
  };

  const handleLogin = () => {
    setModalVisible(false); // Ẩn modal
    navigation.navigate("Login"); // Điều hướng đến trang đăng nhập
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu mới"
        value={newPass}
        onChangeText={setNewPass}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu mới"
        value={reNewPass}
        onChangeText={setReNewPass}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Đặt lại mật khẩu</Text>
      </TouchableOpacity>

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
            <Text style={styles.modalTitle}>Đặt lại mật khẩu thành công</Text>
            <Text style={styles.modalText}>
              Bây giờ bạn có thể đăng nhập vào mynote với mật khẩu mới rồi.
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
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    marginBottom: 20,
    height: 50,
    borderColor: "#C8A1E0",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: "100%", // Chiều rộng của trường nhập
  },
  button: {
    backgroundColor: "#C8A1E0",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoText: {
    textAlign: "left",
    marginTop: 10,
    color: "#555",
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

export default ResetPassword;
