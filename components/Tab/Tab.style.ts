import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style'

export const TabWrapper = styled.TouchableOpacity<{
  active?: boolean;
  color: string;
}>`
  background: ${(p) => (p.active ? p.color : '#fff')};
  border-radius: 50px;
  padding: 5px 15px;
  margin: 0px 5px 0px 0px;
  border: 1px solid ${(p) => p.color};
`;

export const TextWithStyled = styled(DefaultText)<{ active?: boolean; color: string }>`
  color: ${(p) => (p.active ? '#fff' : p.color)};
  font-size: 14px;
  font-weight: ${(p) => (p.active ? 700 : 400)};
`;
