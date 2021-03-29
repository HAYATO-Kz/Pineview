import React, {FunctionComponent} from 'react';
import { SafeAreaView } from 'react-native';

import { Container } from './ContainerWithSafeAre.style';
import { Header, HeaderProps} from '../Header/Header'

interface ContainerWithSafeAreaProps {
  padding?: string;
  header?: HeaderProps
}

export const ContainerWithSafeArea: FunctionComponent<ContainerWithSafeAreaProps> = (props) => {
  const { children, padding = '0px', header } = props;

  return (
    <Container padding={'0px'}>
      <SafeAreaView>
      { header && <Header {...header} /> }
      <Container padding={padding}>
      {children}
      </Container>
      </SafeAreaView>
    </Container>
  );
};
