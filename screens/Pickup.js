import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/Colors";
import BarCode from "../components/BarCode";

export default function PickUp() {
  let otherProps = {
    placeHolder: "Enter Order Code ",
  };
  const [showModal, setShowModal] = useState(false);
  const data = [
    { index: 0, id: "GLT12345678911", status: "Not Found" },
    { index: 1, id: "GLT12345678911", status: "Found" },
    { index: 2, id: "GLT12345678911", status: "Not Found" },
    { index: 3, id: "GLT12345678911", status: "Found" },
    { index: 4, id: "GLT12345678911", status: "Not Found" },
  ];
  return (
    <Screen>
      <View style={{ flex: showModal ? 0.7 : 0.2 }}>
        {!showModal && (
          <View style={styles.serachBarView}>
            <View />
            <AppTextInput
              textInputContainer={styles.textInputConatiner}
              textInputStyles={styles.textInputStyle}
              placeHolder="jaja"
            />
            <AppButton
              BtnStyles={styles.scanButton}
              onPress={() => setShowModal(true)}
            >
              Scan
            </AppButton>
          </View>
        )}
        {showModal && (
          <View style={{ height: 280, overflow: "hidden" }}>
            <BarCode
              showModal={showModal}
              setShowModal={(value) => setShowModal(value)}
            />
          </View>
        )}
      </View>
      <View
        style={{
          flex: 0.8,
          paddingHorizontal: 10,
          marginTop: showModal ? "10%" : "70%",
        }}
      >
        <ScrollView>
          {data.reverse().map((input, index) => (
            <View
              style={{
                width: "100%",
                height: 80,
                // margin: 10,
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 35,
                  backgroundColor: "yellow",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AppText>{input.index}</AppText>
              </View>
              <AppText>{input.id}</AppText>
              <AppText style={{ width: "19%" }}>{input.status}</AppText>
              <Icon
                name={input.status == "Found" ? "check" : "cross"}
                size={30}
                color={input.status == "Found" ? "green" : "red"}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomView}>
        <AppButton BtnStyles={styles.AppButton}>Confirm Pick Orders</AppButton>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  serachBarView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  textInputConatiner: {
    width: "55%",
  },
  textInputStyle: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    fontSize: 12,
  },
  scanButton: {
    width: "15%",
    borderRadius: 10,
    height: 40,
  },
  bottomView: {
    flex: 0.2,

    justifyContent: "center",
    alignItems: "center",
  },
  AppButton: {
    width: "70%",
    borderRadius: 8,
    backgroundColor: colors.black,
    height: 50,
  },
});
