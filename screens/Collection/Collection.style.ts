import styled from 'styled-components/native';
import { DefaultText } from '../../components';

export const Title = styled(DefaultText)`
  color: #613400;
  font-size: 36px;
  font-weight: 600;
  margin: 0 16px;
`;

export const SubContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 16px 16px;
  align-items: center;
`;

export const NewCollectionButton = styled.TouchableOpacity`
  border: 1px solid #613400;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
`;

export const NewCollectionButtonText = styled(DefaultText)`
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

export const GridWrapper = styled.View`
  padding: 16px;
`

export const CollectionContainer = styled.View``;
