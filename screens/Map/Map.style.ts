import styled from 'styled-components/native';
import { Callout,CalloutSubview } from 'react-native-maps';


import { DefaultText } from '../../components';

export const AbsoluteWrapper = styled.View`
  width: 100%;
  position: absolute;
`;

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 16px;
`;

export const HeadContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.TextInput`
  border: 3px solid #efeff4;
  flex: 1;
  background: #ffffff;
  padding: 0px 16px;
  border-radius: 4px;
  font-family: Kanit;
  color: #613400;
  shadow-color: #000000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;

export const SearchInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0px 0px 13px;
`;

export const Logo = styled.Image`
  height: 100%;
  width: 100%;
  background: #ffffff;
  border-radius: 19px;
`;

export const LogoWrapper = styled.TouchableOpacity`
  height: 38px;
  width: 38px;
  border-radius: 19px;
  margin: 0px 0px 0px 6px;
  border: 1px solid #613400;
`;

export const ToolTipContainer = styled(Callout)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #ffffff;
  width: 247px;
`;

export const ButtonWrapper =  styled.View`
  position: absolute;
  bottom: 24px;
  width:100%;
  padding: 0px 16px;
`

export const ToolTipLabelWrapper = styled(CalloutSubview)`
  width:100%;
`;

export const Label = styled(DefaultText)`
  font-size: 14px;
`;

export const Divider = styled.View`
  height: 1px;
  background: #dddddd;
  margin: 8px 0px;
`;
