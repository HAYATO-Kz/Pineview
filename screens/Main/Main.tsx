import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CollectionStack } from '../CollectionStack/CollectionStack';
import { UserProfileStack } from '../UserProfileStack/UserProfileStack';
import { Map } from '../Map/Map';
import MapTab from '../../assets/icons/map_tab_icon.svg';
import CollectionTab from '../../assets/icons/collection_tab_icon.svg';
import ProfileTab from '../../assets/icons/profile_tab_icon.svg';

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
        <Tab.Navigator
          tabBarOptions={{
            style: { height: 100, paddingTop: 15 },
            activeTintColor: '#613400',
            inactiveTintColor: '#bfbfbf',
            labelStyle: { fontFamily: 'Kanit' },
          }}>
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              title: 'แผนที่',
              tabBarIcon: ({ size, focused, color }) => <MapTab />,
            }}
          />
          <Tab.Screen
            name="Collection"
            component={CollectionStack}
            options={{
              title: 'คอลเลกชัน',
              tabBarIcon: ({ size, focused, color }) => <CollectionTab />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={UserProfileStack}
            options={{
              title: 'โปรไฟล์',
              tabBarIcon: ({ size, focused, color }) => <ProfileTab />,
            }}
          />
        </Tab.Navigator>
      ) : (
        <Map navigation={navigation} />
      )}
    </>
  );
};
