import { useFonts } from "expo-font";
import { FONTS } from "./src/utils/fonts";
import Navigator from "./src/navigation/RootNavigation.js";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./src/navigation/TabNav";

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
