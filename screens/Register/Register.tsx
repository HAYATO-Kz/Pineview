import React, { useState } from 'react';
import { View, Alert, AsyncStorage } from 'react-native';
import { Formik, FormikHelpers } from 'formik';

import {
  Input,
  Button,
  ContainerWithSafeArea,
  TouchableIcon,
} from '../../components';
import { HeaderText, ButtonWrapper } from './Register.style';
import { backendAPI } from '../../utils/api';
import BackIcon from '../../assets/icons/back_icon.svg';

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

  // mail validate
  if (!values.email) {
    errors.email = 'กรุณาใส่อีเมล';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'อีเมลนี้ไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง';
  }

  // password validate
  if (!values.password) {
    errors.password = 'กรุณาใส่รหัสผ่าน';
  }

  // username validate
  if (!values.username) {
    errors.username = 'กรุณาใส่ชื่อผู้ใช้';
  }

  //  No error detected
  if (errors.username === '' && errors.email === '' && errors.password === '') {
    return {};
  }
  return errors;
};

export const Register = (props: RegisterProps) => {
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
    const response = await backendAPI.post('/signUp', values).catch((error) => {
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
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
      }}>
      <HeaderText>ลงทะเบียน</HeaderText>
      <Formik
        initialValues={INITIAL_REGISTER_FORM}
        onSubmit={handleSignUp}
        validate={registerValidator}
        validateOnChange={false}>
        {({ handleChange, handleSubmit, errors, values }) => (
          <View>
            <Input
              label="ชื่อผู้ใช้"
              onChangeText={handleChange('username')}
              errorMessage={errors.username}
              autoCapitalize="none"
            />
            <Input
              label="อีเมล"
              onChangeText={handleChange('email')}
              errorMessage={errors.email}
              autoCapitalize="none"
            />
            <Input
              label="รหัสผ่าน"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
              errorMessage={errors.password}
              autoCapitalize="none"
            />
            <ButtonWrapper>
              <Button text="ลงทะเบียน" block onPress={handleSubmit} />
            </ButtonWrapper>
          </View>
        )}
      </Formik>
    </ContainerWithSafeArea>
  );
};
