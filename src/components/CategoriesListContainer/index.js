import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { CategoryItem } from "../CategoryItem";
import styles from "./styles";

export const CategoriesListContainer = ({ data }) => {
  return (
    <View >
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
