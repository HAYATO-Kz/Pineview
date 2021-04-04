import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const Text = styled(DefaultText)`
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 8px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IconContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85px;
`;

export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const IconWrapper = styled.TouchableOpacity`
  width: 36px;
`;
