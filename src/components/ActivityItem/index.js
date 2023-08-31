import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const ActivityItem = ({activity, selectActivity}) => {
    const {id, title, description} = activity

  return (
    <View>
      <TouchableOpacity onPress={() => selectActivity(activity)}>
      <Text>{title}</Text>
      </TouchableOpacity>
      
    </View>
  )
}
