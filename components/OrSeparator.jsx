import React from "react";
import { StyleSheet, View, Text } from "react-native";

const OrSeparator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20, // Khoảng cách trên và dưới
  },
  line: {
    flex: 1, // Đường gạch sẽ chiếm không gian còn lại
    height: 1, // Độ dày của đường gạch
    backgroundColor: "#C8A1E0", // Màu sắc của đường gạch
    marginHorizontal: 10, // Khoảng cách giữa đường gạch và chữ "or"
  },
  text: {
    color: "#C8A1E0", // Màu chữ
    fontWeight: "bold",
  },
});

export default OrSeparator;
