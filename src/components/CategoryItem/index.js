import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryText}>{category.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'orange', // Fondo naranja
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10, // Bordes redondeados
    marginHorizontal: 5,
  },
  categoryText: {
    color: 'white', // Letras blancas
    textTransform: 'uppercase', // Letras en mayúsculas
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CategoryItem;
