import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
   }
});

export default styles;