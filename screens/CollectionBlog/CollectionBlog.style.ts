import styled from 'styled-components/native';

import { DefaultText } from '../../components/DefaultText/DefaultText.style';

export const Title = styled(DefaultText)`
  color: #613400;
  font-size: 36px;
  font-weight: 600;
  margin: 0 16px 16px;
`;

export const SubText = styled(DefaultText)`
  color: #613400;
  font-size: 13px;
  font-weight: 500;
  margin: 0 16px 12px;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GridWrapper = styled.View`
  padding: 16px;
`;
