import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  exitButtonContainer: {
    paddingLeft: 30
  },
  row: {
    flex: 1,
    justifyContent: "space-evenly",
},
cardBackground: {
    borderRadius: 10,
    justifyContent: "flex-end",
},
homeContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-around',
    opacity:0.6,
    paddingTop: 36
},
cardContainer: {
    margin: 10,
},
cardInfo: {
flex: 1,
height: 468,
justifyContent: 'space-between',
borderRadius: 10,
justifyContent: 'flex-end',

},
cardInfoHidden: {
  flex: 1,
  height: 468,
  justifyContent: 'space-between',
  borderRadius: 10,
  justifyContent: 'flex-end',
  opacity: 0, 
  height: 0
},
imageInfo: {

 borderBottomLeftRadius: 10,
 borderBottomRightRadius: 10,
 padding: 10,
 color: '#FFFFFF'
},
gradient: {
height: 238,
padding: 30
},
cardTitle: {
 color: '#FFFFFF',
 fontSize: 42,
},
cardLikes: {
color: '#FFFFFF',
 fontSize: 14,
},
userContainer: {
  flexDirection: 'row',
  color: '#fff'
},
userName: {
  color: '#fff',
  fontSize: 12
},
userProfile: {
  color: '#fff',
  fontSize: 10
},
userInfo: {
  padding: 10
},
userImage: {
  width: 37,
  height: 37,
  borderRadius: 40
},
TouchableContainer: {
  flex: 1,
},
container: {
  
  flex: 1,
}
});

export default styles;