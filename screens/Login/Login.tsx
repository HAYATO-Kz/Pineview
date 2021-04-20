import React, { useState } from 'react';
import { Alert, AsyncStorage, View } from 'react-native';
import { Formik, FormikHelpers } from 'formik';

import { HeaderText, ButtonWrapper } from './Login.style';
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
  const [waiting, setWaiting] = useState(false);

  /**
   * Called when form is submitted
   * @param values form's value submitted
   * @param actions formik action helper function
   */
  const handleLogin = async (
    values: LoginFormValueProps,
    actions: FormikHelpers<LoginFormValueProps>,
  ) => {
    setWaiting(true);
    const response = await backendAPI.post('/signIn', values).catch((error) => {
      const { message } = error.response.data;
      Alert.alert(message);
    });
    setWaiting(false);
    if (response) {
      const { authToken } = response.data;
      await AsyncStorage.setItem('authToken', authToken);
      navigation.navigate('Main');
    }
    actions.setSubmitting(false);
  };

  return (
    <ContainerWithSafeArea
      paddingTop={16}
      paddingRear={16}
      loading={false}
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
          <View>
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
                disabled={
                  values.email === '' || values.password === '' || waiting
                }
              />
            </ButtonWrapper>
          </View>
        )}
      </Formik>
    </ContainerWithSafeArea>
  );
};
