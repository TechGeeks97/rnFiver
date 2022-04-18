import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./CustomBottomNavigator";
const Tab = createBottomTabNavigator();
import HomeStack from "../navigation/HomeNavigator";
import Icon from "react-native-vector-icons/AntDesign";
const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <CustomTabBar />}
  >
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="dashboard" type="material" color="#517fa4" />
        ),
      }}
    />
    <Tab.Screen
      name="Add Items"
      component={HomeStack}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="home" type="ionicon" color="#517fa4" />
        ),
      }}
    />
    <Tab.Screen
      name="Loan/Borrow Items"
      component={HomeStack}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="hand-holding" type="font-awesome-5" color="#517fa4" />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={HomeStack}
      options={{
        tabBarIcon: ({ size, color }) => (
          // <Ionicons name={"search"} size={size} color={color} />

          <Icon name="magnify" type="material-community" color="#517fa4" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
