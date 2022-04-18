import React, { useEffect, Component } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/Colors";
export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(async () => {
      //   const user = await getCurrentUser()

      true ? navigation.replace("Auth") : navigation.replace("HomeStack"); //this.props.navigation.navigate('Login')
    }, 1000);
  }, []);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
