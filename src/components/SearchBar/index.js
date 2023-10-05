import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Lógica de búsqueda automática
    onSearch(searchTerm);
  }, [searchTerm]);

  const handleCancel = () => {
    setSearchTerm(""); // Borra el término de búsqueda al presionar Cancelar
  };

  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="#FFF" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Por ejemplo: El obelisco... "
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {searchTerm.length > 0 && (
        <TouchableOpacity onPress={handleCancel}>
          <Feather name="x" size={24} color="#FFF" style={styles.cancelIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 0.26)", // Fondo gris con opacidad
    borderRadius: 11,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#FFF",
    fontWeight: "300",
    padding: 0, // Elimina el relleno interno del input
  },
  cancelIcon: {
    marginLeft: 8,
  },
  placeholderStyle: {
    fontWeight: "500", // Peso de fuente del marcador de posición
  },
});

export default SearchBar;
