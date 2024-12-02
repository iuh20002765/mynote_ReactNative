import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GioiThieu1 from "./screens/GioiThieu1";
import GioiThieu2 from "./screens/GioiThieu2";
import GioiThieu3 from "./screens/GioiThieu3";
import Home from "./screens/Home";
import DiaryDate from "./screens/DiaryDate";
import DiaryWeek from "./screens/DiaryWeek";
import DiaryMonth from "./screens/DiaryMonth";
import Profile from "./screens/Profile";
import Login from "./screens/Login"; // Nhập màn hình đăng nhập
import Register from "./screens/Register"; // Nhập màn hình đăng ký
import ForgotPassword from "./screens/ForgotPassword"; // Nhập màn hình quên mật khẩu
import Guest from "./screens/Guest";
import { AuthProvider } from "./screens/AuthContext"; // Nhập AuthContext

const DiaryStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator(); // Tạo Auth Stack

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

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthStack.Navigator>
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
          <AuthStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Guest"
            component={Guest}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Main"
            component={MainTabNavigator} // Chuyển sang Tab Navigator sau khi đăng nhập
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
