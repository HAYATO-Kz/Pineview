import React, { useState, FunctionComponent } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';

import {
  Container,
  ContentContainer,
  Content,
} from './ContainerWithSafeAre.style';
import { Header, HeaderProps } from '../Header/Header';

interface ContainerWithSafeAreaProps {
  padding?: string;
  header?: HeaderProps;
  isTransparent?: boolean;
}

const { height } = Dimensions.get('window');

export const ContainerWithSafeArea: FunctionComponent<ContainerWithSafeAreaProps> = (
  props,
) => {
  const { children, padding = '0px', header, isTransparent } = props;
  const [screenHeight, setScreenHeight] = useState(0);

  const onContentSizeChange = (contentWidth: any, contentHeight: any) => {
    setScreenHeight(contentHeight);
  };

  return (
    <Container isTransparent={isTransparent}>
      <SafeAreaView>{header && <Header {...header} />}</SafeAreaView>
      <ContentContainer
        scrollEnabled={screenHeight > height}
        onContentSizeChange={onContentSizeChange}>
        <Content padding={padding}>{children}</Content>
      </ContentContainer>
    </Container>
  );
};
