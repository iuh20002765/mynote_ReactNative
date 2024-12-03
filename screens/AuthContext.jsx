import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Thay đổi mặc định thành false
  const [dataUser, setDataUser] = useState([
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
  ]); // Khởi tạo với dữ liệu người dùng mặc định

  const logOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null); // Nếu bạn có state currentUser
  };

  const logIn = (email, password) => {
    const user = dataUser.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user); // Giả sử bạn có state currentUser để lưu thông tin người dùng
    } else {
      console.error("Invalid credentials");
    }
  };

  const addUser = (newUser) => {
    setDataUser((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logOut, logIn, dataUser, addUser, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
