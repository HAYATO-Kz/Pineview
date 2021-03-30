import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const Text = styled(DefaultText)`
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 6px 6px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const PlateWrapper = styled.TouchableOpacity`
  flex: 1;
  margin: 6px;
`;
