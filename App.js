import * as React from "react";
import { useState } from "react";
import { ThemeProvider } from "@callstack/react-theme-provider";

import { Text, View, StyleSheet } from "react-native";
import Header from "./Header";
import ThemeChanger from "./ThemeChanger";

import { themes } from "./themes";

export default function App() {
  const [theme, setTheme] = useState(themes.normal);

  const handleThemeChange = (themeName: string) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Header />
        <ThemeChanger
          onChangeTheme={handleThemeChange}
          themes={Object.keys(themes)}
        />
      </View>
    </ThemeProvider>
  );
}
