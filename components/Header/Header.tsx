import React, { Component } from 'react';
import { Container, Title, Wrapper } from './Header.style';

export interface HeaderProps {
  title?: string;
  rightComponent?: any;
  leftComponent?: any;
  hasBorder?: boolean
}

export const Header = (props: HeaderProps) => {
  const { title, leftComponent, rightComponent, hasBorder } = props;

  return (
    <Container hasBorder={hasBorder}>
      <Wrapper>{leftComponent}</Wrapper>
      <Title>{title}</Title>
      <Wrapper>{rightComponent}</Wrapper>
    </Container>
  );
};
