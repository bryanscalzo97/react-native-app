import { View, Text, FlatList, TouchableHighlight, ImageBackground, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { LinearGradient } from "expo-linear-gradient";
import ExitButton from '../../components/ExitButton/ExitButton';
import styles from './styles';
import axios from "axios";

const Profile = (props) => {
  const [imageURL, setImageURL] = useState(null)
  const [profile, setProfile] = useState(null)
  const { navigation, route } = props;
  const _username = route.params?.username;
  const profileUrl = "https://api.unsplash.com/users/" + _username + "?client_id=a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa";

  async function loadData() {
    try {
      const response = await axios.get(profileUrl);
      setImageURL(response.data.photos);
      setProfile(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadData();
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
          </View>
      </LinearGradient>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
  return (
    (profile === null) ?
    <Text>Loading</Text>
    :
    <View style={styles.profileContainer}>
      <ExitButton navigation={navigation} color={'black'}/>

      <View style={styles.userContainer}>
          <View style={styles.imageContainer}>
            <Image
               style={styles.userImage}
               source={{
               uri: profile.profile_image.medium
              }}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{profile.name}</Text>
            <Text style={styles.userBio}>{profile.bio}</Text>
          </View>
      </View>

      <Text style={styles.profileTitle}>My Photos</Text>
      <FlatList
          style={{margin:0}}
          numColumns={2}                  
          columnWrapperStyle={styles.row} 
          data={imageURL}
          renderItem={renderImage}
          keyExtractor={(item) => `${item.id}`}
        />
    </View>
  )
}

export default Profile