import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { ActivitiesListContainerHome } from '../../components/ActivitiesListContainerHome';
import { categories } from "../../../assets/categories";
import { activitiesData } from "../../../assets/activitiesData";
const Home = ({navigation}) => {
  const [activites, setActivites] = useState([]);
  const [input, setInput] = useState("");
  const [activities, setActivities] = useState(activitiesData);
  const [selectedFavoriteActivity, setSelectedFavoriteActivity] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [favoriteActivities, setFavoriteActivities] = useState([])

  const addNewActivityToFavorite = (item) => {
    setFavoriteActivities([...favoriteActivities, { ...item, completed: false }]);
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
    const filteredActivities = favoriteActivities.filter((item) => item.id !== id);
    setFavoriteActivities(filteredActivities);
    setModalVisible(false);
    setSelectedFavoriteActivity(null);
  };

  const viewActionsOnActivity = (item) => {
    setSelectedFavoriteActivity(item);
    setModalVisible(true);
  };
  return (
    <View>
      <Text>Bienvenido, Juan!</Text>
      <SearchBar setActivites={setActivites}/>
     <ActivitiesListContainerHome  data={activities} selectActivity={addNewActivityToFavorite} navigation={navigation}/>
    </View>
  )
}

export default Home