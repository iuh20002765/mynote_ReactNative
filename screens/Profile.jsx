import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ dataUser }) {
  const { logOut } = useAuth();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // state cho modal

  // Hàm xử lý đăng xuất
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("rememberedUser");
      setCurrentUser(null);
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  const joinDateString = dataUser?.joinDate.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profilePictureContainer}>
          {dataUser?.avatar ? (
            <Image source={dataUser?.avatar} style={styles.profilePicture} />
          ) : (
            <Ionicons name="person-circle-outline" size={80} color="#000" />
          )}
        </View>
        <Text style={styles.username}>{dataUser?.name}</Text>
        <Text style={styles.email}>{dataUser?.email}</Text>
      </View>

      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="person-outline" size={24} color="#000" />
          <Text style={styles.settingsText}>Cá nhân hoá</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="mail-outline" size={24} color="#000" />
          <Text style={styles.settingsText}>Xác thực email</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="lock-closed-outline" size={24} color="#000" />
          <Text style={styles.settingsText}>Bảo mật</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.joinDate}>
        Đã tham gia mynote vào ngày {joinDateString}
      </Text>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>

      {/* Modal xác nhận đăng xuất */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Xác nhận đăng xuất</Text>
            <Text style={styles.modalMessage}>
              Bạn có chắc chắn muốn đăng xuất không?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  handleLogout(); // Gọi hàm đăng xuất
                  setModalVisible(false); // Đóng modal
                }}
              >
                <Text style={styles.modalButtonText}>Đồng ý</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Huỷ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    alignItems: "center",
    marginVertical: 32,
  },
  profilePictureContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#000",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    width: "100%",
    height: "100%",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  settingsContainer: {
    width: "80%",
    marginTop: 32,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingsText: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 16,
  },
  joinDate: {
    marginVertical: 16,
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  logoutButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền mờ
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
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
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalMessage: {
    textAlign: "center",
    marginVertical: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#C8A1E0", // Màu nền cho nút
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
