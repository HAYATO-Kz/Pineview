import React from 'react';
import {Container, Content, Text, Button} from 'native-base';
import {Image, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

interface HomeSceneProps {
  navigation: any;
}

const HomeScene = (props: HomeSceneProps) => {
  const {navigation} = props;

  return (
    <HomeContainer>
      <Logo source={require('./images/logo.png')} />
      <Mascot source={require('./images/mascot.png')} />
      <ButtonContainer>
        <PrimaryButtonWithStyled
          onPress={() => {
            navigation.navigate('Map');
          }}>
          <WhiteText>USE WITHOUT LOGIN</WhiteText>
        </PrimaryButtonWithStyled>
        <DividerRow>
          {/* <DividerLine /> */}
          <Divider>OR</Divider>
          {/* <DividerLine /> */}
        </DividerRow>
        <SecondaryButtonContainer>
          <LoginButtonWithStyled>
            <BrownText>LOGIN</BrownText>
          </LoginButtonWithStyled>
          <RegisterButtonWithStyled>
            <WhiteText>REGISTER</WhiteText>
          </RegisterButtonWithStyled>
        </SecondaryButtonContainer>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default HomeScene;

const HomeContainer = styled(SafeAreaView)`
  background-color: #ffeeb4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Logo = styled.Image`
  width: 100%;
  /* flex: 1; */
`;

const Mascot = styled.Image`
  max-width: 100%;
  /* flex: 1; */
`;

const RegisterButtonWithStyled = styled(Button)`
  /* flex: 1; */
  background: #613400;
  width: 48%;
  height: 47px;
  justify-content: center;
  border-radius: 5px;
`;

const LoginButtonWithStyled = styled(Button)`
  /* flex: 1; */
  background: #fff;
  width: 48%;
  height: 47px;
  border: 2px solid #613400;
  justify-content: center;
  border-radius: 5px;
`;

const PrimaryButtonWithStyled = styled(Button)`
  /* flex: 1; */
  height: 47px;
  width: 100%;
  background: #613400;
  justify-content: center;
  border-radius: 5px;
`;

const DividerRow = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  margin: 12px 0 22px;
`;
const Divider = styled.Text`
  font-weight: 900;
  font-size: 13px;
  color: #000;
  background-color: #ffeeb4;
  padding: 0 10px;
  transform: translateY(7px);
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15px;
  margin-top: 20px;
`;

const SecondaryButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const WhiteText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;

const BrownText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #613400;
`;
