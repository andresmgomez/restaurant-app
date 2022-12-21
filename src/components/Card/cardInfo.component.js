import React from "react";

import { SvgXml } from "react-native-svg";
import {
  CardImage,
  CardWrapper,
  CardTitle,
  CardDetails,
  CardRow,
} from "./cardInfo.styles";
import star from "../../../assets/svg/star.js";

export default function CardComponent({ restaurant = {} }) {
  const {
    name = "Gyromania Grill",
    photos = [
      "https://lh5.googleusercontent.com/p/AF1QipNRDzu8Hb5kmN1suj0wpe03WqfLs1wIcXg9G3aT=w666-h240-k-no",
    ],
    rating = 4.4,
  } = restaurant;
  // Generate a list of stars from an array
  const starsList = Array.from(new Array(Math.floor(rating)));
  console.log(starsList);

  return (
    <CardWrapper elevation={5}>
      <CardImage key={name} source={{ uri: photos[0] }} />
      <CardDetails>
        <CardTitle>{name}</CardTitle>
        <CardRow>
          {starsList.map(() => {
            return <SvgXml width={25} height={25} xml={star} />;
          })}
        </CardRow>
      </CardDetails>
    </CardWrapper>
  );
}
