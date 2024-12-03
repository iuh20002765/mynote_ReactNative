import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// Nhập các màn hình
import GioiThieu1 from "./screens/GioiThieu1";
import GioiThieu2 from "./screens/GioiThieu2";
import GioiThieu3 from "./screens/GioiThieu3";
import Home from "./screens/Home";
import DiaryDate from "./screens/DiaryDate";
import DiaryWeek from "./screens/DiaryWeek";
import DiaryMonth from "./screens/DiaryMonth";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Guest from "./screens/Guest";
import ResetPassword from "./screens/ResetPassword";
import { AuthProvider } from "./screens/AuthContext";

// Khởi tạo các Navigator
const DiaryStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

function DiaryStackNavigator() {
  return (
    <DiaryStack.Navigator screenOptions={{ headerShown: false }}>
      <DiaryStack.Screen name="DiaryDate" component={DiaryDate} />
      <DiaryStack.Screen name="DiaryWeek" component={DiaryWeek} />
      <DiaryStack.Screen name="DiaryMonth" component={DiaryMonth} />
    </DiaryStack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Diary") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#C8A1E0",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Diary"
        component={DiaryStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      {/* Nhóm màn hình giới thiệu */}
      <AuthStack.Screen
        name="GioiThieu1"
        component={GioiThieu1}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="GioiThieu2"
        component={GioiThieu2}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="GioiThieu3"
        component={GioiThieu3}
        options={{ headerShown: false }}
      />

      {/* Nhóm màn hình xác thực */}
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={navigationOptions("Đăng nhập")}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={navigationOptions("Đăng ký")}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={navigationOptions("Quên mật khẩu")}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={navigationOptions("Đặt lại mật khẩu")}
      />
      <AuthStack.Screen
        name="Guest"
        component={Guest}
        options={navigationOptions("Đăng nhập với tài khoản khách")}
      />

      {/* Màn hình chính sau đăng nhập */}
      <AuthStack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

// Định nghĩa các tùy chỉnh cho header
const navigationOptions = (title) => ({
  title,
  headerLeft: ({ navigation }) => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ paddingLeft: 10 }}
    >
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  ),
  headerTitleAlign: "center",
  headerStyle: { backgroundColor: "white" },
});

// Component chính của App
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
