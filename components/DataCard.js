import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
//import { FontAwesome5 } from "@expo/vector-icons";
const DataCard = ({ item, lines }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.card}>
        <ImageBackground
          source={item.img}
          style={[styles.img, { height: Dimensions.get("window").width * 0.5 }]}
        >
          <Text style={styles.place}>{item.place}</Text>
          <View style={styles.outerPlaceContainer}>
            {/* <FontAwesome5 name="telegram-plane" size={18} color="white" /> */}
            <Text style={styles.outerPlace}> {item.outerPlace}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc} numberOfLines={lines}>
          {item.desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: Dimensions.get("window").width * 0.5,
    marginLeft: 25,
    marginRight: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
  img: {
    flex: 1,
    width: Dimensions.get("window").width * 0.5,
    //height: Dimensions.get("window").width * 0.5,
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 10,
    paddingLeft: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  place: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  outerPlaceContainer: {
    flexDirection: "row",
  },
  outerPlace: {
    textAlign: "left",
    textAlignVertical: "bottom",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  desc: {
    paddingHorizontal: 10,
    color: "#333",
  },
});
export default DataCard;
