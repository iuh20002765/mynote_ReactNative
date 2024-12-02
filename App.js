import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";
import DiaryDate from "./screens/DiaryDate";
import DiaryWeek from "./screens/DiaryWeek";
import DiaryMonth from "./screens/DiaryMonth";
import Profile from "./screens/Profile";

// Tạo Stack Navigator cho Diary
const DiaryStack = createStackNavigator();

function DiaryStackNavigator() {
  return (
    <DiaryStack.Navigator screenOptions={{ headerShown: false }}>
      <DiaryStack.Screen name="DiaryDate" component={DiaryDate} />
      <DiaryStack.Screen name="DiaryWeek" component={DiaryWeek} />
      <DiaryStack.Screen name="DiaryMonth" component={DiaryMonth} />
    </DiaryStack.Navigator>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
