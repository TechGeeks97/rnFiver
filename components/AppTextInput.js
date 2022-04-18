import React, { ForwardedRef, forwardRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import AppText from "./AppText";
const AppTextInput = ({
  name,
  fieldTitle,
  titleStyle,
  onBlur,
  textInputContainer,
  textInputStyles,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, textInputContainer]}>
      {fieldTitle && (
        <AppText style={[styles.text, titleStyle]}>{fieldTitle}</AppText>
      )}
      <TextInput
        style={[styles.textInput, textInputStyles]}
        onBlur={onBlur}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 27,
  },
  textInput: {
    borderBottomColor: "black",
    width: "100%",
    height: 50,

    fontSize: 25,
    borderBottomWidth: 1,
  },
});
export default AppTextInput;
