import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import RestaurantScreen from "./src/screens/Restaurants/restaurant.screen";
import { theme } from "./src/theme/index";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
