import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import * as Yup from "yup";

import AppCoverPic from "../components/AppCoverPic";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormButton } from "../components/Form";
import colors from "../config/Colors";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().min(1).label("Email"),
  password: Yup.string().required().min(1).label("Password"),
});
const height = Dimensions.get("window").height;
export default function Login({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.cover}>
            <AppCoverPic />
          </View>
          <View style={styles.formWrapper}>
            <View style={styles.formContainer}>
              <AppForm
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  navigation.replace("HomeStack");
                  console.log("values", values);
                }}
                // validationSchema={validationSchema}
              >
                <AppFormField
                  titleStyle={{ color: colors.grey }}
                  fieldTitle="Username"
                  name="email"
                  placeholder=""
                  autoCorrect={false}
                />
                <AppFormField
                  titleStyle={{ color: colors.grey }}
                  fieldTitle="Password"
                  name="password"
                  placeholder=""
                  autoCorrect={false}
                  secureTextEntry={true}
                />
                <View style={styles.buttonWrapper}>
                  <AppFormButton BtnStyles={styles.buttonStyle}>
                    Sign In
                  </AppFormButton>
                </View>
              </AppForm>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    width: "100%",
    height: height * 0.43,
  },
  formWrapper: {
    flex: 2,
    alignItems: "center",
  },
  formContainer: {
    width: "80%",
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: 15,
  },
  buttonStyle: {
    borderRadius: 8,
  },
});
