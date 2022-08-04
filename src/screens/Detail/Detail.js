import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from "./styles"

const Detail = () => {
  const imageUrl = 'https://pimmedia.egger.com/l/decor/U570_9/s/Detail/f/881x513/8812251152414';
  return (
    <ImageBackground
      style={styles.homeContainer}
      source={{ uri: imageUrl }}
      resizeMode="cover"
    >
        <Text>Hola</Text>
    </ImageBackground>
  )
}

export default Detail