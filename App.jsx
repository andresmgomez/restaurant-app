import React from "react";
import { StatusBar, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.appContainer}>
				<View style={styles.searchArea}>
					<Text>Search Bar</Text>
				</View>
				<View style={styles.screenArea}>
					<Text>Restaurants List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
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
	screenArea: {
		flex: 1,
		padding: 16,
		backgroundColor: "lightyellow",
	},
});
