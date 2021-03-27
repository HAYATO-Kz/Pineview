import React, {FunctionComponent} from 'react';
import { SafeAreaView } from 'react-native';

import { Container, ContentContainer} from './ContainerWithSafeAre.style';
import { Header, HeaderProps} from '../Header/Header'

interface ContainerWithSafeAreaProps {
  padding?: string;
  header?: HeaderProps
}

export const ContainerWithSafeArea: FunctionComponent<ContainerWithSafeAreaProps> = (props) => {
  const { children, padding = '0px', header } = props;

  return (
    <Container >
      <SafeAreaView >
      { header && <Header {...header} /> }
      <ContentContainer padding={padding}>
      {children}
      </ContentContainer>
      </SafeAreaView>
    </Container>
  );
};
