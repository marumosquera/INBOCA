import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export const ItineraryItem = ({ item, selectActivity }) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item?.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        {item?.completed &&  <AntDesign name="checkcircleo" size={24} color="green" style={styles.check} />}
       
        </View>
    
        <Text style={styles.description}>{item?.description}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => selectActivity(item)}>
          <Feather name="more-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  titleContainer:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  textContainer: {
    flex: 3,
  },
  check:{
    flex:1,
    marginLeft: 2
  },  
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
    flex: 4
  },
  description: {
    fontSize: 12,
    color: "gray", 
  },
});

export default ItineraryItem;
