import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CategoriesListContainer } from "../../components/CategoriesListContainer";
import { categories } from "../../../assets/categories";
import { activitiesData } from "../../../assets/activitiesData";
import { ActivitiesListContainer } from "../../components/ActivitiesListContainer";
import ModalConfirmation from "../../components/ModalConfirmation";
import { ItineraryContainer } from "../../components/ItineraryContainer";

const MyItinerary = () => {
  const [input, setInput] = useState("");
  const [activities, setActivities] = useState(activitiesData);
  const [selectedItineraryActivity, setSelectedItineraryActivity] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [itineraryActivities, setItineraryActivities] = useState([])

  const addNewActivityToItinerary = (item) => {
    setItineraryActivities([...itineraryActivities.filter((activity)=> activity !== item), ...[item]])
  }; 

  const onConfirmDeletion = (id) => {
    const filteredActivities = itineraryActivities.filter((item) => item.id !== id);
    setItineraryActivities(filteredActivities);
    setModalVisible(false);
    setSelectedItineraryActivity(null);
  };

  const confirmDeletionActivity = (item) => {
    setSelectedItineraryActivity(item);
    setModalVisible(true);
  };

  return (
    <View>
      <Text>Crear mi itinerario</Text>
      <CategoriesListContainer data={categories} />
      <ActivitiesListContainer data={activities} selectActivity={addNewActivityToItinerary}/>
      <Text>My itinerario</Text>
      <ItineraryContainer data={itineraryActivities} selectActivity={confirmDeletionActivity}/>
      <ModalConfirmation
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedActivity={selectedItineraryActivity}
        onConfirmDeletion={onConfirmDeletion}
      />
    </View>
  );
};

export default MyItinerary;
