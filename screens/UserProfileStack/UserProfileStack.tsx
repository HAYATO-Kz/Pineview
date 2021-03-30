import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from '../Profile/Profile';
import { EditProfile } from '../EditProfile/EditProfile'
import { ChangePassword } from '../ChangePassword/ChangePassword'
import { FAQ } from '../FAQ/FAQ'
import { Info } from '../Info/Info'
 
const UserProfileStackNavigator = createStackNavigator();

export const UserProfileStack = () => {
  return (
    <UserProfileStackNavigator.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <UserProfileStackNavigator.Screen name="Profile" component={Profile} />
      <UserProfileStackNavigator.Screen name="EditProfile" component={EditProfile} />
      <UserProfileStackNavigator.Screen name="ChangePassword" component={ChangePassword} />
      <UserProfileStackNavigator.Screen name="FAQ" component={FAQ} />
      <UserProfileStackNavigator.Screen name="Info" component={Info} />
    </UserProfileStackNavigator.Navigator>
  );
};
