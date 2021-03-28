import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const ModalContainer = styled.SafeAreaView`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalWrapper = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.05);
`;

export const ButtonText = styled(DefaultText)`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
`;

export const HeaderText = styled(DefaultText)`
  font-weight: 400;
  font-size: 14px;
  color: #888888;
`;

export const Divider = styled.View`
  height: 6px;
  background: rgba(0, 0, 0, 0.05);
`;
export const CancelButtonText = styled(DefaultText)`
  font-weight: 600;
  font-size: 18px;
  color: #f5222d;
`;
