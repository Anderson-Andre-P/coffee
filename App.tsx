import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        style="light"
        translucent={true}
      />
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    </>
  );
}
