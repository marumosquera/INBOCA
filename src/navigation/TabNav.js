import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//Routes
import Navigator from "./RootNavigation";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Itinerary from "../screens/Itinerary";
import Map from "../screens/Map";
import * as Location from "expo-location";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black", // Fondo negro
          borderTopColor: "transparent", // Borde superior transparente
        },
        tabBarActiveTintColor: "white", // Color de iconos y texto cuando enfocado
        tabBarInactiveTintColor: "gray", // Color de iconos y texto cuando no enfocado
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarIconStyle: {
          marginBottom: 0, // Elimina el espacio inferior de los iconos
        },
        tabBarShowLabel: true, // Muestra los nombres de las pestañas
      }}
    >
      <Tab.Screen
        name="Navigator"
        component={Navigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-outline"}
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Itinerary"
        component={Itinerary}
        options={{
          tabBarLabel: "Itinerarios",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "map" : "map-o"}
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: "Mapa",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "map-marker-radius" : "map-marker-radius-outline"}
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
