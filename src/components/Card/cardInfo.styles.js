import styled from "styled-components/native";

import { View, Text } from "react-native";
import { Card } from "react-native-paper";

export const CardWrapper = styled(Card)`
  background-color: #fff;
`;

export const CardImage = styled(Card.Cover)`
  padding: 0;
`;

export const CardDetails = styled(View)`
  padding: 14px;
`;

export const CardTitle = styled(Text)`
  padding: 16px;
  color: #264653;
  font-family: Lato_400Regular;
  font-size: 18px;
  font-weight: 700;
`;
