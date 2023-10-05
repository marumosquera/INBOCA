import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar  from "../../components/SearchBar";
import { ActivitiesListContainer } from "../../components/ActivitiesListContainer";
import { categories } from "../../../assets/categories";
import { activitiesData } from "../../../assets/activitiesData";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesListContainer from "../../components/CategoriesListContainer";

const Home = ({ navigation }) => {
  const [activites, setActivites] = useState([]);
  const [input, setInput] = useState("");
  const [activities, setActivities] = useState(activitiesData);
  const [selectedFavoriteActivity, setSelectedFavoriteActivity] =
    useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [favoriteActivities, setFavoriteActivities] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({})

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


  const handleSearch = (searchTerm) => {
    const lowercaseInput = searchTerm.toLowerCase();
    if (lowercaseInput === "") {
      setFilteredInfo(activities);
    } else {
      const filteredInfo = activities.filter((info) =>
        info.title.toLocaleLowerCase().includes(lowercaseInput)
      );
      setFilteredInfo(filteredInfo);
    }
  };


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido, <Text style={styles.name}>Juan </Text>!</Text>
        <SearchBar onSearch={handleSearch}/>
        <CategoriesListContainer data={categories}/>
        <ActivitiesListContainer
          data={filteredInfo}
          selectActivity={addNewActivityToFavorite}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1C",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%",
    fontFamily: "LexendRegular",
  },
  title:{
    color:"#FFF",
    fontSize: 28,
    marginLeft: 20,
    marginTop: 15,
    fontStyle: "normal",
    fontWeight: "300",
  },
  name:{
    color:"#FFF",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "500",
  }
});

export default Home;
