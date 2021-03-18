import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { Container, Title } from './Header.style';

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
      <Title>{title}</Title>
      <View>{rightComponent}</View>
    </Container>
  );
};
