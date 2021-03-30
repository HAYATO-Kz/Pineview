import styled from 'styled-components/native';

import { DefaultText } from '../DefaultText/DefaultText.style';

export const ModalContainer = styled.View`
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ModalWrapper = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  padding: 0 53px;
  display:flex;
  justify-content:center;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(DefaultText)`
  font-size: 18px;
  font-weight: 600;
`;

export const SubText = styled(DefaultText)`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #888888;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

export const ConfirmButtonText = styled(DefaultText)`
  font-size: 18px;
  font-weight: 600;
  color: #f5222d;
`;

export const CancelButtonText = styled(DefaultText)`
  font-size: 18px;
  font-weight: 400;
  color: #8c8c8c;
`;
