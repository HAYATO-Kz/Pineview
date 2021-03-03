import React, { useState } from 'react';
import { Icon } from 'native-base';
import { View, Text, SafeAreaView, Alert, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import { Formik, FormikHelpers } from 'formik';
import axios from 'axios';

import { Input, Button } from '../components';

interface LoginProps {
  navigation: any;
}

interface LoginFormValueProps {
  email: string;
  password: string;
}

const INITIALLOGINFORM: LoginFormValueProps = { email: '', password: '' };

const Login = (props: LoginProps) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);

  /**
   * Called when form is submitted
   * @param values form's value submitted
   * @param actions formik action helper function
   */
  const handleLogin = async (
    values: LoginFormValueProps,
    actions: FormikHelpers<LoginFormValueProps>,
  ) => {
    setLoading(true);
    const response = await axios
      .post('http://localhost:3000/signIn', values)
            .catch((error) => {
              const {message} = error.response.data
        Alert.alert(message)
      });
    if (response) {
      const { authToken } = response.data;
      await AsyncStorage.setItem('authToken', 'tokenJa');
      navigation.navigate('Main');
    }
    actions.setSubmitting(false);
    setLoading(false);
  };

  return (
    <Container>
      <SafeAreaView />
      <Icon
        type="Entypo"
        name="chevron-left"
        style={{ color: 'black' }}
        onPress={() => {
          navigation.navigate('Home');
        }}></Icon>
      <HeaderText>Log in</HeaderText>
      <Formik initialValues={INITIALLOGINFORM} onSubmit={handleLogin}>
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <Input
              label="email"
              onChangeText={handleChange('email')}
              autoCapitalize="none"
            />
            <Input
              label="password"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
            />
            <ButtonWrapper>
              <Button
                text="LOG IN"
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
