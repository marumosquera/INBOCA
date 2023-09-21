import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MyItinerary from "../screens/MyItinerary";
import Intro from "../screens/Intro";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Itinerary from "../screens/Itinerary";
import ItineraryDetail from "../screens/ItineraryDetail";
import ActivityDetail from "../screens/ActivityDetail";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Itinerary" component={Itinerary} />
        <Stack.Screen name="ItineraryDetail" component={ItineraryDetail} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
