import React from 'react';

import { Button, Container} from '../../components';
import {
  HomeContainer,
  Logo,
  Mascot,
  DividerRow,
  Divider,
  SecondaryButtonContainer,
  ButtonContainer,
  SecondaryButtonWrapper,
  Space,
} from './Home.style';

import MascotImageSource from '../../assets/images/mascot.png';
import LogoImageSource from '../../assets/images/logo.png';

interface HomeProps {
  navigation: any;
}

export const Home = (props: HomeProps) => {
  const { navigation } = props;

  return (
    <HomeContainer>
      <Logo source={LogoImageSource} />
      <Mascot source={MascotImageSource} />
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
  );
};
