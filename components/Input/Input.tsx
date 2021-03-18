import React from 'react';

import { TextInputProps } from 'react-native';

import { Container, InputWithStyled, Title, ErrorMessage } from './Input.style';

interface InputProps extends TextInputProps {
  /**
   * Input label
   */
  label?: string;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Set disabled state
   */
  disabled?: boolean;
}

export const Input = (props: InputProps) => {
  const { label, errorMessage, disabled } = props;
  return (
    <Container>
      {label && <Title>{label}:</Title>}
      <InputWithStyled
        {...props}
        isError={!!errorMessage}
        editable={!disabled}
      />
      <ErrorMessage>{errorMessage && `* ${errorMessage}`}</ErrorMessage>
    </Container>
  );
};
