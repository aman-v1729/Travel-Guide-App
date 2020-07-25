import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import DataCard from "./DataCard";
import CardListFooter from "./CardListFooter";

const CardList = ({ data, lines, cardTitle, link }) => {
  return (
    <View style={styles.destinations}>
      <View style={styles.cardHeading}>
        <Text style={styles.destinationsText}>{cardTitle}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <DataCard item={item} lines={lines} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"start"}
        snapToInterval={Dimensions.get("window").width * 0.5 + 45}
        decelerationRate={"fast"}
        pagingEnabled
        ListFooterComponent={() => <CardListFooter link={link} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  destinations: {
    marginTop: 20,
    marginBottom: 30,
  },
  destinationsText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    paddingHorizontal: 30,
  },
  cardHeading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seeAll: {
    color: "#09f",
    fontSize: 14,
    paddingRight: 20,
  },
});
export default CardList;
