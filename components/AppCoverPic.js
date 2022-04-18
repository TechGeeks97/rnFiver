import React from "react";
import { View, Image, StyleSheet } from "react-native";
export default function AppCoverPic() {
  return (
    <View style={styles.conatiner}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 2,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
