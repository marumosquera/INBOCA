import { useFonts } from "expo-font";
import { FONTS } from "./src/utils/fonts";
import Navigator from "./src/navigation";

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return null;
  }

  return <Navigator />;
}