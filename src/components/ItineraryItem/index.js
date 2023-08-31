import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const ItineraryItem = ({item, selectActivity}) => {
  return (
    <View>
     <TouchableOpacity onPress={() => selectActivity(item)}>
      <Text>{item?.title}</Text>
      </TouchableOpacity>
    </View>
  )
}
