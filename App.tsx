import 'react-native-gesture-handler';
import React from 'react';
import Map from './Map';
import Review from './Review';
import HomeScene from './HomeScene';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  //console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScene"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScene" component={HomeScene} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
