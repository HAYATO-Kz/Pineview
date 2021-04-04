import styled from 'styled-components/native';

import { DefaultText } from '../../components/DefaultText/DefaultText.style';

export const Title = styled(DefaultText)`
  color: #613400;
  font-size: 36px;
  font-weight: 600;
  margin: 0px 0px 16px;
`;

export const SubText = styled(DefaultText)`
  color: #613400;
  font-size: 13px;
  font-weight: 500;
  margin: 0px 0px 12px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GridWrapper = styled.View`
  margin: 16px 0px;
`;

export const ShareCollectionButton = styled.TouchableOpacity`
  border: 1px solid #613400;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
`;

export const ShareCollectionButtonText = styled(DefaultText)`
  color: #613400;
  font-size: 13px;
  font-weight: 500;
  margin-left: 5px;
`;
