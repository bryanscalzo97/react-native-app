
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/Home/Home";
import Detail from "../screens/Detail/Detail";
import Profile from "../screens/Profile/Profile";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const AppNavigations = () => {
  return (    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={Home}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
  </NavigationContainer>
  // <NavigationContainer>
    //     <Drawer.Navigator useLegacyImplementation>
    //         <Drawer.Screen name="Discover" component={Home} />
    //         <Drawer.Screen name="Detail" component={} />
    //         <Drawer.Screen name="Profile" component={Profile} />
    //     </Drawer.Navigator>
    // </NavigationContainer>
  )
}

export default AppNavigations