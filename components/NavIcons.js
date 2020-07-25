import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const NavIcon = (props) => {
  return (
    <View style={styles.icon}>
      {props.selected === props.icon ? (
        <FontAwesome5 name={props.icon} size={24} color="#09f" />
      ) : (
        <FontAwesome5 name={props.icon} size={20} color="#888" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 29,
    //borderWidth: 1,
    height: 58,
    width: 58,
    //marginRight: 30,
    backgroundColor: "#ddd",
  },
});

export default NavIcon;
