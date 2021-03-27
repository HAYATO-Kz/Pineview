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
  justify-content: space-between;
  padding: 8px 16px;
`;

export const OptionContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.05);
`;

export const HeaderText = styled(DefaultText)`
  font-weight: 600;
  font-size: 18px;
  color: #888888;
`;

export const Button = styled.TouchableOpacity`
  padding: 0 10px;
`;
export const ButtonText = styled(DefaultText)`
  font-weight: 400;
  font-size: 18px;
  color: #888888;
`;

export const OptionLabel = styled(DefaultText)`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
`;

export const CreateNewCollection = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.05);
  width: 100%;
`;

export const CreateNewCollectionText = styled(DefaultText)`
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    margin-left: 10px;
`;
