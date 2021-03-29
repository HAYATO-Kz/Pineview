import styled from 'styled-components/native';

import { DefaultText } from '../../components/DefaultText/DefaultText.style';

export const ImageWrapper = styled.View<{ width: string }>`
  width: 154px;
  height: 154px;
  transform: translateX(${(p) => p.width});
  position: absolute;
  top: -77px;
  left: 50%;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  shadow-color: #000000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  position: relative;
  width: 100%;
  margin: 77px 0px 16px;
  padding: 90px 0px 29px;;
`;

export const ButtonTab = styled.TouchableOpacity`
  width: 100%;
  padding: 0px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Tab = styled.View`
  width: 100%;
  padding: 0px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.View`
  margin: 12px 0 12px 24px;
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
`;

export const Email = styled(DefaultText)`
  font-size: 14px;
  font-weight: 600;
  margin: 24px 0px 19px;
`;

export const Username = styled(DefaultText)`
  font-size: 28px;
  font-weight: 700;
`;

export const IconContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconLabel = styled(DefaultText)`
  font-size: 14px;
  font-weight: 600;
  margin-left: 16px;
`;
