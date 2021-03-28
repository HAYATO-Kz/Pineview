import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const Card = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 10px;
  width: 100%;
  shadow-color: #000000;
  shadow-offset: {width: 0, height: -4};
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  background: #ffffff;
`;

export const CollectionImage = styled.Image`
  width: 100%;
  height: undefined;
  border-color:#ededed;
  border-width: 1px;
  aspect-ratio: 1;
`;

export const InformationContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  width: 100%;
`;

export const TextContainer = styled.View`
  display: flex;
`;

export const Title = styled(DefaultText)`
  font-size: 12px;
  font-weight: 500;
  color: #613400;
`;

export const ReviewCount = styled(DefaultText)`
  font-size: 10px;
  font-weight: 400;
  color: #613400;
`;
