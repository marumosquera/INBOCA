import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";

export const ActivityItem = ({ activity, selectActivity }) => {
  const { id, title, description, image } = activity;
  return (
    <View>
      <TouchableOpacity onPress={() => selectActivity(activity)}>
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
            <Text style={styles.title}>{title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    overflow: "hidden", // Oculta el contenido fuera de los bordes
    borderRadius: 20,
    margin: 10,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: 10,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ActivityItem;
