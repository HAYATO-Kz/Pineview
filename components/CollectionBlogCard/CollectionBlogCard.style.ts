import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const Card = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 10px;
  width: 100%;
  shadow-color: #000000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  background: #ffffff;
`;

export const CollectionImage = styled.Image`
  width: 100%;
  height: undefined;
  border: 1px solid #ededed;
  aspect-ratio: 1;
`;

export const InformationContainer = styled.View`
  margin-top: 12px;
  width: 100%;
`;

export const Title = styled(DefaultText)`
  font-size: 10px;
  font-weight: 500;
  color: #613400;
  height: 30px;
  width: 100%;
`;
