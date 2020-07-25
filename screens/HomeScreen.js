import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import HomeNavIcons from "../components/HomeNavIcons";
import { HotelData, PlaceData } from "../data";
import DataCard from "../components/DataCard";
import CardList from "../components/CardList";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>What would you {"\n"}like to find?</Text>
          </View>
          <HomeNavIcons />
          <CardList data={PlaceData} lines={2} cardTitle="Top Destinations" />
          <CardList data={HotelData} lines={1} cardTitle="Exclusive Hotels" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Platform.OS == "android" ? 35 : 20,
    //marginHorizontal: 18,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    paddingHorizontal: 18,
    marginTop: 15,
    fontSize: 36,
    fontWeight: "bold",
    color: "#222",
  },
});

export default HomeScreen;
