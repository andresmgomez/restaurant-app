import styled from "styled-components/native";

import { View } from "react-native";
import { Badge, Card, Text } from "react-native-paper";

export const CardWrapper = styled(Card)`
	display: flex;
	margin-bottom: ${props => props.theme.cards.padding[3]};
	background-color: ${props => props.theme.colors.background.primary};
`;

export const CardImage = styled(Card.Cover)`
	padding: 0;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
`;

export const CardSpacer = styled(View)`
	flex-direction: row;
	padding: ${props => props.theme.cards.padding[2]};
`;

export const CardRow = styled(View)`
	flex-direction: row;
	align-items: flex-start;
`;

export const CardEnd = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
	padding-right: ${props => props.theme.cards.padding[4]};
`;

export const CardTitle = styled(Text)`
	padding-left: ${props => props.theme.cards.padding[1]};
	color: ${props => props.theme.colors.ui.primary};
	font-family: ${props => props.theme.fonts.main.heading};
	font-size: ${props => props.theme.fonts.sizes.title};
	font-weight: ${props => props.theme.fonts.weights.bold};
`;

export const CardBadge = styled(Badge)`
  min-width: ${(props) => props.theme.cards.width.small};
  height: ${(props) => props.theme.cards.height.small};
  margin-left: 4px;
  padding: ${(props) => props.theme.cards.padding[1]};
  text-align: center;
  background-color: ${(props) => props.theme.cards.background.secondary};
  font-size: ${(props) => props.theme.fonts.sizes.caption};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
`;

export const CardText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.main.body};
  color: ${(props) => props.theme.colors.brand.secondary};
  letter-spacing: 1.5px;
  padding-top: ${(props) => props.theme.cards.padding[0]};
  padding-left: ${(props) => props.theme.cards.padding[4]};
`;

export const CardHeadline = styled(Text)`
  padding-left: ${(props) => props.theme.cards.padding[2]};
  padding-top: 2px;
  color: ${(props) => props.theme.cards.text.highlight};
`;
