import styled from 'styled-components/native';

import { DefaultText } from '../../components';

export const Image = styled.Image`
  width: 228px;
  height: 228px;
  border-width: 1px;
  border-color: rgba(62, 23, 0, 0.5);
  border-radius: 24px;
`;

export const ImageWrapper = styled.TouchableOpacity`
  margin: 62px 0 22px;
`;

export const TextWrapper = styled.TouchableOpacity`
  margin-bottom: 45px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const UploadImageTitle = styled(DefaultText)`
  color: #613400;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
`;
