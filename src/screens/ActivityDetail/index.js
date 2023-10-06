import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Importa FontAwesome
import { useDispatch } from "react-redux";
import { setActivitySelected, setisPlaying } from "../../redux/slice/audioSlice";

const ActivityDetail = ({ route, navigation }) => {
  const { id, title, description, image } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAudioControls, setShowAudioControls] = useState(false); 
  const [audioPaused, setAudioPaused] = useState(true); 
  const dispatch = useDispatch();
  const activity = {
    id: id,
    title: title,
    description: description,
    image: image,
  }
  
  const favoriteBtn = () => {
    toggleFavorite();
    // selectActivity(activity);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const startAudioGuide = () => {

    setShowAudioControls(true); 
    console.log("start audio")   
    dispatch(setisPlaying(true));
    dispatch(setActivitySelected(activity));
  };

  const toggleAudioPlayback = () => {
    // Función para alternar entre pausa y reproducción del audio
    setAudioPaused(!audioPaused);
  };

  const renderAudioControls = () => {
    if (showAudioControls) {
      // Si showAudioControls es verdadero, mostrar los controles de audio
      return (
        <View style={styles.audioControls}>
          <View style={styles.audioProgress}>
            <Text style={styles.audioProgressText}>00:00</Text>
            <View style={styles.progressBar}>
              {/* Barra de progreso aquí */}
              {/* Puedes personalizar la barra de progreso según tus necesidades */}
              <View
                style={[
                  styles.progressIndicator,
                  { width: "50%" }, // Ejemplo: un indicador de progreso del 50%
                ]}
              />
            </View>
            <Text style={styles.audioProgressText}>5:23</Text>
          </View>
          <View style={styles.audioPlaybackControls}>
            <TouchableOpacity onPress={toggleAudioPlayback}>
              {/* Icono de reproducción o pausa según el estado de audioPaused */}
              <View style={styles.playPauseButton}>
                <FontAwesome
                  name={audioPaused ? "play" : "pause"}
                  size={32}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Contenedor de la imagen */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.favoriteButton} onPress={favoriteBtn}>
        <FontAwesome
          name={isFavorite ? "heart" : "heart-o"}
          size={24}
          color={isFavorite ? "red" : "white"}
        />
      </TouchableOpacity>

      <Image source={image[0]} style={styles.image} resizeMode="cover" />

      {/* Contenedor de detalles */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={24} color="white" />
          <Text style={styles.locationText}>Plaza de las Naciones Unidas</Text>
        </View>
        <Text style={styles.subLocationText}>Recoleta</Text>
        {/* Descripción */}
        <Text style={styles.description}>{description}</Text>
        {/* Botón Iniciar Audioguía */}
        {!showAudioControls && (
          <TouchableOpacity style={styles.audioGuideButton} onPress={startAudioGuide}>
            <Text style={styles.audioGuideButtonText}>Iniciar Audioguía</Text>
          </TouchableOpacity>
        )}
        {/* Controles de audio */}
        {renderAudioControls()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "60%", // La imagen ocupa el 70% de la altura de la pantalla
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  favoriteButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
  detailsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    color: "white",
    marginLeft: 8,
    fontWeight: "bold",
  },
  subLocationText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "white",
    marginBottom: 16,
  },
  audioGuideButton: {
    backgroundColor: "#FF8A00",
    borderRadius: 25,
    padding: 16,
    alignItems: "center",
    alignSelf: "stretch",
    marginBottom: 20,
  },
  audioGuideButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  audioControls: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
    borderRadius: 50, // Radio de borde para hacerlo circular
  },
  audioProgress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  audioProgressText: {
    color: "white",
  },
  progressBar: {
    flex: 1,
    backgroundColor: "white",
    height: 4,
    marginHorizontal: 8,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  progressIndicator: {
    height: 4,
    backgroundColor: "#FF8A00",
    borderRadius: 2,
  },
  audioPlaybackControls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  playPauseButton: {
    backgroundColor: "#FF8A00",
    borderRadius: 50, // Radio de borde para hacerlo circular
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  hideAudioControlsButton: {
    backgroundColor: "#FF8A00",
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
  },
  hideAudioControlsText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ActivityDetail;
