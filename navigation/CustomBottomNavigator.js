import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
const CustomTabBar = () => {
  return (
    <View
      style={{
        height: 60,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text>Home</Text>
        <Icon name="dashboard" type="material" color="#517fa4" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>Home</Text>
        <Icon name="dashboard" type="material" color="#517fa4" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>Home</Text>
        <Icon name="dashboard" type="material" color="#517fa4" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>Home</Text>
        <Icon name="dashboard" type="material" color="#517fa4" />
      </View>
    </View>
  );
};
export default CustomTabBar;
