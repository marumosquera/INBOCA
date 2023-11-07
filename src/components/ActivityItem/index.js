import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const ActivityItem = ({ activity, selectActivity, navigation }) => {
  const { id, title, description, image } = activity;
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex =
        activeImageIndex === image.length - 1 ? 0 : activeImageIndex + 1;
      setActiveImageIndex(newIndex);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [activeImageIndex, image]);

  const favoriteBtn = () => {
    toggleFavorite();
    selectActivity(activity);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ActivityDetail", { title, description, image })
      }
    >
      <View style={styles.container}>
        <ImageBackground
          source={image[activeImageIndex]}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => {
              favoriteBtn();
            }}
          >
            <View style={styles.favoriteIcon}>
              <FontAwesome
                name={isFavorite ? "heart" : "heart-o"}
                size={20}
                color="white"
              />
            </View>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={16} color="white" />
            <Text style={styles.locationText}>
              Plaza de las Naciones Unidas
            </Text>
          </View>
          <Text style={styles.subLocationText}>Recoleta</Text>
          </View>
     
       
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 290,
    overflow: "hidden",
    borderRadius: 20,
    margin: 10,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  infoContainer: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    color: "white",
    fontSize: 16, // Tamaño de fuente más grande
    fontWeight: "bold",
 
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    zIndex: 1,
  },
  favoriteIcon: {
    backgroundColor: "black",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 12, // Tamaño de fuente más pequeño
    color: "white",
    fontWeight: "bold",
  },
  subLocationText: {
    fontSize: 12,
    color: "white",
  },
});

export default ActivityItem;
