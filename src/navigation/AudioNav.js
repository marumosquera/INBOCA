import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import TabNav from "./TabNav";
import { useSelector } from "react-redux";

const AudioNav = () => {
  const isPlaying = useSelector((state) => state.audioSlice.isPlaying);
console.log(isPlaying)
  return (
    <NavigationContainer>
      <TabNav />
      {isPlaying && <AudioPlayer audioUrl="URL_del_audio.mp3" />}
    </NavigationContainer>
  );
};

export default AudioNav;
