import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "../navigation/AuthNavigator";
import Splash from "../screens/Splash";
import HomeNavigator from "../navigation/BottomTabNavigator";
import PickupNavigator from "../navigation/PIckerNavigation";
export default function routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="HomeStack" component={HomeNavigator} />
        <Stack.Screen name="PickupStack" component={PickupNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
