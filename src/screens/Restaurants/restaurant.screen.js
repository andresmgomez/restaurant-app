import React from "react";

import { StatusBar, SafeAreaView, View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import CardInfoComponent from "../../components/Card/cardInfo.component";

export default function RestaurantScreen() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.searchArea}>
        <Searchbar />
      </View>
      <View style={styles.scrollArea}>
        <CardInfoComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchArea: {
    padding: 16,
    backgroundColor: "lightblue",
  },
  scrollArea: {
    flex: 1,
    padding: 16,
    backgroundColor: "lightyellow",
  },
});
