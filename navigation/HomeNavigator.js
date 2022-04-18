import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeScreen" component={Home} />
  </Stack.Navigator>
);

export default HomeNavigator;
