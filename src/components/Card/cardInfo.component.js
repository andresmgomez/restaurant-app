import React from "react";

import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function CardComponent({ restaurant = {} }) {
  const {
    name = "Gyromania Grill",
    photos = [
      "https://lh5.googleusercontent.com/p/AF1QipNRDzu8Hb5kmN1suj0wpe03WqfLs1wIcXg9G3aT=w666-h240-k-no",
    ],
  } = restaurant;

  return (
    <Card elevation={5} style={styles.cardWrapper}>
      <Card.Cover
        key={name}
        source={{ uri: photos[0] }}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>{name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: "#fff",
  },
  cardImage: {
    padding: 0,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
});
