import React from "react";
import { StatusBar, SafeAreaView, Text, View, Platform } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

// Get height of android device only
console.log(StatusBar.currentHeight);

export default function App() {
	return (
		<>
			<SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
				<View style={{ padding: 16, backgroundColor: "lightblue" }}>
					<Text>Search Area</Text>
				</View>
				<View style={{ flex: 1, padding: 16, backgroundColor: "lightyellow" }}>
					<Text>Restaurants List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
	);
}
