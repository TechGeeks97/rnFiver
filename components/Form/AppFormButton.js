import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../AppText";
import colors from "../../config/Colors";
import { useFormikContext } from "formik";

export default function AppButton({ children, BtnStyles, TextStyles }) {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity onPress={handleSubmit} style={[styles.main, BtnStyles]}>
      <AppText style={styles.text}>{children}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    height: 50,
    width: "100%",
    backgroundColor: colors.black,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: colors.white,
    fontSize: 20,
  },
});
