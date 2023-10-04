import React from "react";
import { FlatList, ScrollView, View, StyleSheet } from "react-native";
import  CategoryItem  from "../CategoryItem";


const CategoriesListContainer = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => <CategoryItem category={item} />}
          // keyExtractor={item => item.id}
          horizontal
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Cambio de flexDirection a "row" para alinear horizontalmente
    paddingHorizontal: 10, // Espacio horizontal entre los elementos
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CategoriesListContainer;
