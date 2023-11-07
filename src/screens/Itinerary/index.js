import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';

const ItineraryScreen = () => {
  const itineraryData = [
    {
      id: 1,
      name: 'City Exploration',
      duration: '3 hours',
      description: 'Discover the city’s most iconic landmarks and hidden gems.',
      activities: [
        {
          id: 11,
          name: 'Historic Landmarks',
          duration: '45 mins',
        },
        {
          id: 12,
          name: 'Art Galleries',
          duration: '1 hour',
        },
        {
          id: 13,
          name: 'Local Cuisine',
          duration: '30 mins',
        },
        {
          id: 14,
          name: 'Museum Visit',
          duration: '1 hour',
        },
        {
          id: 15,
          name: 'Shopping Spree',
          duration: '45 mins',
        },
        {
          id: 16,
          name: 'Scenic Park',
          duration: '1 hour',
        },
        {
          id: 17,
          name: 'Cultural Center',
          duration: '45 mins',
        },
        {
          id: 18,
          name: 'Coffee Break',
          duration: '30 mins',
        },
      ],
    },
    // Add more itineraries
  ];

  return (
    <SafeAreaView style={styles.container}>
      {itineraryData.map((itinerary) => (
        <View style={styles.itineraryContainer} key={itinerary.id}>
          <Image
            source={{
              uri:
                'https://lh3.googleusercontent.com/p/AF1QipMbA77l9mSvVU2gnEeUj5o-hFBXS6jSRPEixtaA=s1360-w1360-h1020',
            }}
            style={styles.coverImage}
          />
          <Text style={styles.itineraryName}>{itinerary.name}</Text>
          <Text style={styles.itineraryDescription}>{itinerary.description}</Text>
          <View style={styles.itineraryDetails}>
            <Text style={styles.durationIcon}>⏳ {itinerary.duration}</Text>
          </View>
          {itinerary.activities.map((activity, index) => (
            <View style={styles.activityContainer} key={activity.id}>
              {index > 0 && <View style={styles.activityLine} />}
              <View style={styles.activityItem}>
                <Image
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/p/AF1QipMbA77l9mSvVU2gnEeUj5o-hFBXS6jSRPEixtaA=s1360-w1360-h1020',
                  }}
                  style={styles.activityImage}
                />
                <View style={styles.activityInfo}>
                  <Text style={styles.activityName}>{activity.name}</Text>
                  <Text style={styles.activityDuration}>{activity.duration}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  itineraryContainer: {
    marginBottom: 20,
    marginHorizontal: 16,
  },
  coverImage: {
    width: '100%',
    height: 120,
  },
  itineraryName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  itineraryDescription: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  itineraryDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationIcon: {
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
  },
  activityContainer: {
    marginVertical: 20,
  },
  activityLine: {
    width: 2,
    backgroundColor: 'white',
    height: 20,
    position: 'absolute',
    marginLeft: 25,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  activityImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  activityInfo: {
    marginLeft: 15,
  },
  activityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  activityDuration: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
});

export default ItineraryScreen;

