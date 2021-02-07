import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from './Profile';
import Collection from './Collection';
import Map from './Map';

interface MainProps {
  navigation: any;
}

const Main = (props: MainProps) => {
  const [isSignIn, setIsSignin] = useState(false);

  const {navigation} = props;

  const Tab = createBottomTabNavigator();

  return (
    <>
      {isSignIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Collection" component={Collection} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      ) : (
        <Map navigation={navigation} />
      )}
    </>
  );
};

export default Main;
