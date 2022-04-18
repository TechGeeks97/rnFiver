import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/Colors";
export default function AppButton({
  children,
  BtnStyles,
  TextStyles,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.main, BtnStyles]}>
      <AppText style={styles.text}>{children}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    height: 40,
    width: "100%",
    backgroundColor: colors.black,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: colors.white,
  },
});
