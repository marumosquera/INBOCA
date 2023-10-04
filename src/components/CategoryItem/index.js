import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItem = ({ category }) => {
  const [isSelected, setIsSelected] = useState(false);
  const containerStyle = isSelected ? styles.selectedCategory : styles.category;
  return (
    <TouchableOpacity style={containerStyle} onPress={() => setIsSelected(true)}>
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#333', // Fondo gris oscuro
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50, // Bordes redondeados para hacerlo ovalado
    marginHorizontal: 5,
  },
  selectedCategory: {
    backgroundColor: '#FF8A00', // Fondo naranja cuando está seleccionado
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50, // Bordes redondeados para hacerlo ovalado
    marginHorizontal: 5,
  },
  categoryText: {
    color: 'white', // Letras blancas
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default CategoryItem;
