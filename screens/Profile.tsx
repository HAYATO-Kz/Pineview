import React from 'react';
import styled from 'styled-components/native';
import { View, Text, SafeAreaView, AsyncStorage } from 'react-native';

import { Button } from '../components/Button';

interface ProfileProps {
  navigation: any;
}

const Profile = (props: ProfileProps) => {
  const { navigation } = props;

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('authToken');
    navigation.navigate('Home');
  };

  return (
    <View>
      <SafeAreaView />
      <Text>Profile</Text>
      <Button text="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Profile;
