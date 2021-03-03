import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { Button } from '../components/Button';

interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  const { navigation } = props;

  return (
    <HomeContainer>
      <Logo source={require('../images/logo.png')} />
      <Mascot source={require('../images/mascot.png')} />
      <ButtonContainer>
        <Button
          text="USE WITHOUT LOG IN"
          onPress={() => {
            navigation.navigate('Main');
          }}
          block
        />
        <DividerRow>
          <Divider>OR</Divider>
        </DividerRow>
        <SecondaryButtonContainer>
          <SecondartButtonWrapper>
            <Button
              text="LOG IN"
              block
              outline
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </SecondartButtonWrapper>
          <Space />
          <SecondartButtonWrapper>
            <Button
              text="REGISTER"
              block
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
          </SecondartButtonWrapper>
        </SecondaryButtonContainer>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;

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
`;

const Mascot = styled.Image`
  max-width: 100%;
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

const SecondartButtonWrapper = styled.View`
  flex: 1;
`;

const Space = styled.View`
  width: 16px;
`;
