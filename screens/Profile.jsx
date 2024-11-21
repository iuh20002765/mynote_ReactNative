import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profilePicture}>
          <Ionicons name="person-circle-outline" size={64} color="#000" />
        </View>
        <Text style={styles.username}>Kein</Text>
        <Text style={styles.email}>vukein3110@gmail.com</Text>
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
        Đã tham gia mynote vào ngày 18 tháng 9, 2024
      </Text>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
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
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
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
    color: "#888", // Màu sắc nhẹ nhàng hơn
    textAlign: "center", // Căn giữa
    paddingHorizontal: 16, // Thêm padding ngang
  },
  logoutButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
