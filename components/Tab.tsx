import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, View, Text} from 'react-native';

export interface TabProps {
  label: string;
  value: string;
  isActive?: boolean;
  color?: string;
  onPress?: () => void;
}

export const Tab = (props: TabProps) => {
  const {label, value, isActive, color = '#531DAB', onPress} = props;

  return (
    <ButtonWithStyled active={isActive} color={color} onPress={onPress}>
      <TextWithStyled active={isActive} color={color}>
        {label}
      </TextWithStyled>
    </ButtonWithStyled>
  );
};

const ButtonWithStyled = styled(TouchableOpacity)<{
  active?: boolean;
  color: string;
}>`
  background: ${(p) => (p.active ? p.color : '#fff')};
  border-radius: 50px;
  padding: 5px 21px;
  margin: 0 5px 0 0;
  border: 1px solid ${(p) => p.color};
`;

const TextWithStyled = styled.Text<{active?: boolean; color: string}>`
  color: ${(p) => (p.active ? '#fff' : p.color)};
  font-size: 14px;
  font-weight: ${(p) => (p.active ? 700 : 400)};
`;
