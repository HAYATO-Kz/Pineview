import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

import { Container, Title, MiddleBox } from './Header.style';

export interface HeaderProps {
  title?: string;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
  hasBorder?: boolean;
}

export const Header = (props: HeaderProps) => {
  const { title, leftComponent, rightComponent, hasBorder } = props;

  return (
    <Container hasBorder={hasBorder}>
      <View>{leftComponent}</View>
      <MiddleBox>
        <Title>{title}</Title>
      </MiddleBox>
      <View>{rightComponent}</View>
    </Container>
  );
};
