import styled from "styled-components/native";

import { View, Text } from "react-native";
import { Card } from "react-native-paper";

export const CardWrapper = styled(Card)`
  background-color: ${(props) => props.theme.colors.background.primary};
`;

export const CardImage = styled(Card.Cover)`
  padding: 0;
`;

export const CardRow = styled(View)`
  display: flex;
  flex-direction: row;
  padding: ${(props) => props.theme.spaces[0]};
`;

export const CardDetails = styled(View)`
  padding: ${(props) => props.theme.spaces[2]};
`;

export const CardTitle = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.main.heading};
  font-size: ${(props) => props.theme.fonts.sizes.title};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
`;
