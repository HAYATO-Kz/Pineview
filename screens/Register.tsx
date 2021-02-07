import React from 'react';
import {Icon} from 'native-base';
import {View, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {Formik} from 'formik';

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

const Register = (props: RegisterProps) => {
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
      <HeaderText>Register</HeaderText>
      <Formik
        initialValues={INITIALRegisterFORM}
        onSubmit={(values, actions) => {
          console.log({values, actions});
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <Input label="Username" onChange={handleChange('username')} />
            <Input label="Email" onChange={handleChange('email')} />
            <Input
              label="Password"
              onChange={handleChange('password')}
              secureTextEntry={true}
            />
            <ButtonWrapper>
              <Button text="SIGN UP" block onPress={handleSubmit} />
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
