import { useFonts } from "expo-font";
import { FONTS } from "./src/utils/fonts";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AudioNav from "./src/navigation/AudioNav";

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <Provider store={store}>
      <AudioNav/>
    </Provider>
  );
}
