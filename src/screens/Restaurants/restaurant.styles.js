import { View } from "react-native";

import styled from "styled-components/native";

export const SearchArea = styled(View)`
  padding: ${(props) => props.theme.spaces[1]};
  background-color: ${(props) => props.theme.colors.brand.secondary};
`;

export const ScrollArea = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.spaces[1]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;
