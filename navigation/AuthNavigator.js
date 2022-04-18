import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
    // screenOptions={{gestureEnabled: false}}
  >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default AuthNavigator;
