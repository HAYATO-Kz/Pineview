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
  border: 1px solid #000000;
  position: relative;
  width: 100%;
  margin: 77px 0px 16px;
  padding: 90px 0px 29px;;
`;

export const ButtonTab = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
`;

export const Tab = styled.View`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
`;

export const Email = styled(DefaultText)`
  font-size: 28px;
  font-weight: 700;
`;

export const Username = styled(DefaultText)`
  font-size: 14px;
  font-weight: 600;
  margin: 24px 0px 19px;
`;

export const IconContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const IconLabel = styled(DefaultText)`
  font-size: 14px;
  font-weight: 600;
  margin-left: 16px;
`;
