import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: 36,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  userImage: {
    width: 37,
    height: 37,
    borderRadius: 40
  },
  profileTitle: {
    fontSize: 42
  },
    row: {
        flex: 1,
        justifyContent: "space-between",
    },
    cardBackground: {
        borderRadius: 10,
        justifyContent: "flex-end",
    },
    homeContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around',
    },
    cardContainer: {
      marginTop: 20
    },
   cardInfo: {
    flex: 1,
    width: 140,
    height: 200,
    justifyContent: 'space-between',
    borderRadius: 10,
    justifyContent: 'flex-end',
   },
   imageInfo: {
    
     borderBottomLeftRadius: 10,
     borderBottomRightRadius: 10,
     padding: 10,
     color: '#FFFFFF'
   },
   gradient: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
   },
   cardTitle: {
     color: '#FFFFFF',
     fontSize: 12,
   },
   cardLikes: {
    color: '#FFFFFF',
     fontSize: 12,
   },
   userContainer: {
    flexDirection: 'row',
    paddingTop: 26,
    paddingBottom: 26
    
    
  },
  userName: {
    color: '#000',
    fontSize: 22,
    paddingRight: 30
  },
  userBio: {
    color: '#030303',
    fontSize: 12,
    paddingRight: 30
  },
  userProfile: {
    color: '#fff',
    fontSize: 10
  },
  userInfo: {
    marginRight: 30,
  },
  userImage: {
    width: 63,
    height: 63,
    borderRadius: 40
  },
  imageContainer: {
    paddingRight: 10
  }
});

export default styles;