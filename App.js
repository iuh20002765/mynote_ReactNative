import React, { useState } from "react";
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
import NoteDetail from "./screens/NoteDetail";
import AddNote from "./screens/AddNote";
import { AuthProvider, useAuth } from "./screens/AuthContext";

// Khởi tạo các Navigator
const DiaryStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const NoteStack = createStackNavigator();

function DiaryStackNavigator() {
  return (
    <DiaryStack.Navigator screenOptions={{ headerShown: false }}>
      <DiaryStack.Screen name="DiaryDate" component={DiaryDate} />
      <DiaryStack.Screen name="DiaryWeek" component={DiaryWeek} />
      <DiaryStack.Screen name="DiaryMonth" component={DiaryMonth} />
    </DiaryStack.Navigator>
  );
}
function NoteStackNavigator({ currentUser }) {
  return (
    <NoteStack.Navigator screenOptions={{ headerShown: false }}>
      <NoteStack.Screen
        name="Home"
        children={() => <Home user={currentUser} />}
        options={{ headerShown: false }}
      />
      <NoteStack.Screen name="NoteDetail" component={NoteDetail} />
      <NoteStack.Screen name="AddNote" component={AddNote} />
    </NoteStack.Navigator>
  );
}
function MainTabNavigator({ currentUser }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "NoteStack") {
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
        name="NoteStack"
        component={NoteStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Diary"
        component={DiaryStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        children={() => <Profile user={currentUser} />}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function AuthStackNavigator({
  dataUser,
  addUser,
  currentUser,
  setCurrentUser,
}) {
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
        component={(props) => (
          <Login
            {...props}
            dataUser={dataUser} // Truyền dataUser ở đây
            setCurrentUser={setCurrentUser}
          />
        )}
        options={navigationOptions("Đăng nhập")}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        initialParams={{ addUser }} // Truyền tham số
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
        initialParams={{ currentUser }} // Truyền tham số
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
        <MainApp />
      </NavigationContainer>
    </AuthProvider>
  );
}

// Component chính cho ứng dụng
function MainApp() {
  const { dataUser, addUser } = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthStackNavigator
      dataUser={dataUser}
      addUser={addUser}
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
    />
  );
}
