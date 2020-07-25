import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapScreen;
