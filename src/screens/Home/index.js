import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "../../components/SearchBar";
import { ActivitiesListContainerHome } from "../../components/ActivitiesListContainerHome";
import { categories } from "../../../assets/categories";
import { activitiesData } from "../../../assets/activitiesData";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const [activites, setActivites] = useState([]);
  const [input, setInput] = useState("");
  const [activities, setActivities] = useState(activitiesData);
  const [selectedFavoriteActivity, setSelectedFavoriteActivity] =
    useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [favoriteActivities, setFavoriteActivities] = useState([]);

  const addNewActivityToFavorite = (item) => {
    setFavoriteActivities([
      ...favoriteActivities,
      { ...item, completed: false },
    ]);
  };

  const onConfirmCompletition = (item) => {
    const updatedActivities = favoriteActivities.map((activity) => {
      if (activity.id === item.id) {
        return { ...activity, completed: true };
      } else {
        return activity;
      }
    });
    setFavoriteActivities(updatedActivities);
    setModalVisible(false);
    setSelectedFavoriteActivity(null);
  };

  const onConfirmDeletion = (id) => {
    const filteredActivities = favoriteActivities.filter(
      (item) => item.id !== id
    );
    setFavoriteActivities(filteredActivities);
    setModalVisible(false);
    setSelectedFavoriteActivity(null);
  };

  const viewActionsOnActivity = (item) => {
    setSelectedFavoriteActivity(item);
    setModalVisible(true);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido, Juan!</Text>
        <SearchBar setActivites={setActivites} />
        <ActivitiesListContainerHome
          data={activities}
          selectActivity={addNewActivityToFavorite}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 20,
    height: "100%",
    fontFamily: "LexendRegular",
  },
  title:{
    color: "white",
  }
});

export default Home;