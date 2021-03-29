import styled from 'styled-components/native';

import { DefaultText } from '../../components';

export const Title = styled(DefaultText)`
  font-size: 24px;
  font-weight: 600;
`;

export const SubText = styled(DefaultText)`
  margin: 5px 0px;
  font-weight: 500;
  font-size: 13px;
`;

export const FavoriteContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 4px;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const HTMLWrapper = styled.View`
  shadow-color: #000000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  flex: 1;
  background: #ffffff;
  padding: 21px;
`;

export const ModalContainer = styled.View`
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
