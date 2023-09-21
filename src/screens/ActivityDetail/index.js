import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ActivityDetail = ({ route, navigation }) => {
  const { id, title, description, image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>ubicacion</Text>
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Fondo negro
  },
  image: {
    width: "100%",
    height: "60%", // La imagen ocupa el 70% de la altura de la pantalla
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Capa opaca en negro
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white", // Texto del título en blanco
    padding: 16, // Espacio alrededor del título
  },
  description: {
    fontSize: 16,
    color: "gray", // Texto de la descripción en gris
    padding: 16, // Espacio alrededor de la descripción
  },
});

export default ActivityDetail;
