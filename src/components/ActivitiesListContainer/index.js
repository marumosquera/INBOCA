import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { ActivityItem } from "../ActivityItem";
import styles from "./styles";

export const ActivitiesListContainer = ({ data, selectActivity }) => {

  return (
    <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <ActivityItem activity={item} selectActivity={selectActivity}/>}
          keyExtractor={item => item.id}
          style={styles.containerItem}
          horizontal
        />
    
    </View>
  );
};
