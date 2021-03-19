import styled from 'styled-components/native';

import { DefaultText } from '../../components'

export const HomeContainer = styled.SafeAreaView`
  background-color: #ffeeb4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Logo = styled.Image`
  width: 100%;
`;

export const Mascot = styled.Image`
  max-width: 100%;
`;

export const DividerRow = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  margin: 12px 0px 22px;
`;
export const Divider = styled(DefaultText)`
  font-weight: 700;
  font-size: 13px;
  color: #000;
  background-color: #ffeeb4;
  padding: 0px 10px;
  transform: translateY(7px);
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 15px;
  margin-top: 20px;
`;

export const SecondaryButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SecondaryButtonWrapper = styled.View`
  flex: 1;
`;

export const Space = styled.View`
  width: 16px;
`;
