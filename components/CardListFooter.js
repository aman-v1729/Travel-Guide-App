import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  DeviceEventEmitter,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const CardListFooter = () => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>View all</Text>
        <AntDesign name="arrowright" size={24} color="#09f" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: Dimensions.get("window").width * 0.5 - 90,
    marginLeft: 25,
    marginRight: 20,
    borderRadius: 20,
    //justifyContent: "center",
  },
  textContainer: {
    marginTop: Dimensions.get("window").width * 0.25,
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    color: "#09f",
    fontWeight: "600",
  },
});
export default CardListFooter;
