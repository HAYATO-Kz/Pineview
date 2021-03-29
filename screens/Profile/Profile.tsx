import React, { useState, useEffect } from 'react';
import { AsyncStorage, useWindowDimensions } from 'react-native';

import {
  ImageWrapper,
  Container,
  ButtonTab,
  IconContainer,
  IconLabel,
  Email,
  Username,
  Tab,
} from './Profile.style';
import {
  ContainerWithSafeArea,
  ErrorButton,
  ProfileImage,
} from '../../components';
import packageJson from '../../package.json'
import { backendAPI } from '../../utils/api';
import DefaultImage from '../../assets/images/mascot.png';
import ArrowRightIcon from '../../assets/icons/arrow_right_icon.svg';
import UserIcon from '../../assets/icons/user_icon.svg';
import KeyIcon from '../../assets/icons/key_icon.svg';
import QuestionIcon from '../../assets/icons/question_icon.svg';
import InfoIcon from '../../assets/icons/info_icon.svg';
import StarIcon from '../../assets/icons/star_icon.svg';
import VersionIcon from '../../assets/icons/version_icon.svg';

interface ProfileProps {
  navigation: any;
}

export const Profile = (props: ProfileProps) => {
  const { navigation } = props;
  const [userData, setUserData] = useState({
    username: 'username',
    email: 'email@email.com',
    user_color: '#ffffff',
  });

  const contentWidth = useWindowDimensions().width - 32;

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('authToken');
    navigation.navigate('Home');
  };

  const options = [
    {
      icon: <UserIcon />,
      label: 'บัญชี',
      onPress: () => navigation.navigate('EditProfile'),
    },
    {
      icon: <KeyIcon />,
      label: 'เปลี่ยนรหัสผ่าน',
      onPress: () => navigation.navigate('ChangePassword'),
    },
    {
      icon: <QuestionIcon />,
      label: 'คำถามที่พบบ่อย',
      onPress: () => navigation.navigate('FAQ'),
    },
    {
      icon: <InfoIcon />,
      label: 'เกี่ยวกับ Pineview',
      onPress: () => navigation.navigate('Info'),
    },
  ];

  const getUser = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    const response = await backendAPI
      .get(`/user/${authToken}`)
      .catch((err) => console.log(err));
    const user = response.data.user;
    setUserData(user);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUser();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <ContainerWithSafeArea padding="24px 16px">
      <Container>
        <ImageWrapper width={`${-contentWidth / 4}px`}>
          <ProfileImage size={154} color={userData.user_color} />
        </ImageWrapper>
        <Email>{userData.email}</Email>
        <Username>{userData.username}</Username>
        {options.map((option) => (
          <ButtonTab onPress={option.onPress} key={option.label}>
            <IconContainer>
              {option.icon}
              <IconLabel>{option.label}</IconLabel>
            </IconContainer>
            <ArrowRightIcon />
          </ButtonTab>
        ))}
        <ButtonTab onPress={() => {}}>
          <IconContainer>
            <StarIcon />
            <IconLabel>ให้คะแนนบน App Store</IconLabel>
          </IconContainer>
        </ButtonTab>
        <Tab>
          <IconContainer>
            <VersionIcon />
            <IconLabel>เวอร์ชัน {packageJson.version}</IconLabel>
          </IconContainer>
        </Tab>
      </Container>
      <ErrorButton text="ออกจากระบบ" onPress={handleSignOut} block />
    </ContainerWithSafeArea>
  );
};
