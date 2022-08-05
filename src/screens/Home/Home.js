import { View, Text, FlatList, TouchableHighlight, ImageBackground, Animated } from 'react-native'
import React, {useState, useEffect} from 'react'
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';

const Home = ({ navigation }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(
              'https://api.unsplash.com/photos?client_id=a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa'
            );
            const data = await response.json();
            setImages(data);
          };
      
        fetchImages();
    }, [])

    const onPressImage = (item) => {
      const id = item.id
        navigation.navigate("Detail", { id });
      };
    
      const renderImage = ({ item }) => (
        <TouchableHighlight
          underlayColor="none"
          onPress={() => onPressImage(item)}
          style={styles.cardContainer}
        >
          <ImageBackground
            style={styles.cardBackground}
            imageStyle={{ borderRadius: 10}}
            source={{ uri: item.urls.small }}
          >
            
            <View style={styles.cardInfo}>
              <LinearGradient
                colors={["rgba(0, 0, 0, 0.1) -60.17%", "rgba(0, 0, 0, 1) 66.1%"]}
                style={styles.gradient}
              >
                <View style={styles.imageInfo}>
                  <Text style={styles.cardTitle}>{item.id}</Text>
                  <Text style={styles.cardLikes}>{item.likes} likes</Text>
                </View>
              </LinearGradient>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      );
      
  return (
    
    <View style={styles.homeContainer}>
      <FlatList
          style={{margin:5}}
          numColumns={2}                  
          columnWrapperStyle={styles.row} 
          data={images}
          renderItem={renderImage}
          keyExtractor={(item) => `${item.id}`}
        />
    </View>
  )
}

export default Home