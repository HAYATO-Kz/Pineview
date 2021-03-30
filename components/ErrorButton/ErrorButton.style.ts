import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const ButtonWithStyled = styled.TouchableOpacity<{
  block?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  min-height: 47px;
  border-radius: 5px;
  width: ${(p) => (p.block ? '100%' : 'null')};
  border: 2px solid #f5222d;
  background: rgba(245, 34, 45, 0.1);
`;

export const ButtonText = styled(DefaultText)<{
  outline?: boolean;
  disabled?: boolean;
}>`
  font-size: 14px;
  font-weight: 500;
  margin: 16px;
  color: #f5222d;
`;
