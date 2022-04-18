import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../config/Colors";
export default function Screen({ children }) {
  return <SafeAreaView style={styles.conatiner}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
