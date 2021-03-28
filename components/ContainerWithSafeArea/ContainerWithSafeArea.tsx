import React, {FunctionComponent} from 'react';
import { SafeAreaView } from 'react-native';

import { Container, ContentContainer} from './ContainerWithSafeAre.style';
import { Header, HeaderProps} from '../Header/Header'

interface ContainerWithSafeAreaProps {
  padding?: string;
  header?: HeaderProps
  isTransparent?: boolean;
}

export const ContainerWithSafeArea: FunctionComponent<ContainerWithSafeAreaProps> = (props) => {
  const { children, padding = '0px', header,isTransparent } = props;

  return (
    <Container isTransparent={isTransparent}>
      <SafeAreaView >
      { header && <Header {...header} /> }
      <ContentContainer padding={padding}>
      {children}
      </ContentContainer>
      </SafeAreaView>
    </Container>
  );
};
