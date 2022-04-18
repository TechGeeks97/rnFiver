import React from "react";
import Pickup from "../screens/Pickup";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const PickupNavigator = () => (
  <Stack.Navigator
    initialRouteName="Picker"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
    // screenOptions={{gestureEnabled: false}}
  >
    <Stack.Screen name="Picker" component={Pickup} />
  </Stack.Navigator>
);

export default PickupNavigator;
