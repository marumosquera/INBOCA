import { useFonts } from "expo-font";
import { FONTS } from "./src/utils/fonts";
import Navigator from "./src/navigation/RootNavigation.js";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./src/navigation/TabNav";
import AudioPlayer from "./src/components/AudioPlayer";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); 
  if (!fontsLoaded) {
    return null;
  }


  const toggleAudioPlayback = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <Provider store={store}>
    <NavigationContainer>
      <TabNav/>
      {isAudioPlaying && <AudioPlayer audioUrl="URL_del_audio.mp3" />}
    </NavigationContainer>
    </Provider>
  );
}
