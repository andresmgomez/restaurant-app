import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import RestaurantScreen from "./src/screens/Restaurants/restaurant.screen";

import { useFonts } from "expo-font";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";

import { theme } from "./src/theme/index";

export default function App() {
  // Load Google Fonts in the app
  const [loadLatoFont] = useFonts({ Lato_400Regular });
  const [loadOswaldFont] = useFonts({ Oswald_400Regular });

  // Avoid error if screens can't load fonts
  if (!loadLatoFont || !loadOswaldFont) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
