import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Profile } from '../Profile/Profile';
import { Collection } from '../Collection/Collection';
import { Map } from '../Map/Map';

interface MainProps {
  navigation: any;
}

export const Main = (props: MainProps) => {
  const [isSignIn, setIsSignin] = useState(false);

  const { navigation } = props;

  const initialSignInStatus = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    if (!!authToken) {
      setIsSignin(true);
    }
  };

  useEffect(() => {
    initialSignInStatus();
  }, []);

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
