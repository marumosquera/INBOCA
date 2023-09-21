import React from 'react'
import { View, StyleSheet } from 'react-native'
import MyItinerary from '../MyItinerary'

const Itinerary = () => {
  return (
    <View style={styles.container}>
      <MyItinerary/>
    </View>
  )
}

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

export default Itinerary