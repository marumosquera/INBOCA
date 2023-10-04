import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ActivityItem} from "../ActivityItem";

const windowWidth = Dimensions.get("window").width;

export const ActivitiesListContainer = ({ data, selectActivity, navigation }) => {
  return (

      <>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ActivityItem activity={item} selectActivity={selectActivity} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        
        />
      </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    rowGap: 20,
    height: "100%",
    backgroundColor: "black",
  },
});
