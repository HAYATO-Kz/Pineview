import styled from 'styled-components/native';

export const TabWrapper = styled.TouchableOpacity<{
  active?: boolean;
  color: string;
}>`
  background: ${(p) => (p.active ? p.color : '#fff')};
  border-radius: 50px;
  padding: 5px 21px;
  margin: 0 5px 0 0;
  border: 1px solid ${(p) => p.color};
`;

export const TextWithStyled = styled.Text<{ active?: boolean; color: string }>`
  color: ${(p) => (p.active ? '#fff' : p.color)};
  font-size: 14px;
  font-weight: ${(p) => (p.active ? 700 : 400)};
`;
