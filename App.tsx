import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Home } from "./src/screens/Home";
import theme from "./src/global/theme";
import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </ThemeProvider>
    </>
  );
}
