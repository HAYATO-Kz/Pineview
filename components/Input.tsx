import React from 'react';
import styled from 'styled-components/native';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  /**
   * Inout label
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
  const {label, errorMessage, disabled} = props;

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

const InputWithStyled = styled.TextInput<{isError?: boolean}>`
  border-radius: 4px;
  height: 52px;
  padding: 16px;

  ${(props) => {
    if (props.editable) {
      if (props.isError) {
        return `
                border: 2px solid #f5222d;
                background: rgba(245, 34, 45, 0.1);
                `;
      } else {
        return `
                border: 2px solid #613400;
                background: #ffffff;
                `;
      }
    } else {
      return `
                border: 2px solid rgba(97, 52, 0, 0.6);
                background: #F0F0F0;
            `;
    }
  }}
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

const Title = styled.Text`
  color: #613400;
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 6px;
`;

const ErrorMessage = styled.Text`
  margin: 6px 0 0;
  color: #f5222d;
  font-weight: 400;
  font-size: 13px;
  height: 15px;
`;
