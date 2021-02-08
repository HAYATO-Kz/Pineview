import React from 'react';
import styled from 'styled-components/native';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  /**
   * Inout label
   */
  label?: string;
}

export const Input = (props: InputProps) => {
  const {label} = props;

  return (
    <Container>
      {label && <Title>{label}:</Title>}
      <InputWithStyled {...props} />
    </Container>
  );
};

const InputWithStyled = styled.TextInput`
  border: 2px solid #613400;
  border-radius: 4px;
  height: 52px;
  padding: 16px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin: 6px 0 0;
`;

const Title = styled.Text`
  color: #613400;
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 6px;
`;
