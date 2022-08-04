import { View, Text, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles"

const Detail = (props) => {
  const [imageURL, setImageURL] = useState(null)
  const { navigation, route } = props;
  const id = route.params?.id;
  const imageUrl = 'https://api.unsplash.com/photos/'+ id + '?client_id=a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa';
  
  useEffect(() => {
    const fetchImages = async () => {
        const response = await fetch(
          imageUrl
        );
        const data = await response.json();
        setImageURL(data);
      };
  
    fetchImages();
}, [])

  return (
    (imageURL === null) ?
    <Text>Loading</Text>
    :
    <ImageBackground
      style={styles.homeContainer}
      source={{ uri: imageURL.urls.regular }}
      resizeMode="cover"
    >
      <Text>X</Text>
      <View style={styles.cardInfo}>
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.4) -60.17%", "rgba(0, 0, 0, 1) 66.1%"]}
              style={styles.gradient}
            >
              <View style={styles.imageInfo}>
                <Text style={styles.cardTitle}>{imageURL.id}</Text>
                <Text style={styles.cardLikes}>{imageURL.likes} likes</Text>
              </View>
          </LinearGradient>
            </View>
        
    </ImageBackground>
  )
}

export default Detail