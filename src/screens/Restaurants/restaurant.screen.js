import React from "react";

import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { ScrollArea, SearchArea } from "./restaurant.styles";

import styled from "styled-components";
import CardInfoComponent from "../../components/Card/cardInfo.component";

const AppContainer = styled(SafeAreaView)`
	display: flex;
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export default function RestaurantScreen() {
	return (
		<AppContainer>
			<SearchArea>
				<Searchbar />
			</SearchArea>
			<ScrollArea>
				<FlatList
					data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
					renderItem={() => <CardInfoComponent />}
					keyExtractor={item => item.name}
				/>
			</ScrollArea>
		</AppContainer>
	);
}
