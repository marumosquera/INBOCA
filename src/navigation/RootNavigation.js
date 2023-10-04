import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Intro from "../screens/Intro";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Itinerary from "../screens/Itinerary";
import ItineraryDetail from "../screens/ItineraryDetail";
import ActivityDetail from "../screens/ActivityDetail";
import Profile from "../screens/Profile";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (

      <Stack.Navigator initialRouteName="Inboca"  screenOptions={{
        headerShown: false,
      }}>
        {/* Quiero que cuando se abre la app aparezca la intro, pero si hago click 
        en el tabnav en home solo ver home sin la intro, COMO HAGO?? */}
        
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Inboca" component={Home} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Itinerary" component={Itinerary} />
        <Stack.Screen name="ItineraryDetail" component={ItineraryDetail} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

  );
};

export default Navigator;
