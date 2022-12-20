import React from "react";

import {
  CardImage,
  CardWrapper,
  CardTitle,
  CardDetails,
} from "./cardInfo.styles";

export default function CardComponent({ restaurant = {} }) {
  const {
    name = "Gyromania Grill",
    photos = [
      "https://lh5.googleusercontent.com/p/AF1QipNRDzu8Hb5kmN1suj0wpe03WqfLs1wIcXg9G3aT=w666-h240-k-no",
    ],
  } = restaurant;

  return (
    <CardWrapper elevation={5}>
      <CardImage key={name} source={{ uri: photos[0] }} />
      <CardDetails>
        <CardTitle>{name}</CardTitle>
      </CardDetails>
    </CardWrapper>
  );
}
