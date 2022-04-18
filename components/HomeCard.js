import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import colors from "../config/Colors";
export default function HomeCard({ item }) {
  return (
    <TouchableOpacity
      onPress={() => item.navigation()}
      style={styles.container}
    >
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View>
        <AppText>Pick Up</AppText>
        <AppText>Pick From Client</AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "46%",
    backgroundColor: colors.white,
    height: 110,
    margin: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
  },
  image: {
    height: 70,
    width: 70,
  },
});
