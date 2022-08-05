import { View, Text, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, {useState, useEffect} from 'react'
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles"
import ExitButton from '../../components/ExitButton/ExitButton';

const Detail = (props) => {
  const [imageURL, setImageURL] = useState(null)
  const [infoDisplay, setInfoDisplay] = useState(true)

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

  const onPressProfile = () => {
    const username = imageURL.user.username
    console.log('detail username: ' + username)
      navigation.navigate("Profile", { username });
    };

  return (
    (imageURL === null) ?
    <Text>Loading</Text>
    :
        <View style={styles.container}>
          <TouchableHighlight 
          underlayColor="none" 
          style={styles.TouchableContainer} 
          onPress={() => setInfoDisplay(infoDisplay ? false : true)}
          >
            <ImageBackground
            style={styles.homeContainer}
            source={{ uri: imageURL.urls.regular }}
            resizeMode="cover"
            >
              <View style={styles.exitButtonContainer}>
                <ExitButton navigation={navigation} color={'white'}/>
              </View>
              <View style={(infoDisplay === true) ? styles.cardInfo : styles.cardInfoHidden}>
                <LinearGradient
                colors={["rgba(0, 0, 0, 0.4) -60.17%", "rgba(0, 0, 0, 1) 66.1%"]}
                style={styles.gradient}
                >
                  <View style={styles.imageInfo}>
                    <Text style={styles.cardTitle}>{imageURL.id}</Text>
                    <Text style={styles.cardLikes}>{imageURL.likes} likes</Text>
                  </View>
                  <View style={styles.userContainer}>
                    <View>
                      <Image
                         style={styles.userImage}
                         source={{
                           uri: imageURL.user.profile_image.small
                          }}
                      />
                    </View>
                    <View style={styles.userInfo}>
                      <Text style={styles.userName}>{imageURL.user.name}</Text>
                      <TouchableOpacity onPress={() => onPressProfile()}>
                        <Text style={styles.userProfile}>View profile</Text>
                      </TouchableOpacity>
                    </View>
                  </View>      
                </LinearGradient>
              </View>
            </ImageBackground>
          </TouchableHighlight>
        </View>
  )
}

export default Detail