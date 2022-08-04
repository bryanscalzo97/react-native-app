import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
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
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
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
imageInfo: {

 borderBottomLeftRadius: 10,
 borderBottomRightRadius: 10,
 padding: 10,
 color: '#FFFFFF'
},
gradient: {
borderBottomLeftRadius: 10,
borderBottomRightRadius: 10,
height: 238,
padding: 26
},
cardTitle: {
 color: '#FFFFFF',
 fontSize: 42,
},
cardLikes: {
color: '#FFFFFF',
 fontSize: 14,
}
});

export default styles;