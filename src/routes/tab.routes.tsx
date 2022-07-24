import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

import { Home } from "../screens/Home";

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "#3D3F4B",
        tabBarInactiveBackgroundColor: "#3D3F4B",
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="About"
        component={Home}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
