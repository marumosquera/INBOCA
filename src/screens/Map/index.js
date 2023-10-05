import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Linking } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const Map = ({ navigation }) => {
  const initialLocation = {
    latitude: -34.5819383,
    longitude: -58.41383,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const markers = [
    {
      title: "Facultad de Derecho",
      description: "Universidad de Buenos Aires",
      coordinate: {
        latitude: -34.595740,
        longitude: -58.398085,
      },
    },
    {
      title: "Malba",
      description: "Museo de Arte Latinoamericano de Buenos Aires",
      coordinate: {
        latitude: -34.577621,
        longitude: -58.417772,
      },
    },
  ];

  const mapRef = useRef(null);
  const [region, setRegion] = useState(initialLocation);

  const zoomIn = () => {
    if (mapRef.current) {
      const newRegion = {
        ...region,
        latitudeDelta: region.latitudeDelta / 2,
        longitudeDelta: region.longitudeDelta / 2,
      };
      setRegion(newRegion);
      mapRef.current.animateToRegion(newRegion);
    }
  };

  const zoomOut = () => {
    if (mapRef.current) {
      const newRegion = {
        ...region,
        latitudeDelta: region.latitudeDelta * 2,
        longitudeDelta: region.longitudeDelta * 2,
      };
      setRegion(newRegion);
      mapRef.current.animateToRegion(newRegion);
    }
  };

  const handleDirections = (marker) => {
    const { coordinate } = marker;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinate.latitude},${coordinate.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Callout>
              {/* Personalizamos la información que se muestra al hacer clic */}
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{marker.title}</Text>
                <Text style={styles.calloutDescription}>{marker.description}</Text>
                <TouchableOpacity
                  style={styles.directionsButton}
                  onPress={() => handleDirections(marker)}
                >
                  <Text style={styles.directionsButtonText}>Cómo llegar</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.zoomControls}>
        <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
          <Text style={styles.zoomButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
          <Text style={styles.zoomButtonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  zoomControls: {
    position: "absolute",
    bottom: 16,
    right: 16,
    flexDirection: "column",
  },
  zoomButton: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  zoomButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  calloutContainer: {
    width: 200,
  },
  calloutTitle: {
    fontWeight: "bold",
  },
  calloutDescription: {
    marginBottom: 5,
  },
  directionsButton: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  directionsButtonText: {
    color: "white",
  },
});

export default Map;
