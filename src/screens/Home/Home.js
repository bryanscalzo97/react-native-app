import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import Detail from '../Detail/Detail'


const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
         onPress={() => {
           navigation.navigate("Detail");
         }}
      >
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home