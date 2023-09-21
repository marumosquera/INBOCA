import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ActivityItemHome } from "../ActivityItemHome";

const windowWidth = Dimensions.get("window").width;

export const ActivitiesListContainerHome = ({ data, selectActivity, navigation }) => {
  return (
    // <ScrollView>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ActivityItemHome activity={item} selectActivity={selectActivity} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          style={styles.containerItem}
        />
      </View>
    // </ScrollView>
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
  containerItem: {
    flexDirection: "row",
    gap: 10,
    width: windowWidth,
  },
});
