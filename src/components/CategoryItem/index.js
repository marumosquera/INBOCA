import React from 'react';
import { View, Text} from 'react-native';

export const CategoryItem = ({category}) => {

  return (
    <View>
      <Text>{category}</Text>
    </View>
  )
}
