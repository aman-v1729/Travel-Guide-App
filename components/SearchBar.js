import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const SearchBar = ({ placeValue }) => {
  [searchText, setSearchText] = useState();
  useEffect(() => {
    if (placeValue === "plane") setSearchText("Try New Delhi");
    else if (placeValue === "bed") setSearchText("Try Hotel Venice");
    else if (placeValue === "glass-cheers") setSearchText("Try Domino's Pizza");
    else if (placeValue === "car-side") setSearchText("Try India Gate");
  }, [placeValue]);
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <FontAwesome5
          name="search"
          size={20}
          color="grey"
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder={searchText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#bbb",
    paddingBottom: 20,
  },
  inputView: {
    flex: 1,
    flexDirection: "row",
    width: "85%",
    borderWidth: 1,
    borderColor: "#aaa",
    marginHorizontal: 20,
    padding: 13,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    //borderWidth: 1,
    flex: 1,
  },
});

export default SearchBar;
