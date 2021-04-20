import React, { useState, FunctionComponent } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';

import {
  Container,
  ContentContainer,
  Content,
} from './ContainerWithSafeAre.style';
import { LoadingModal } from '../LoadingModal/LoadingModal';
import { Header, HeaderProps } from '../Header/Header';

interface ContainerWithSafeAreaProps {
  paddingTop?: number;
  paddingRear?: number;
  header?: HeaderProps;
  isTransparent?: boolean;
  isInTabMode?: boolean;
  background?: string;
  loading: boolean;
  fullscreen?: boolean;
}

const { height } = Dimensions.get('window');

export const ContainerWithSafeArea: FunctionComponent<ContainerWithSafeAreaProps> = (
  props,
) => {
  const {
    children,
    paddingTop = 0,
    paddingRear = 0,
    header,
    isTransparent,
    isInTabMode,
    loading,
    fullscreen,
    background = '#ffffff',
  } = props;
  const [screenHeight, setScreenHeight] = useState(0);

  const onContentSizeChange = (contentWidth: any, contentHeight: any) => {
    setScreenHeight(contentHeight);
  };

  return (
    <Container isTransparent={isTransparent} background={background}>
      <SafeAreaView>{header && <Header {...header} />}</SafeAreaView>
      <ContentContainer
        scrollEnabled={screenHeight > (isInTabMode ? height - 175 : height)}
        onContentSizeChange={onContentSizeChange}>
        <Content paddingTop={paddingTop} paddingRear={paddingRear} fullscreen={fullscreen}>
          {children}
        </Content>
        <LoadingModal visible={loading} />
      </ContentContainer>
    </Container>
  );
};
