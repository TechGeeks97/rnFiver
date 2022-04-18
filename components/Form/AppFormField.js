import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";

const AppFormField = ({
  style,

  name,

  fieldTitle,
  titleStyle,
  ...otherProps
}) => {
  const {
    setFieldTouched,
    handleChange,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        titleStyle={titleStyle}
        onChangeText={(value) => {
          setFieldValue(name, value);
        }}
        name={name}
        fieldTitle={fieldTitle}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />

      {/* <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  horizontalDivider: {
    flex: 1,
    flexDirection: "row",
  },
});

export default AppFormField;
