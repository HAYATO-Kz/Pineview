import React, { useState } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Formik, FormikHelpers } from 'formik';

import { HeaderText, ButtonWrapper, FormContainer, Icon } from './Login.style';
import {
  Input,
  Button,
  ContainerWithSafeArea,
  TouchableIcon,
} from '../../components';
import { backendAPI } from '../../utils/api';

import BackIcon from '../../assets/icons/back_icon.svg';

interface LoginProps {
  navigation: any;
}

interface LoginFormValueProps {
  email: string;
  password: string;
}

const INITIAL_LOGIN_FORM: LoginFormValueProps = { email: '', password: '' };

export const Login = (props: LoginProps) => {
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
    const response = await backendAPI.post('/signIn', values).catch((error) => {
      const { message } = error.response.data;
      Alert.alert(message);
    });
    if (response) {
      const { authToken } = response.data;
      await AsyncStorage.setItem('authToken', authToken);
      navigation.navigate('Main');
    }
    actions.setSubmitting(false);
    setLoading(false);
  };

  return (
    <ContainerWithSafeArea
      padding="16px"
      header={{
        leftComponent: (
          <TouchableIcon
            onPress={() => navigation.goBack()}
            icon={<BackIcon />}
          />
        ),
      }}>
      <HeaderText>เข้าสู่ระบบ</HeaderText>
      <Formik initialValues={INITIAL_LOGIN_FORM} onSubmit={handleLogin}>
        {({ handleChange, handleSubmit, values }) => (
          <FormContainer>
            <Input
              label="อีเมล"
              onChangeText={handleChange('email')}
              autoCapitalize="none"
            />
            <Input
              label="รหัสผ่าน"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
            />
            <ButtonWrapper>
              <Button
                text="เข้าสู่ระบบ"
                block
                onPress={handleSubmit}
                disabled={values.email === '' || values.password === ''}
              />
            </ButtonWrapper>
          </FormContainer>
        )}
      </Formik>
      {/* </Container> */}
    </ContainerWithSafeArea>
  );
};
