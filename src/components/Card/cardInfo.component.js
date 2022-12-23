import React from "react";

import { SvgXml } from "react-native-svg";
import {
  CardImage,
  CardWrapper,
  CardTitle,
  CardRow,
  CardSpacer,
  CardEnd,
  CardBadge,
  CardText,
  CardHeadline,
} from "./cardInfo.styles";

import starIcon from "../../../assets/svg/starIcon.js";
import openSignIcon from "../../../assets/svg/openIcon.js";

export default function CardComponent({ restaurant = {} }) {
  const {
    name = "Gyromania Grill",
    photos = [
      "https://lh5.googleusercontent.com/p/AF1QipNRDzu8Hb5kmN1suj0wpe03WqfLs1wIcXg9G3aT=w666-h240-k-no",
    ],
    rating = 4.4,
    tags = ["restaurant", "greek", "mediterranean"],
    openHours = "8:00 AM - 9:00 PM",
    inService = true,
  } = restaurant;
  // Generate a list of stars from an array
  const starsList = Array.from(new Array(Math.floor(rating)));

  return (
    <CardWrapper elevation={5}>
      <CardImage key={name} source={{ uri: photos[0] }} />
      <CardSpacer>
        <CardTitle variant="titleLarge">{name}</CardTitle>
      </CardSpacer>
      <CardRow>
        <CardSpacer>
          {starsList.map(() => {
            return <SvgXml width={25} height={25} xml={starIcon} />;
          })}
        </CardSpacer>
        <CardEnd>
          {inService && <SvgXml width={28} height={28} xml={openSignIcon} />}
        </CardEnd>
      </CardRow>
      <CardSpacer>
        <CardBadge>{tags[0]}</CardBadge>
        <CardBadge>{tags[1]}</CardBadge>
        <CardBadge>{tags[2]}</CardBadge>
      </CardSpacer>
      <CardSpacer>
        <CardHeadline>Open hours:</CardHeadline>
        <CardText variant="labelSmall">{openHours}</CardText>
      </CardSpacer>
    </CardWrapper>
  );
}
