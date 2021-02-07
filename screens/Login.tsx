import React from 'react';
import {Icon} from 'native-base';
import {View, Text, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {Formik} from 'formik';

import {Input, Button} from '../components';

interface LoginProps {
  navigation: any;
}

interface LoginFormValueProps {
  email: string;
  password: string;
}

const INITIALLOGINFORM: LoginFormValueProps = {email: '', password: ''};

const Login = (props: LoginProps) => {
  const {navigation} = props;
  return (
    <Container>
      <SafeAreaView />
      <Icon
        type="Entypo"
        name="chevron-left"
        style={{color: 'black'}}
        onPress={() => {
          navigation.navigate('Home');
        }}></Icon>
      <HeaderText>Login</HeaderText>
      <Formik
        initialValues={INITIALLOGINFORM}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <Input label="email" onChangeText={handleChange('email')} />
            <Input
              label="password"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
            />
            <ButtonWrapper>
              <Button
                text="LOGIN"
                block
                onPress={handleSubmit}
                disabled={values.email === '' || values.password === ''}
              />
            </ButtonWrapper>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Login;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const HeaderText = styled.Text`
  color: #613400;
  font-size: 36px;
  margin: 0 0 27px;
`;

const ButtonText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
`;

const ButtonWrapper = styled.View`
  margin: 16px 0 0;
`;
