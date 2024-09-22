import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      indicator: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

const dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    indicator: "#333333",
  },
};

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    indicator: "#333333",
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? dark : light}>
      <Stack screenOptions={{ title: "Count" }} />
    </ThemeProvider>
  );
}
