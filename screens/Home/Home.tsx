import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { Button, ContainerWithSafeArea } from '../../components';
import {
  Logo,
  LogoWrapper,
  Mascot,
  DividerRow,
  Divider,
  SecondaryButtonContainer,
  ButtonContainer,
  SecondaryButtonWrapper,
  Space,
  MascotWrapper,
  HomeContainer
} from './Home.style';

import MascotImageSource from '../../assets/images/mascot.png';
import LogoImageSource from '../../assets/images/logo.png';

interface HomeProps {
  navigation: any;
}

export const Home = (props: HomeProps) => {
  const { navigation } = props;

  const [loading, setLoading] = useState(true);

  const initialSignInStatus = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    setLoading(false);
    if (!!authToken) {
      navigation.navigate('Main');
    }
  };

  useEffect(() => {
    initialSignInStatus();
  }, []);

  return (
    <ContainerWithSafeArea background="#fffbeb" loading={loading}>
      <HomeContainer>
      <LogoWrapper>
        <Logo source={LogoImageSource} />
      </LogoWrapper>
      <MascotWrapper>
        <Mascot source={MascotImageSource} />
      </MascotWrapper>
      <ButtonContainer>
        <Button
          text="เข้าใช้โดยไม่เข้าสู่ระบบ"
          onPress={() => {
            navigation.navigate('Main');
          }}
          block
        />
        <DividerRow>
          <Divider>หรือ</Divider>
        </DividerRow>
        <SecondaryButtonContainer>
          <SecondaryButtonWrapper>
            <Button
              text="เข้าสู่ระบบ"
              block
              outline
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </SecondaryButtonWrapper>
          <Space />
          <SecondaryButtonWrapper>
            <Button
              text="ลงทะเบียน"
              block
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
          </SecondaryButtonWrapper>
        </SecondaryButtonContainer>
      </ButtonContainer>
      </HomeContainer>
    </ContainerWithSafeArea>
  );
};
