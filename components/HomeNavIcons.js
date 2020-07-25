import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

const HomeNavIcons = () => {
  const [state, setState] = useState("plane");
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.navIcon}>
        <TouchableOpacity
          onPress={() => {
            setState("plane");
          }}
        >
          <NavIcons selected={state} icon="plane" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setState("bed");
          }}
        >
          <NavIcons selected={state} icon="bed" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setState("glass-cheers");
          }}
        >
          <NavIcons selected={state} icon="glass-cheers" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setState("car-side");
          }}
        >
          <NavIcons selected={state} icon="car-side" />
        </TouchableOpacity>
      </View>
      <SearchBar placeValue={state} />
    </View>
  );
};

const styles = StyleSheet.create({
  navIcon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    marginTop: 20,
    paddingBottom: 20,
    //borderBottomWidth: 2,
    //borderBottomColor: "#bbb",
  },
});

export default HomeNavIcons;
