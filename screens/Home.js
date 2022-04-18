import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image } from "react-native";
import Screen from "../components/Screen";
import HomeCard from "../components/HomeCard";
import AppCoverPic from "../components/AppCoverPic";
export default function Home({ navigation }) {
  const DriverJson = [
    {
      title: "Pick Up",
      subTitle: "Pick From Client",
      image: require("../assets/images/car.jpg"),
      navigation: () => navigation.navigate("PickupStack"),
    },
    {
      title: "Pick Up",
      subTitle: "Pick From Client",
      image: require("../assets/images/car.jpg"),
      navigation: () => navigation.navigate("PickupStack"),
    },
    {
      title: "Pick Up",
      subTitle: "Pick From Client",
      image: require("../assets/images/car.jpg"),
      navigation: () => navigation.navigate("PickupStack"),
    },
    {
      title: "Pick Up",
      subTitle: "Pick From Client",
      image: require("../assets/images/car.jpg"),
      navigation: () => navigation.navigate("PickupStack"),
    },
  ];
  const PickerJson = [
    {
      title: "Pick",
      subTitle: "Pick From Client",
      image: require("../assets/images/car.jpg"),
      navigation: () => navigation.navigate("PickupStack"),
    },
    {
      title: "Pick Up",
      subTitle: "Pick From Client",
      image: require("../assets/images/car.jpg"),
      navigation: () => navigation.navigate("PickupStack"),
    },
    {
      title: "Pick Up",
      subTitle: "Pick From Client",
      image: require("../assets/images/car.jpg"),
      navigation: () => navigation.navigate("PickupStack"),
    },
    {
      title: "Pick Up",
      subTitle: "Pick From Client",
      image: require("../assets/images/car.jpg"),
      navigation: () => navigation.navigate("PickupStack"),
    },
  ];
  const [homeOptions, setHomeOptions] = useState([]);
  const dispalyHomeOptions = () => {
    switch ("PICKER") {
      case "PICKER":
        setHomeOptions(PickerJson);

        break;
      case "DRIVER":
        setHomeOptions(DriverJson);

        break;
      default:
        setHomeOptions(DriverJson);
    }
  };

  useEffect(dispalyHomeOptions, []);
  return (
    <Screen>
      <AppCoverPic />
      <FlatList
        style={{ margin: 5 }}
        data={homeOptions}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <HomeCard item={item} />}
      />
    </Screen>
  );
}
