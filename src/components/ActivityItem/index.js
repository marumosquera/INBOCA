import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export const ActivityItem = ({ activity, selectActivity }) => {
  const { id, title, description, image } = activity;
  console.log(image);

  return (
    <View>
      <TouchableOpacity onPress={() => selectActivity(activity)}>
        <Text>{title}</Text>
        <Image source={require(`../../assets/img/${image}`)} />
      </TouchableOpacity>
    </View>
  );
};

