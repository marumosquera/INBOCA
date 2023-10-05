import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Importa FontAwesome

export const ActivityItem = ({ activity, selectActivity, navigation }) => {
  const { id, title, description, image } = activity;
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  useEffect(() => {
    // Configura un temporizador para cambiar automáticamente la imagen activa cada 3 segundos
    const timer = setInterval(() => {
      const newIndex =
        activeImageIndex === image.length - 1 ? 0 : activeImageIndex + 1;
      setActiveImageIndex(newIndex);
    }, 3000);

    return () => {
      // Limpia el temporizador cuando el componente se desmonta
      clearInterval(timer);
    };
  }, [activeImageIndex, image]);

  const favoriteBtn = () => {
    toggleFavorite()
    selectActivity(activity)
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
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
              onPress={()=> {favoriteBtn()}}
            >
              {/* Icono de corazón sólido o contorno dependiendo del estado de favoritos */}
              <FontAwesome
                name={isFavorite ? "heart" : "heart-o"}
                size={24}
                color={isFavorite ? "red" : "white"}
              />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
          
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 290,
    overflow: "hidden", // Oculta el contenido fuera de los bordes
    borderRadius: 20,
    margin: 10,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    justifyContent: "space-between", // Espaciado uniforme entre elementos
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  favoriteButton: {
    padding: 5,
  },
});

export default ActivityItem;