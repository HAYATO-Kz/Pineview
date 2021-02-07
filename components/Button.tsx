import React from 'react';
import styled from 'styled-components/native';

export interface ButtonProps {
  text: string;
  block?: boolean;
  outline?: boolean;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {text, block, outline, onPress, disabled} = props;
  return (
    <ButtonWithStyled
      onPress={onPress}
      outline={outline}
      block={block}
      disabled={disabled}>
      <ButtonText outline={outline}>{text}</ButtonText>
    </ButtonWithStyled>
  );
};

const ButtonWithStyled = styled.TouchableOpacity<{
  block?: boolean;
  outline?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  min-height: 47px;
  border: 2px solid #613400;
  border-radius: 5px;
  background: ${(p) => (p.outline ? '#ffffff' : '#613400')};
  width: ${(p) => (p.block ? '100%' : 'null')};
`;

const ButtonText = styled.Text<{outline?: boolean}>`
  font-weight: 700;
  font-size: 14px;
  margin: 16px;
  color: ${(p) => (p.outline ? '#613400' : '#ffffff')};
`;
