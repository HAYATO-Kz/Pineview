import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { Wrapper, PaletteWrapper } from './EditProfile.style';
import {
  Button,
  Input,
  ContainerWithSafeArea,
  TouchableIcon,
  ColorPalette,
  ProfileImage,
} from '../../components';
import { backendAPI } from '../../utils/api';
import BackIcon from '../../assets/icons/back_icon.svg';

interface EditProfileProps {
  navigation: any;
}

export const EditProfile = (props: EditProfileProps) => {
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [userColor, setUserColor] = useState('#ffffff');
  const [userEmail, setUserEmail] = useState('');
  const [checkDirty, setCheckDirty] = useState({
    username: '',
    color: '#ffffff',
  });
  const [waiting, setWaiting] = useState(false);

  const handleUpdateProfile = async () => {
    setWaiting(true);
    const authToken = await AsyncStorage.getItem('authToken');
    let update_profile = {};
    if (username !== checkDirty.username && username !== '') {
      update_profile = { username: username, ...update_profile };
    }

    if (userColor !== checkDirty.color) {
      update_profile = { user_color: userColor, ...update_profile };
    }
    const response = await backendAPI
      .patch(`/user/${authToken}`, update_profile)
      .catch((err) => console.log(err));

    setWaiting(false);

    if (response) {
      const { authToken } = response.data;
      await AsyncStorage.setItem('authToken', authToken);
      navigation.navigate('Profile');
    }
  };

  const getUser = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    const response = await backendAPI
      .get(`/user/${authToken}`)
      .catch((err) => console.log(err));
    const user = response.data.user;
    setUserEmail(user.email);
    setUserColor(user.user_color);
    setUsername(user.username);
    setCheckDirty({ username: user.username, color: user.user_color });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ContainerWithSafeArea
      header={{
        leftComponent: (
          <TouchableIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'แก้ไขบัญชี',
        hasBorder: true,
      }}
      isInTabMode
      padding="23px 17px"
      loading={false}>
      <Wrapper>
        <ProfileImage size={154} color={userColor} />
        <PaletteWrapper>
          <ColorPalette
            label="เลือกสีพื้นหลังภาพโปรไฟล์"
            value={userColor}
            onChange={(selectedColor) => setUserColor(selectedColor)}
          />
        </PaletteWrapper>
        <Input
          label="ชื่อผู้ใช้"
          defaultValue={username}
          onChangeText={(value) => setUsername(value)}
          autoCapitalize="none"
          maxLength={15}
        />
        <Input label="อีเมล" disabled defaultValue={userEmail} />
        <Button
          text="บันทึก"
          block
          onPress={handleUpdateProfile}
          disabled={
            ((checkDirty.username === username || username === '') &&
              checkDirty.color === userColor) ||
            waiting
          }
        />
      </Wrapper>
    </ContainerWithSafeArea>
  );
};
