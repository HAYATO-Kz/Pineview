import React, { useState } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import { Icon } from 'native-base';
import { View, SafeAreaView, Alert, AsyncStorage } from 'react-native';
import { Formik, FormikHelpers } from 'formik';

import { Input, Button } from '../components';

interface RegisterProps {
  navigation: any;
}

interface RegisterFormValueProps {
  username: string;
  email: string;
  password: string;
}

const INITIAL_REGISTER_FORM: RegisterFormValueProps = {
  username: '',
  email: '',
  password: '',
};

const registerValidator = (values: RegisterFormValueProps) => {
  const errors: Partial<RegisterFormValueProps> = {
    username: '',
    email: '',
    password: '',
  };

  const checkedErrors = errors

  // mail validate
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // password validate
  if (!values.password) {
    errors.password = 'Required';
  }

  // username validate
  if (!values.username) {
    errors.username = 'Required';
  }

  //  No error detected
  if(checkedErrors === errors){
    return {}
  }

  return errors;
};

const Register = (props: RegisterProps) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);

  /**
   * Called when form is submitted
   * @param values form's value submitted
   * @param actions formik action helper function
   */
  const handleSignUp = async (
    values: RegisterFormValueProps,
    actions: FormikHelpers<RegisterFormValueProps>,
  ) => {
    setLoading(true);
    const response = await axios
      .post('http://localhost:3000/signUp', values)
      .catch((error) => {
        const { message } = error.response.data;
        Alert.alert(message)
      });
      if(response){
    const { authToken } = response.data;
    await AsyncStorage.setItem('authToken',authToken)
    navigation.navigate('Main')
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
      <HeaderText>Register</HeaderText>
      <Formik
        initialValues={INITIAL_REGISTER_FORM}
        onSubmit={handleSignUp}
        validate={registerValidator}
        validateOnChange={false}>
        {({ handleChange, handleSubmit, errors, values }) => (
          <View>
            <Input
              label="Username"
              onChangeText={handleChange('username')}
              errorMessage={errors.username}
              autoCapitalize="none"
            />
            <Input
              label="Email"
              onChangeText={handleChange('email')}
              errorMessage={errors.email}
              autoCapitalize="none"
            />
            <Input
              label="Password"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
              errorMessage={errors.password}
              autoCapitalize="none"
            />
            <ButtonWrapper>
              <Button text="REGISTER NOW" block onPress={handleSubmit} />
            </ButtonWrapper>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Register;

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
