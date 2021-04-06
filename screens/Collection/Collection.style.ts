import styled from 'styled-components/native';
import { DefaultText } from '../../components';

export const Title = styled(DefaultText)`
  color: #613400;
  font-size: 36px;
  font-weight: 600;
  margin: 0 16px;
`;

export const ShareCollectionButton = styled.TouchableOpacity`
  border: 1px solid #613400;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
`;

export const ShareCollectionButtonText = styled(DefaultText)`
  color: #613400;
  font-size: 11px;
  font-weight: 500;
  margin-left: 5px;
`;

export const SubContainerText = styled(DefaultText)`
  color: #613400;
  font-size: 13px;
  font-weight: 500;
`;

export const SubContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 16px 16px;
  align-items: center;
`;

export const GridWrapper = styled.View`
  padding: 16px;
`;

export const NewCollectionButtonCard = styled.TouchableOpacity`
  width: 100%;
  border-radius: 6px;
  border: 2px dashed rgba(62, 23, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 10px;
`;

export const IconWrapper = styled.View`
  width: 100%;
  height: undefined;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewCollectionText = styled(DefaultText)`
  margin-top: 26px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(62, 23, 0, 0.5);
`;
