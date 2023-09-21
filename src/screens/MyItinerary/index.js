import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import  CategoriesListContainer  from "../../components/CategoriesListContainer";
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
    setItineraryActivities([...itineraryActivities, { ...item, completed: false }]);
  };


  const onConfirmCompletition = (item) => {
    const updatedActivities = itineraryActivities.map((activity) => {
      if (activity.id === item.id) {
        return { ...activity, completed: true };
      } else {
        return activity;
      }
    });
    setItineraryActivities(updatedActivities);
    setModalVisible(false);
    setSelectedItineraryActivity(null);
  };

  const onConfirmDeletion = (id) => {
    const filteredActivities = itineraryActivities.filter((item) => item.id !== id);
    setItineraryActivities(filteredActivities);
    setModalVisible(false);
    setSelectedItineraryActivity(null);
  };

  const viewActionsOnActivity = (item) => {
    setSelectedItineraryActivity(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear mi itinerario</Text>
      <CategoriesListContainer data={categories} />
      <ActivitiesListContainer data={activities} selectActivity={addNewActivityToItinerary}/>
      <Text style={styles.title}>My itinerario</Text>
      <ItineraryContainer data={itineraryActivities} selectActivity={viewActionsOnActivity}/>
      <ModalConfirmation
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedActivity={selectedItineraryActivity}
        onConfirmDeletion={onConfirmDeletion}
        onConfirmCompletition={onConfirmCompletition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 20,
    height: "100%",
    fontFamily: "LexendRegular"
  },
  title: {
    fontSize: 24,
    margin: 10,
    color: "white"
  },
});

export default MyItinerary;

