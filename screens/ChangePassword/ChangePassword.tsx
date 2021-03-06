import React, { useState } from 'react';
import { View, Alert, AsyncStorage } from 'react-native';
import { Formik, FormikHelpers } from 'formik';

import {
  Input,
  Button,
  ContainerWithSafeArea,
  TouchableIcon,
} from '../../components';
import { ButtonWrapper } from './ChangePassword.style';
import { backendAPI } from '../../utils/api';
import BackIcon from '../../assets/icons/back_icon.svg';

interface ChangePasswordProps {
  navigation: any;
}

interface ChangePasswordFormValueProps {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const INITIAL_CHANGE_PASSWORD_FORM: ChangePasswordFormValueProps = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const changePasswordValidator = (values: ChangePasswordFormValueProps) => {
  const errors: Partial<ChangePasswordFormValueProps> = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  // mail validate
  if (!values.oldPassword) {
    errors.oldPassword = 'กรุณาใส่รหัสผ่านปัจจุบัน';
  }

  // password validate
  if (!values.newPassword) {
    errors.newPassword = 'กรุณาใส่รหัสผ่านใหม่';
  } else if (values.oldPassword === values.newPassword) {
    errors.newPassword =
      'รหัสผ่านใหม่ต้องไม่ซ้ำกับรหัสผ่านปัจจุบัน กรุณาเปลี่ยนรหัสผ่าน';
  }

  // username validate
  if (!values.confirmPassword) {
    errors.confirmPassword = 'กรุณายืนยันรหัสผ่าน';
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = 'รหัสผ่านที่ใช้ในการยืนยันต้องตรงกับรหัสผ่านใหม่';
  }

  //  No error detect
  if (
    errors.oldPassword === '' &&
    errors.newPassword === '' &&
    errors.confirmPassword === ''
  ) {
    return {};
  }

  return errors;
};

export const ChangePassword = (props: ChangePasswordProps) => {
  const { navigation } = props;
  /**
   * Called when form is submitted
   * @param values form's value submitted
   * @param actions formik action helper function
   */
  const handleSignUp = async (
    values: ChangePasswordFormValueProps,
    actions: FormikHelpers<ChangePasswordFormValueProps>,
  ) => {
    const authToken = await AsyncStorage.getItem('authToken');
    const response = await backendAPI
      .patch(`/user/${authToken}/password`, values)
      .catch((error) => {
        console.log(error);
        const { message } = error.response.data;
        Alert.alert(message);
      });
    if (response) {
      navigation.navigate('Profile');
    }
    actions.setSubmitting(false);
  };

  return (
    <ContainerWithSafeArea
      paddingTop={22}
      paddingRear={33}
      header={{
        leftComponent: (
          <TouchableIcon
            icon={<BackIcon />}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'เปลี่ยนรหัสผ่าน',
        hasBorder: true,
      }}
      loading={false}>
      <Formik
        initialValues={INITIAL_CHANGE_PASSWORD_FORM}
        onSubmit={handleSignUp}
        validate={changePasswordValidator}
        validateOnChange={false}>
        {({ handleChange, handleSubmit, errors, values }) => (
          <View>
            <Input
              label="รหัสผ่านปัจจุบัน"
              onChangeText={handleChange('oldPassword')}
              secureTextEntry={true}
              errorMessage={errors.oldPassword}
              autoCapitalize="none"
            />
            <Input
              label="รหัสผ่านใหม่"
              onChangeText={handleChange('newPassword')}
              secureTextEntry={true}
              errorMessage={errors.newPassword}
              autoCapitalize="none"
            />
            <Input
              label="ยืนยันรหัสผ่าน"
              onChangeText={handleChange('confirmPassword')}
              secureTextEntry={true}
              errorMessage={errors.confirmPassword}
              autoCapitalize="none"
            />
            <ButtonWrapper>
              <Button text="เสร็จสิ้น" block onPress={handleSubmit} />
            </ButtonWrapper>
          </View>
        )}
      </Formik>
    </ContainerWithSafeArea>
  );
};
