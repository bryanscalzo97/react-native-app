import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Detail from './src/screens/Detail/Detail';
import Profile from './src/screens/Profile/Profile';
import AppNavigations from './src/navigations/AppNavigations';



export default function App() {  
  return <AppNavigations />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
