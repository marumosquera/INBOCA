import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import { useSelector } from "react-redux";

const AudioPlayer = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);


  const activitySelected = useSelector((state) => state.audioSlice.activitySelected);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  console.log("redux", activitySelected)
  return (
    <View style={styles.container}>
      <View style={styles.audioInfo}>
        <Text style={styles.audioTitle}>{activitySelected?.title}</Text>
        <Text style={styles.audioTime}>
          {formatTime(currentPosition)} / {formatTime(audioDuration)}
        </Text>
      </View>
      <View style={styles.audioControls}>
        <TouchableOpacity onPress={togglePlayback}>
          <FontAwesome
            name={isPlaying ? "pause" : "play"}
            size={32}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        zIndex: 2, 
  
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333", 
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  audioInfo: {
    flex: 1,
  },
  audioTitle: {
    fontSize: 16,
    color: "white",
  },
  audioTime: {
    fontSize: 12,
    color: "lightgray",
  },
  audioControls: {
    flexDirection: "row",
    alignItems: "center",
  },
});

// Función para formatear el tiempo en segundos a "mm:ss"
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default AudioPlayer;
