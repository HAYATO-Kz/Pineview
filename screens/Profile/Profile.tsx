import React from 'react';
import { Text, AsyncStorage } from 'react-native';

import { Button, ContainerWithSafeArea } from '../../components';

interface ProfileProps {
  navigation: any;
}

export const Profile = (props: ProfileProps) => {
  const { navigation } = props;

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('authToken');
    navigation.navigate('Home');
  };

  return (
    <ContainerWithSafeArea>
      <Text>Profile</Text>
      <Button text="Sign out" onPress={handleSignOut} />
    </ContainerWithSafeArea>
  );
};
