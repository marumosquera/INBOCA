import React from 'react'
import { View, FlatList } from 'react-native'
import { ItineraryItem } from '../ItineraryItem'

export const ItineraryContainer = ({data, selectActivity}) => {

  return (
   <View>
      <FlatList
          data={data}
          renderItem={({ item }) => <ItineraryItem item={item} selectActivity={selectActivity}/>}
          keyExtractor={item => item.id}
          
        />
   </View>
  )
}