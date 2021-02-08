import React from 'react';
import {Icon} from 'native-base';
import {View, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {Formik, FormikHelpers} from 'formik';

import {Input, Button} from '../components';

interface RegisterProps {
  navigation: any;
}

interface RegisterFormValueProps {
  username: string;
  email: string;
  password: string;
}

const INITIALRegisterFORM: RegisterFormValueProps = {
  username: '',
  email: '',
  password: '',
};

const registerValidator = (values: RegisterFormValueProps) => {
  const errors: RegisterFormValueProps = {
    username: '',
    email: '',
    password: '',
  };

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
  return errors;
};

const Register = (props: RegisterProps) => {
  const {navigation} = props;

  /**
   * Called when form is submitted
   * @param values form's value submitted
   * @param actions formik action helper function
   */
  const handleSignUp = (
    values: RegisterFormValueProps,
    actions: FormikHelpers<RegisterFormValueProps>,
  ) => {
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

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
      <HeaderText>Register</HeaderText>
      <Formik
        initialValues={INITIALRegisterFORM}
        onSubmit={handleSignUp}
        validate={registerValidator}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <Input label="Username" onChangeText={handleChange('username')} />
            <Input label="Email" onChangeText={handleChange('email')} />
            <Input
              label="Password"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
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
